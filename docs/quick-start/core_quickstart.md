---
sidebar_position: 2
---

# 安装内核

:::tip
安装前需完成[预先准备](./prerequisite)。
:::

## 安装方式

### Helm安装(推荐)

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

5. 查看安装状态

```shell
kubectl get pods -nkubebb-system 
```

如果一切正常，输入如下:

```shell
NAME                           READY   STATUS    RESTARTS   AGE
kubebb-core-6bd7c5f679-742mq   1/1     Running   0          21h
```

## 快速体验

内核安装完成后，可通过以下两种方式快速体验组件化的部署:

### 使用官方组件仓库

:::tip
[官方组件仓库](https://github.com/kubebb/components)提供多个认证仓库、组件和组件应用，可供用户体验。后续步骤将使用官方组件仓库举例。
:::

1. 通过以下命令克隆官方组件仓库:

```shell
git clone https://github.com/kubebb/components
# 后续步骤均在 components 目录下执行
cd components
```

2. 部署官方仓库

```shell
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

3. 获取仓库中的组件

```shell
kubectl get components -nkubebb-system  -l kubebb.component.repository=kubebb
```

如果一切正常，输出如下:

```shell
NAME                       AGE
kubebb.bc-apis             135m
kubebb.bc-depository       135m
kubebb.bc-explorer         135m
kubebb.cluster-component   135m
kubebb.fabric-operator     135m
kubebb.ingress-nginx       135m
kubebb.kubebb              135m
kubebb.kubebb-core         135m
kubebb.minio               135m
kubebb.tekton-operator     135m
kubebb.u4a-component       135m
kubebb.weaviate            135m
```

4. 测试组件部署(可选)

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

### 使用私有组件仓库

待补充
