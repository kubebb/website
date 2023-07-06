---
sidebar_position: 3
---
# 组件安装计划

组件安装计划类似于 Kubernetes 原生资源 Job，执行一次性任务，安装一个组件到集群，类似执行一次 `helm install`。

## 使用

下面是一个组件安装计划示例：

```yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: ComponentPlan
metadata:
  name: nginx-15.0.2
  namespace: kubebb-system
spec:
  approved: true
  component:
    name: repository-bitnami-sample.nginx
    namespace: kubebb-system
  name: my-nginx
  override:
    images:
      - name: docker.io/bitnami/nginx
        newTag: latest # default image is docker.io/bitnami/nginx:1.25.1-debian-11-r0, will be replace by docker.io/bitnami/nginx:latest
  repository:
    name: repository-bitnami-sample
    namespace: kubebb-system
  version: 15.0.2
#status:
#  conditions:
#    - lastTransitionTime: "2023-06-21T03:44:31Z"
#      reason: ""
#      status: "True"
#      type: Approved
#    - lastTransitionTime: "2023-06-21T03:44:37Z"
#      reason: ""
#      status: "True"
#      type: Installed
#    - lastTransitionTime: "2023-06-21T03:44:37Z"
#      reason: ""
#      status: "True"
#      type: Succeeded
#  images:
#    - docker.io/bitnami/nginx:latest
#  resources:
#    - NewCreated: true
#      apiVersion: v1
#      kind: Service
#      name: my-nginx
#    - NewCreated: true
#      apiVersion: apps/v1
#      kind: Deployment
#      name: my-nginx
```

上述组件安装计划定义了安装的组件是 `kubebb-system` 命名空间的 `repository-bitnami-sample.nginx`。
安装名为 `my-nginx`，安装版本为 `15.0.2`。
同时在安装时，将镜像 `docker.io/bitnami/nginx` 的 `tag` 替换为 `latest`。

通过 `status` 字段可以看到，当前组件涉及的镜像以及资源。其中资源会标明是新创建还是更新现有资源，一个更新现有资源的例子为：

```yaml
  - apiVersion: v1
    kind: Service
    name: my-wordpress
    specDiffwithExist: no spec diff, but some field like resourceVersion will update
  - apiVersion: apps/v1
    kind: Deployment
    name: my-wordpress
    specDiffwithExist: |
      metadata:
        annotations: map[deployment.kubernetes.io/revision:2] -> <empty> (REMOVED)
      spec:
        replicas: 3 -> 1
        template:
          spec:
            containers:
              '[#0]':
                image: docker.io/bitnami/wordpress:6.2.2-debian-11-r9 -> docker.io/bitnami/wordpress:6.2.2-debian-11-r11
                resources:
                  requests:
                    cpu: 400m -> 300m
                    memory: 1Gi -> 512Mi
```

## CRD 定义说明

CRD 的代码定义位于 [componentplan_types.go](https://github.com/kubebb/core/blob/main/api/v1alpha1/componentplan_types.go)。接下来会详细介绍每个字段的含义及其作用。

:::tip
说明  对于下面的 yaml，我们想要访问 bar 字段，书写格式为 `spec.foo.bar`

```yaml
spec:
  foo:
    bar: xx
```

:::

- `spec.componet`
  该字段用来指明要监控的组件实例，一般使用 `namespace` 和 `name` 来唯一确定
- `spec.repository`  *可选字段*
  该字段用来指明要监控的组件所在的仓库实例，一般使用 `namespace` 和 `name` 来唯一确定，一般由控制器自动填充，不需要用户填写
- `spec.version`
  需要安装的组件版本。
- `spec.approved`
  是否同意安装。`bool` 类型，`true` 或 `false`，当为 `true` 时，自动触发安装流程。为 `false` 时，只会解析这个组件的 `manifest` 到 `ConfigMap` 中，不会安装。这时候，可以修改 `ConfigMap` 中的 `manifest`，实现进一步控制。
- `spec.name`
  组件安装到集群中的名称。类似 `helm release` 的名称
- `spec.override` *可选字段*
  用于覆盖原组件配置的字段。
  - `spec.override.values`
    `JSON` 格式的 `values`，用于覆盖默认值
  - `spec.override.valuesFrom`
    字段为数组。当要设定的字段偏多时，我们一般希望把 `values.yaml` 单独拿出来，放在 `ConfigMap` 或者 `Secret` 中，而且我们可能会有很多 `values.yaml` 文件。具体格式为：
    - `spec.override.valuesFrom[].kind` `Secret` 或 `ConfigMap`
    - `spec.override.valuesFrom[].name` `Secret` 或 `ConfigMap` 的名称，不需要 `namespace` 字段，因为只会查找和当前 ComponentPlan 同 `namespace` 的资源。
    - `spec.override.valuesFrom[].valuesKey` `Secret` 或 `ConfigMap` 的 `data` 中的 `key`，默认为 `values.yaml` 会尝试先后查询 `ConfigMap` 中的 `Data` 和 `BinaryData` 字段，`Secret` 中的 `StringData` 和 `Data` 字段。
  - `spec.override.set` 类似 `helm template --set` 的参数
  - `spec.override.set-string` 类似 `helm template --set-string` 的参数
  - `spec.override.set-file` 类似 `helm template --set-file` 的参数
  - `spec.override.set-json` 类似 `helm template --set-json` 的参数
  - `spec.override.set-literal` 类似 `helm template --set-literal` 的参数
  - `spec.override.images`
    数组。类似 `kustomize` 的镜像自定义参数
    - `spec.override.images[].name` 去除 `tag` 后的原始镜像名称
    - `spec.override.images[].newName` 替代原始镜像名称的名称
    - `spec.override.images[].newTag` 替代原始 `tag` 的新 `tag` 名称
    - `spec.override.images[].digest` 替代原始 `tag` 的新 `digest`，如果 `digest` 有值，会忽略 `newTag` 的值。

## 工作原理

组件安装计划以 Kubernetes Operator 方式实现。使用标准 `helm` 命令将 helm chart 包下载到本地后，首先通过 `helm template` 命令生成组件的 `manifest` 文件，然后执行 `Repository` 和 `ComponentPlan` 上的各种覆盖配置，比如镜像的覆盖配置，然后将结果放到同命名空间的名为 `manifest.<componentPlanName>` 的 `ConfigMap` 中，如果当前 `ComponentPlan` 的 `spec.approved` 字段为 `true`，那么会直接安装，如果为 `false`，会暂时停止在这里，直到这个字段为 `true`，这时，用户可以通过浏览 `ComponentPlan` 中的 `Status` 字段来查看安装这个组件会对集群中现有的资源造成什么影响，当前组件安装计划会新创建哪些资源，又会对哪些资源有修改。如果不满意，还可以直接修改 `manifest` 的 `ConfigMap`，满意后，然后再将 `spec.approved` 改为 `true`，进行安装。
