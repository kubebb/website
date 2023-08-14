---
sidebar_position: 3
---

# 安装底座

本章节主要介绍底座组件的部署步骤，包括相关的开源技术组件、前提条件以及快速部署，并将部署的集群添加到服务门户上。

:::tip
安装前需完成[安装内核](./core_quickstart)。
:::

## 部署

### 1. 创建官方组件仓库

> 可参考[使用官方组件仓库](./core_quickstart#%E4%BD%BF%E7%94%A8%E5%AE%98%E6%96%B9%E7%BB%84%E4%BB%B6%E4%BB%93%E5%BA%93)

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
