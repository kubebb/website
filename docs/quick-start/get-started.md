---
sidebar_position: 1
---

# 部署底座组件

本章节主要介绍底座组件的部署步骤，包括相关的开源技术组件、前提条件以及快速部署，并将部署的集群添加到服务门户上。

### 部署步骤

#### 前提条件

如果某些组件已经部署，可以忽略，最少仅需要一个节点的 Kubernetes 集群。

- [安装 Docker](https://docs.docker.com/engine/install/)
- 安装 Kubernetes
  - [安装 kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)
参考：`kind create cluster --config=kind-conf.yaml --image=kindest/node:v1.20.15`，至少需要暴露 443 端口，同时集群 API 会暴露一个随机端口，参考配置：
  ```yaml
  # kind-conf.yaml
  kind: Cluster
  apiVersion: kind.x-k8s.io/v1alpha4
  nodes:
    - role: control-plane
      extraPortMappings:
      - containerPort: 80
        hostPort: 80
        protocol: TCP
      - containerPort: 443
        hostPort: 443
        protocol: TCP
  ```
  - [安装 kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)
- [安装 Helm](https://helm.sh/docs/intro/install/)
- 获取源代码
  ```shell
  $ git clone https://github.com/kubebb/building-base.git
  ```

#### 部署 u4a-component
首先，需要部署 u4a-component 组件，负责提供基于 Kubernetes 的账号、认证、权限和审计的功能。并且，基于该组件底座，可以按照后面的步骤添加更多的功能组件。

> **注意**
> 以下步骤将部署一个 ingress nginx controller，ingressclass 名字为 'portal-ingress'，同时，部署 cert-manager 用来进行证书管理.

本步骤完成后，会部署以下服务：
* 证书管理：cert-manager
* 负载均衡：ingress-nginx
* 多租户管理：capsule
* 在没有开启 OIDC 的 Kubernetes 集群上提供 OIDC 代理：kube-oidc-proxy
* 提供 OIDC 及 IAM 服务：oidc-server
* 资源聚合服务，为对多个资源提供统一的视图资源：resource-view-controller

获取本项目的源代码后，进入 u4a-component 目录，并按照以下步骤部署：

1. 创建 namespace `u4a-namespace`

``` shell
kubectl create ns u4a-system
```

2. 编辑 u4a-component/values.yaml（helm的配置文件） 来替换以下占位符：
* `<replaced-ingress-nginx-ip>`, 替换为 ingress nginx 所部署节点的 IP
* 如果使用自己的镜像仓库，注意更新 registryServer 及其他镜像地址

3. 编辑 `charts/cluster-component/values.yaml` 文件，替换`<replaced-ingress-node-name>` 为 ingress nginx 所部署节点的名称
    ```yaml
    ingress-nginx:
    # MUST update this value
      deployedHost: &deployedHost
        <replaced-ingress-node-name>
    ```

2. 使用 helm 安装 u4a-component

    ```
    # 部署组件
    # 1. 部署 cluster-component
    $ helm install --wait -n u4a-system cluster-component -f charts/cluster-component/values.yaml charts/cluster-component
    # 等待所有的 pod 正常运行，默认 ingress-nginx 会对外暴露 80，443 端口

    # 2. 部署 u4a-component
    $ helm install --wait -n u4a-system u4a-component .
    # 等待所有的 pod 正常运行
    $ kubectl get pod -n u4a-system
    NAME                                                          READY   STATUS    RESTARTS   AGE
    bff-server-6c9b4b97f5-gqrx6                                   1/1     Running   0          45m
    capsule-controller-manager-6cf656b98c-sjm5n                   1/1     Running   0          66m
    cert-manager-756fd78bff-wb2vh                                 1/1     Running   0          76m
    cert-manager-cainjector-64685f8d48-qg69v                      1/1     Running   0          76m
    cert-manager-webhook-5c46d68c6b-f4dkh                         1/1     Running   0          76m
    cluster-component-ingress-nginx-controller-5bd67897dd-5m9n7   1/1     Running   0          76m
    kube-oidc-proxy-5f4598c77c-fzl5q                              1/1     Running   0          65m
    oidc-server-85db495594-k6pkt                                  2/2     Running   0          65m
    resource-view-controller-76d8c79cf-smkj5                      1/1     Running   0          66m
    ```

3. 在安装成功结束后，控制台会有以下提示:

    ```
    NOTES:
    1. Get the  ServiceAccount token by running these commands:

      export TOKENNAME=$(kubectl get serviceaccount/host-cluster-reader -n u4a-system -o jsonpath='{.secrets[0].name}')
      kubectl get secret $TOKENNAME -n u4a-system -o jsonpath='{.data.token}' | base64 -d
    ```

    按照提示的步骤，保存 token，会在后面添加集群的步骤中使用。


6. 此时，可以在浏览器中打开在第 2 步中配置的 ingress 地址:

    `https://portal.<replaced-ingress-nginx-ip>.nip.io`

    注意：如果由于环境不支持自动解析 nip.io, 可以手动将域名和 ip 的映射添加到本地的 hosts 文件中. 使用默认的 admin/kubebb-admin 用户信息登录。


7. 环境准备，创建集群管理的 namespace，目前必须使用 'cluster-system'.

    ```
    kubectl create ns cluster-system
    ```

8. 在管理平台添加当前集群. 访问“管理控制台”，'集群管理'，点击 '添加集群'。
* API Host, 使用安装时配置的 `hostK8sApiWithOidc` 值
* API Token, 使用步骤 4 中保存的 token  .

现在通过服务门户，已经将当前的部署集群进行了纳管；同时，在“租户管理”中，会有一个默认的系统租户，名称为'system-tenant'.

### 2. 获取更多组件
浏览 [组件市场](../component-market)，安装更多需要的服务组件到门户中，比如：
* [kubedashboard](../component-market/kubedashboard)
* [kubelogin](../component-market/kubelogin)

### 3. 卸载
  ```
  helm uninstall cluster-comoponent -n u4a-system
  helm uninstall u4a-component -n u4a-system
  kubectl delete ns u4a-system
  ```
