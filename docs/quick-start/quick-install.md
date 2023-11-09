---
sidebar_position: 1
---

# 安装 Kubebb

## 准备环境

准备基础环境

- [Helm](https://helm.sh/docs/intro/install/) +3.0 客户端
- [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) 客户端

准备Kubernetes集群

:::tip
如果没有kubernets集群，可按照下述教程通过[kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)部署一个开发集群。默认情况下，为适配`building base`,集群至少有一个节点需要为`Ingress Controller`服务节点，并暴露`80`和`443`端口。
:::

1. 安装kind

> 参考: https://kind.sigs.k8s.io/docs/user/quick-start/#installation

Linux环境为例:

```shell
# For AMD64 / x86_64
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-amd64
# For ARM64
[ $(uname -m) = aarch64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-arm64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
```

2. 准备单节点集群[配置文件](https://github.com/kubebb/core/blob/main/tests/kind-config.yaml)`kind-config.yaml`

:::tip

- 此处采用v1.24.13版本，其他版本请自行替换. [版本列表](https://hub.docker.com/r/kindest/node/tags?page=1&ordering=last_updated)。
- 如需创建多节点集群，可参考[3节点配置文件](https://github.com/kubebb/core/blob/main/tests/kind-config-3nodes.yaml)

:::

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: kubebb-core
nodes:
  - role: control-plane
    image: kindest/node:v1.24.13
    kubeadmConfigPatches:
      - |
        kind: InitConfiguration
        nodeRegistration:
          kubeletExtraArgs:
            node-labels: "ingress-ready=true"
    extraPortMappings:
      - containerPort: 80
        hostPort: 80
        protocol: TCP
      - containerPort: 443
        hostPort: 443
        protocol: TCP
```

3. 创建集群

```shell
kind create cluster --config=kind-config.yaml
```

4. 查看集群状态

```shell
kubectl cluster-info --context kind-kubebb-core
```

如果一切正常，输出如下:

```shell
Kubernetes control plane is running at https://127.0.0.1:42607
CoreDNS is running at https://127.0.0.1:42607/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

5. 查看集群节点

```shell
kubectl get nodes
```

如果一切正常，输出如下:

```shell
NAME                              STATUS   ROLES           AGE   VERSION
kubebb-core-control-plane         Ready    control-plane   21m   v1.24.13
```

通过`docker ps`可发现该节点已经暴露了`80`和`443`端口:

```shell
(base) ➜  building-base git:(azure) docker ps
CONTAINER ID   IMAGE                   COMMAND                  CREATED          STATUS          PORTS                                                                 NAMES
e4e3820cdb5a   kindest/node:v1.24.13   "/usr/local/bin/entr…"   22 minutes ago   Up 22 minutes   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp, 127.0.0.1:33611->6443/tcp   kubebb-core-control-plane
```

## 安装内核

:::tip
Kubebb官方提供了helm仓库，方便用户安装: https://kubebb.github.io/components/
:::

1. 添加helm仓库

```shell
helm repo add kubebb https://kubebb.github.io/components/
helm repo update
```

2. 创建命名空间

> 请根据实际情况修改命名空间名称

```shell
kubectl create namespace kubebb-system
```

3. 安装

```shell
helm install -nkubebb-system kubebb-core kubebb/kubebb-core
```

4. 查看安装状态

```shell
kubectl get pods -nkubebb-system 
```

如果一切正常，输入如下:

```shell
NAME                           READY   STATUS    RESTARTS   AGE
kubebb-core-6bd7c5f679-742mq   1/1     Running   0          21h
```

## 安装底座

### 1. 创建官方组件仓库

> 可参考[使用官方组件仓库](#安装内核)

### 2. 创建底座组件空间

:::tip
目前仅支持使用命名空间`u4a-system`
:::

```shell
    kubectl create namespace u4a-system
```

### 3. 部署Cluster Component

组件部署信息`cluster_componentplan.yaml`如下:

> 详细可[参考](https://github.com/kubebb/components/tree/main/examples/cluster-component)

```yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: ComponentPlan
metadata:
  name: cluster-component
  namespace: u4a-system
spec:
  approved: true
  name: cluster-component
  version: 0.1.3
  override:
    set:
    - ingress-nginx.controller.nodeSelector.kubernetes\.io/hostname=kubebb-core-control-plane
  component:
    name: kubebb.cluster-component
    namespace: kubebb-system
```

需调整参数:

- `override.set.ingress-nginx.controller.nodeSelector.kubernetes\.io/hostname` 将作为[ingress-nginx](https://github.com/kubebb/components/tree/main/charts/cluster-component/charts/ingress-nginx)服务节点

> 此处基于[kind开发集群](./prerequisite#kind开发集群)的`kubebb-core-control-plane`节点。

通过一下命令部署:

```shell
    kubectl apply -nu4a-system -f cluster_componentplan.yaml
```

`Cluster Component`部署完成后，可通过以下命令查看组件部署状态:

```shell
    kubectl get componentplan -nu4a-system cluster-component -oyaml
```

当组件部署状态如下时，表示组件部署成功:

```yaml
status:
  conditions:
  - lastTransitionTime: "2023-07-25T08:15:41Z"
    reason: ""
    status: "True"
    type: Approved
  - lastTransitionTime: "2023-07-25T08:15:44Z"
    reason: InstallSuccess
    status: "True"
    type: Actioned
  - lastTransitionTime: "2023-07-25T08:15:44Z"
    reason: ""
    status: "True"
    type: Succeeded
```

### 4. 部署U4A Component

组件部署信息`u4a_componentplan.yaml`如下:

```yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: ComponentPlan
metadata:
  name: u4a-component
  namespace: u4a-system
spec:
  approved: true
  name: u4a-component
  version: 0.1.5
  wait: true
  override:
    valuesFrom:
    - kind: ConfigMap
      name: u4acm
      valuesKey: "values.yaml"
  component:
    name: kubebb.u4a-component
    namespace: kubebb-system
```

其中,组件`U4A-Component`的参数通过`ConfigMap`方式注入，`ConfigMap`的创建流程可参考[U4A组件部署流程](https://github.com/kubebb/components/tree/main/examples/u4a-component#install-u4a-component)

通过一下命令部署:

```shell
    kubectl apply -nu4a-system -f u4a_componentplan.yaml
```

`U4A Component`部署完成后，可通过以下命令查看组件部署状态:

```shell
    kubectl get componentplan -nu4a-system u4a-component -oyaml
```

### 5. 访问底座服务门户

通过以下命令获取门户服务的访问地址:

```shell
(base) ➜  ~ kubectl get ingress -nu4a-system
NAME                             CLASS    HOSTS                          ADDRESS   PORTS     AGE
bff-server-ingress               <none>   portal.172.18.0.2.nip.io             80, 443   4h55m
bff-server-ingress-socket        <none>   portal.172.18.0.2.nip.io             80, 443   4h55m
kube-oidc-proxy-server-ingress   <none>   k8s.172.18.0.2.nip.io                80, 443   4h55m
```

通过浏览器访问`https://portal.172.18.0.2.nip.io`即可进入服务门户。默认的用户名密码为

- 用户名: `admin`
- 密码: `kubebb-admin`

> 注意: 由于使用了[nip.io](https://nip.io/)作为域名解析服务，因此需要将`HOSTS`中的域名解析到`ADDRESS`对应的IP地址上。

## 卸载

### 1. 卸载U4A Component

```shell
    kubectl delete componentplan -nu4a-system u4a-component
```

### 2. 卸载Cluster Component

```shell
    kubectl delete componentplan -nu4a-system cluster-component
```
