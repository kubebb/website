---
sidebar_position: 8
---
# 添加集群

## 添加管理集群
前提：已经按照[安装底座](../quick-start/quick-install.md) 完成底座的部署

1. 为集群管理创建一个 namespace，可以使用 cluster-system，用来保存集群信息
```
kubectl create ns cluster-system
```

2. 获取添加集群的 token
```
export TOKENNAME=$(kubectl get serviceaccount/host-cluster-reader -n u4a-system -o jsonpath='{.secrets[0].name}')
kubectl get secret $TOKENNAME -n u4a-system -o jsonpath='{.data.token}' | base64 -d
```

3. 登录管理平台，进入 “集群管理”，点击“添加集群”。

4. 输入集群名称，按需修改集群后缀，这里使用“API Token”方式接入集群。

* API Host，使用支持 OIDC 协议的 K8s API 地址，可以通过 **kubectl get ingress -nu4a-system** 查看kube-oidc-proxy-server-ingress 对应的 Host 信息，比如 https://k8s.172.22.96.136.nip.io
* API Token，输入第 2 步获取的 token 信息

5. 添加成功后，可以在列表上看到集群信息及其状态；选择“租户管理”，会看到名称为 "system-tenant" 的一个系统租户

## 添加托管集群
假设目前已有一个 Kubernetes 集群，通过 tde 部署或者是第三方的 Kubernetes 集群，希望加入管理平台

### 2.1 基础集群组件部署
集群管理员操作，或者通过对应的容器 PaaS 平台进行部署。

1、使用 cluster-component 这个 helm 包，根据需要对 values.yaml 进行修改。一般情况只需要修改镜像仓库的地址，也就是将 172.22.96.34 替换为主集群能够访问的，已经上传好相关依赖镜像的镜像仓库地址。

* ingress nginx 会绑定到对应节点，以便在指定节点提供集群外访问地址，所以需要修改 deployedHost
* ingress nginx 会占用主机的 80、443 端口，保证 ingress nginx 所在主机端口未被占用

```yaml
### values.yaml 示例
# Overwrite ingress-nginx chart template
ingress-nginx:
  enabled: true
  # MUST update this value
  deployedHost: &deployedHost
    tc-build-1.22
  controller:
    ingressClassResource:
      name: portal-ingress
    ingressClass: portal-ingress
    image:
      repository: hub.tenxcloud.com/cluster_system/ingress-nginx-controller
      tag: "v1.3.0"
    admissionWebhooks:
      enabled: false
      patch:
        enabled: true
        image:
          registry: hub.tenxcloud.com
          image: cluster_system/kube-webhook-certgen
          tag: "0.30.0"
          digest: ""
    updateStrategy:
      type: Recreate
    extraArgs:
      update-status: false
      report-node-internal-ip-address: false
      http-port: 8080
      https-port: 8443
      enable-ssl-passthrough: true
      # it'll be 442 by default
      ssl-passthrough-proxy-port: 8442
    service:
      enabled: false
      type: ClusterIP
      internal:
        enabled: true
    config:
      use-gzip: "true"
      enable-vts-status: "true"
      large-client-header-buffers: 4 1m
      max-worker-connections: "65535"
      vts-default-filter-key: $server_name
      worker-processes: "4"
      http-snippet: |
        proxy_cache_path /tmp/bff-cache levels=1:2 keys_zone=static-cache:2m max_size=100m inactive=7d use_temp_path=off;
        proxy_cache_key $scheme$proxy_host$request_uri;
        proxy_cache_lock on;
        proxy_cache_use_stale updating;
    nodeSelector:
      kubernetes.io/os: linux
      # MUST update this value
      kubernetes.io/hostname: *deployedHost

cert-manager:
  enabled: true
  # Required: Cert manager for certificate management
  image: hub.tenxcloud.com/cluster_system/cert-manager-controller:v1.8.0
  caInjectorImage: hub.tenxcloud.com/cluster_system/cert-manager-cainjector:v1.8.0
  webhookImage: hub.tenxcloud.com/cluster_system/cert-manager-webhook:v1.8.0
```

2、运行 helm 命令部署，默认部署在 cluster-system 下

```bash
kubectl create ns cluster-system
# 方式一：解压 helm 包，修改解压后的 values.yaml
helm install cluster-component --namespace cluster-system .
# 方式二：使用 helm 包部署
helm install cluster-component --namespace cluster-system ./cluster-system-0.1.0.tgz -f values.yaml
```

### 2.2 部署租户组件
1、使用 u4a-component 这个 helm 包，根据需要对 **managed-cluster-values.yaml** 进行修改，需要修改以下配置信息：

1）替换所有的 ```<replaced-ingress-nginx-ip>``` 为 ingress nginx 的暴露地址

2）替换 registryServer 为本地仓库

3）替换 issuerUrl 为可用的 OIDC issuer 服务地址；如果无法解析 nip.io 的 OIDC issuer 的地址，需配置 hostAliases

