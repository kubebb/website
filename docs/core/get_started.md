---
sidebar_position: 2
---

# 快速开始

## 预先准备

### 基础环境

- [Helm](https://helm.sh/docs/intro/install/) +3.0 客户端
- [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) 客户端

### 准备Kubernetes集群

**集群要求:**

- Kubernetes 1.24+

:::tip
如果没有kubernets集群，可按照下述教程通过[kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)部署一个开发集群。默认情况下，为适配`building base`,集群至少有一个节点需要为`Ingress Controller`服务节点，并暴露`80`和`443`端口。
:::

#### Kind开发集群

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

## 快速安装

### Helm安装

:::tip
Kubebb官方提供了helm仓库，方便用户安装: https://kubebb.github.io/components/
:::

1. 添加helm仓库

```shell
helm repo add kubebb https://kubebb.github.io/components/
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

### 源代码安装

1. 克隆代码

> 请根据实际情况修改代码仓库版本

```shell
git clone https://github.com/kubebb/core
```

2. 构建镜像

```shell
cd core
make docker-build IMG=kubebb/kubebb-core:local
```

:::tip
如果使用的是kind开发集群，需要先将镜像推送到kind集群中:

```shell
kind load docker-image kubebb/kubebb-core:local --name kubebb-core
```

:::

3. 安装CRDs

```shell
make install
```

4. 部署kubebb-core

```shell
make deploy IMG=kubebb/kubebb-core:local
```

## 快速体验

:::tip
Kubebb[官方组件仓库](https://github.com/kubebb/components)提供多个认证仓库、组件和组件应用，可供用户体验。后续步骤将使用官方组件仓库举例。
:::

通过以下命令克隆官方组件仓库:

```shell
git clone https://github.com/kubebb/components
```

### 1. 部署一个认证仓库

```shell
cd components
kubectl apply -f repos/repository_kubebb.yaml -nkubebb-system
```

查看仓库状态:

```shell
kubectl get repository -nkubebb-system
```

如果一切正常，输出如下:

```shell
(base) ➜  ~ k get repos  -nkubebb-system
NAME      AGE
kubebb    42h
```

### 2. 获取仓库中的组件

```shell
kubectl get components -nkubebb-system  -l kubebb.component.repository=kubebb
```

如果一切正常，输出如下:

```shell
NAME                       AGE
kubebb.bc-depository       42h
kubebb.bc-explorer         42h
kubebb.cluster-component   17h
kubebb.fabric-operator     20h
kubebb.ingress-nginx       42h
kubebb.kubebb              42h
kubebb.kubebb-core         42h
kubebb.minio               42h
kubebb.tekton-operator     42h
kubebb.weaviate            42h
```

### 3. 部署一个组件

> 以部署`kubebb.minio`为例

```shell
kubectl apply -f examples/minio/componentplan.yaml
```

组件部署配置信息如下:  

```yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: ComponentPlan
metadata:
  name: fabric-minio
  namespace: default
spec:
  approved: true
  name: fabric-minio # similar to helm release name
  version: 5.0.7
  component:
    name: kubebb.minio
    namespace: kubebb-system
```

查看组件部署状态:

```shell
kubectl get componentplan fabric-minio -oyaml
```

如果一切正常，输出如下:

```yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: ComponentPlan
metadata:
  annotations:
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"core.kubebb.k8s.com.cn/v1alpha1","kind":"ComponentPlan","metadata":{"annotations":{},"name":"fabric-minio","namespace":"default"},"spec":{"approved":true,"component":{"name":"kubebb.minio","namespace":"kubebb-system"},"name":"fabric-minio","version":"5.0.7"}}
  creationTimestamp: "2023-07-04T07:52:17Z"
  finalizers:
  - core.kubebb.k8s.com.cn/finalizer
  generation: 3
  name: fabric-minio
  namespace: default
  resourceVersion: "14107"
  uid: 48696a2b-ae46-4522-95af-e951f255105e
spec:
  approved: true
  component:
    name: kubebb.minio
    namespace: kubebb-system
  name: fabric-minio
  override: {}
  repository:
    name: kubebb
    namespace: kubebb-system
  version: 5.0.7
status:
  conditions:
  - lastTransitionTime: "2023-07-04T07:52:17Z"
    reason: ""
    status: "True"
    type: Approved
  - lastTransitionTime: "2023-07-04T07:52:18Z"
    reason: ""
    status: "True"
    type: Installed
  - lastTransitionTime: "2023-07-04T07:52:18Z"
    reason: ""
    status: "True"
    type: Succeeded
  images:
  - hyperledgerk8s/minio-minio:RELEASE.2023-02-10T18-48-39Z
  resources:
  - NewCreated: true
    apiVersion: v1
    kind: ServiceAccount
    name: minio-sa
  - NewCreated: true
    apiVersion: v1
    kind: Secret
    name: fabric-minio
  - NewCreated: true
    apiVersion: v1
    kind: ConfigMap
    name: fabric-minio
  - NewCreated: true
    apiVersion: v1
    kind: Service
    name: fabric-minio-console
  - NewCreated: true
    apiVersion: v1
    kind: Service
    name: fabric-minio
  - NewCreated: true
    apiVersion: v1
    kind: Service
    name: fabric-minio-svc
  - NewCreated: true
    apiVersion: apps/v1
    kind: StatefulSet
    name: fabric-minio
  - NewCreated: true
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    name: fabric-minio-console
```

查看组件Pod状态

```shell
kubectl get pods -l core.kubebb.k8s.com.cn/componentplan=fabric-minio
```

如果一切正常，输出如下:

```shell
NAME             READY   STATUS    RESTARTS   AGE
fabric-minio-0   1/1     Running   0          42h
fabric-minio-1   1/1     Running   0          42h
fabric-minio-2   1/1     Running   0          42h
```
