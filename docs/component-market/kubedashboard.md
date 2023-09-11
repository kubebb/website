---
sidebar_position: 1
---

# kubedashboard 管理工具
这里介绍一下如何基于 kubebb 的底座来部署 Kubernetes Dashboard，并使用统一的 OIDC 认证、单点登录及原生 Kubernetes RBAC 认证。

* 工具代码地址：[kubernetes dashboard ](https://github.com/kubernetes/dashboard)

* Prerequisite
  - 部署 kubebb 的底座组件 u4a-component，提供基于 K8S 构建的基本的账号、认证、权限和审计功能。
  - 获取部署组件
  ```shell
  $ git clone https://github.com/kubebb/addon-components.git
  # 进入对应目录
  $ cd kube-dashboard
  ```

### 安装 Kubernetes dashboard
1. 编辑 values.yaml，按需要替换镜像地址，替换 `<replaced-` 开头的的属性值，其中 OIDC 的相关信息可以在 configmap中获取。

```
# 获取 OIDC client 相关配置
kubectl edit cm oidc-server -n u4a-system
# 记录 issuer，staticClients 的 id、secret 的值
```
修改 values.yaml
```
dashboard:
  dashboardImage: hub.tenxcloud.com/addon_system/kube-dashboard:v2.7.0
  proxyImage: hub.tenxcloud.com/addon_system/keycloak-gatekeeper:latest
  metricsImage: hub.tenxcloud.com/addon_system/kube-dashboard-metrics-scraper:v1.0.8

ingress:
  class: portal-ingress
  host: kubedashboard.<replaced-ingress-nginx-ip>.nip.io

# You must check and update the value of each variable below
kubeOidcProxy:
  issuerUrl: <replaced-issuer-url> # https://portal.172.22.96.209.nip.io/oidc
  clientId: <replaced-client-id>
  clientSecret: <replaced-client-secret>
  usernameClaim: preferred_username
  groupClaim: groups
  hostConfig:
    enabled: true
    hostAliases:
    - hostnames:
      # MUST update this value
      - portal.<replaced-ingress-nginx-ip>.nip.io
      ip: <replaced-ingress-nginx-ip>
```

2. 运行 helm 安装插件
```
# 如果需要，创建单独的 namespace 来部署此插件，比如 addon-system
kubectl create ns addon-system
# 部署 kube-dashboard 插件
helm install kube-dashboard -n addon-system .
```

* Note: 此时，dashboard 的 pod 会处于 ContainerCreating 的状态，这是因为缺少所依赖的配置文件，接下来我们需要准备此配置文件。

3. 创建 kube-dashboard 所需要的 kubeconfig 文件, 以便 kube-dashboard 可以使用统一的 kube-oidc-proxy 进行认证，同时，也需要在配置中使用正确的证书和连接 token 信息
```
# copy the kubeconfig template
$ cp sample-kubeconfig kubeconfig
# edit kubeconfig file to use the correct cluster.certificate-authority-data, cluster.server, user.token

# Step 1
$ export CLUSTER_CA=$(kubectl get secret -n u4a-system oidc-server-root-secret -o jsonpath='{.data.ca\.crt}')
$ use the value from $CLUSTER_CA to replace cluster.certificate-authority-data(<certificate-authority-data>) in kubeconfig file

# Step 2
$ export USER_TOKEN_NAME=$(kubectl -n addon-system get serviceaccount kubernetes-dashboard -o=jsonpath='{.secrets[0].name}')
$ export USER_TOKEN_VALUE=$(kubectl -n addon-system get secret/${USER_TOKEN_NAME} -o=go-template='{{.data.token}}' | base64 --decode)
# use the value from $USER_TOKEN_VALUE to replace user.token(<user-token>) in kubeconfig file

# Step 3 replace cluster.server(<cluster-server>) with the address of kube-oidc-proxy

# Step 4 create the configmap
$ kubectl create cm dashboard-kubeconfig --from-file=kubeconfig -n addon-system
```

4. 重启 kube-dashboard
```
$ kubectl delete pod -n addon-system $(kubectl  get pod -n addon-system | grep kubernetes-dashboard | awk '{print $1}')
```

5. 在 OIDC 服务中添加 kube-dashboard 的 callback 地址.
```
$ kubectl edit cm oidc-server -n u4a-system
# find redirectURIs and add a new redirect url 'https://<kubedashboard-host-name>/oauth/callback'
```

6. 使用 `kubedashboard.<replaced-ingress-nginx-ip>.nip.io` 地址访问 kube-dashboard. 如果处于未登录状态，会被重定向到统一的认证服务进行登录，成功登录后即刻携带授权的 token 回到 kube-dashboard 进行正常使用了。

7. 可以通过给登录的用户授权不同的 RBAC 策略，来验证是否只有授权的资源才能被该用户访问。

### Uninstall
通过 helm uninstall 来卸载该插件
```
helm uninstall kube-dashboard -n addon-system
```