```yaml
registryServer: &registryServer docker.io

addon-component:
  enabled: true
  clusterResPrefix: managed
  tenantManagement:
    registryServer: *registryServer
    image: kubebb/capsule-ce:v0.1.2-20221122
  kubeOidcProxy:
    registryServer: *registryServer
    image: kubebb/kube-oidc-proxy-ce:v0.3.0-20221008
    issuerUrl: https://portal.<oidc-server>.nip.io/oidc
    clientId: bff-client
    ingress:
      enabled: true
      name: portal-ingress
      host: managed-k8s.<replaced-ingress-nginx-ip>.nip.io
    certificate:
      ipAddresses:
        # MUST update this value to the host ip of kube-oidc-proxy
        - <replaced-ingress-nginx-ip>
      dnsNames:
        - kube-oidc-proxy
        - kube-oidc-proxy.u4a-system
        - kube-oidc-proxy.u4a-system.svc
    hostConfig:
      enabled: false
      hostAliases:
        - hostnames:
            # MUST update this value
            - portal.<oidc-server>.nip.io
          # MUST update this value
          ip: <oidc-server>
```

2、运行 helm 命令部署，默认部署在 cluster-system 下

以下命令在管理集群操作，获取 oidc server 的 secret：

```bash
# 导出所需的 secret
kubectl get secret oidc-server-root-secret  -n u4a-system -o yaml > oidc-server-root-secret.yaml
```
使用 oidc-server-root-secret.yaml 在待接入集群操作：

```bash
# 切换到待接入集群，并创建对应的 secret 资源
kubectl apply -f oidc-server-root-secret.yaml

# 生成 oidc-proxy 的证书
# 方法一. 基于 Kubernetes 的 ca 证书生成
# 进入 Kubernetes 的证书目录，一般为 /etc/kubernetes/pki/
cd /etc/kubernetes/pki/
# 创建对应 secret
kubectl create secret tls -n u4a-system oidc-proxy-cert-tls --cert=ca.crt --key=ca.key
# 方法二. 参考 http://kubebb.k8s.com.cn/docs/building-base/configuration/issue-oidc-proxy-certs 生成证书

# 部署 u4a-component
# 方式一：解压 helm 包，修改解压后的 values.yaml（需要指定 --wait，等待所有资源 ready 后才执行 post-install 动作，如果长时间无响应，可以通过查看对应的 pod 状态查看具体情况）
helm install --wait u4a-component --namespace u4a-system  . -f managed-cluster-values.yaml
# 方式二：使用 helm 包部署
helm install --wait u4a-component --namespace u4a-system ./u4a-component-v5.7.0.tgz -f managed-cluster-values.yaml

# 确认服务均启动成功
kubectl get pods -n u4a-system

# 重启 capsule-controller-manager 来加载新的 CapsuleConfiguration 配置
kubectl delete pod -n u4a-system $(kubectl get pods -n u4a-system | grep capsule-controller-manager | awk '{print $1}')
```

### 2.3 添加集群
1、获取所需的接入集群的 token

   如果集群的版本是 kbuernetes v1.24 及以上的版本，上面的 cluster-reader serviceAccount 的 token 不会自动生成，需要手动创建，如纳管集群的 serviceAccount 的名称为 managed-cluster-reader，创建此 serviceAccount 的 secret 的 yaml 如下：

```yaml
apiVersion: v1
kind: Secret
type: kubernetes.io/service-account-token
metadata:
  name: managed-cluster-reader
  namespace: addon-system
  annotations:
    kubernetes.io/service-account.name: "managed-cluster-reader"
```

注意：若 secret 手动创建的，secret 名称为 managed-cluster-reader 
```
# 确认对应 token 存在
kubectl get secret -n u4a-system | grep cluster-reader
# 导出该 secret，比如'managed-cluster-reader-secret'
kubectl get secret managed-cluster-reader-secret -n u4a-system -o yaml > managed-cluster-reader-secret.yaml
```

2、复制到“主集群”上，并创建该 secret

```
# 编辑 yaml，删除 secret 里的 type: kubernetes.io/service-account-token
kubectl apply -f managed-cluster-reader-secret.yaml
```

3、新建 cluster 资源，比如 managed-cluster.yaml（也可以登录后通过页面添加，登录用户需具备对应权限，并使用 secret 里的 token 进行添加）

```yaml
# Create cluster model on host cluster ONLY for now
apiVersion: cluster.karmada.io/v1alpha1
kind: Cluster
metadata:
  annotations:
    displayName: managerd-cluster
  name: managed-cluster
spec:
  syncMode: Pull
  # 1. 如果通过 kube-oidc-proxy 进行了代理，则需要使用 kube-oidc-proxy 的地址，比如 https://192.168.1.123
  # 2. 启用了 OIDC 的 K8S api 的访问地址，比如 https://192.168.1.123:6443
  apiEndpoint: managed-k8s.192.168.1.123.nip.io
  secretRef:
    # Update as needed
    namespace: cluster-system
    # Must update the info of secret reference
    # Run 'kubectl get secret -n cluster-system | grep managed-cluster' to get the secret
    name: managed-cluster-reader-secret
  # Update as needed
  provider: tenxcloud
  region: default
  zone: managed-zone
```
创建 cluster
```
kubectl apply -f managed-cluster.yaml
```

