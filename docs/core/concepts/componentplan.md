---
sidebar_position: 3
---
# 组件安装计划

组件安装计划类似于 Kubernetes 原生资源 Job，执行一次性任务，安装一个组件到集群，类似执行一次 `helm install` 或者 `helm upgrade`

## 使用

下面是一个组件安装计划示例：

```yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: ComponentPlan
metadata:
# labels:
#   core.kubebb.k8s.com.cn/componentplan-release: nginx
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
#  installedRevision: 3
#  latest: true
#  observedGeneration: 5
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
- `spec.force` *可选字段*

  布尔值，更新时通过替换策略强制更新资源, 类似 `helm upgrade --force` 参数，默认为 `false`
- `spec.timeoutSeconds` *可选字段*

  整数值，创建/更新/删除时的超时时间，单位为秒，默认为 `300`，即 5 分钟。类似 `helm install/upgrade --timeout` 参数
- `spec.wait` *可选字段*

  布尔值，如果设置为 `true`，将等待所有的 Pod、PVC、Service 和 Deployment、StatefulSet 或 ReplicaSet 的最小数量的 Pod 处于就绪状态才认为安装/更新成功。等待的时间即为 `spec.timeoutSeconds` 的值，默认为 `false`，类似 `helm install/upgrade --wait` 参数。
- `spec.waitForJobs` *可选字段*

  布尔值，如果设置为 `true`，将等待所有的 Job 完成才认为安装/更新成功。等待的时间即为 `spec.timeoutSeconds` 的值，默认为 `false`，类似 `helm install/upgrade --wait-for-jobs` 参数。
- `spec.description` *可选字段*

  给安装/更新添加一个自定义描述。默认为空，类似 `helm install/upgrade --description` 参数。
- `spec.dependencyUpdate` *可选字段*

  布尔值，在安装/更新组件前，是否更新缺少的依赖项。类似 `helm install/upgrade --dependency-update` 参数，默认为 `false`
- `spec.disableHooks` *可选字段*

  布尔值，如果设置为 `true`，则阻止 Hook 在安装过程中运行，并禁用升级前/后 Hook，类似 `helm install/upgrade --no-hooks` 参数，默认为 `false`
- `spec.disableOpenAPIValidation` *可选字段*

  布尔值，如果设置为 `true`，安装过程将不会根据 Kubernetes OpenAPI Schema 验证渲染的模板。类似 `helm install/upgrade --disable-openapi-validation` 参数 默认为 `false`
- `spec.atomic` *可选字段*

  布尔值，如果设置为 `true`，安装/更新过程会在安装/更新失败时删除安装。如果 `spec.atomic` 设置为 `true`，将自动设置 `spec.wait` 为 `true`。类似 `helm install/upgrade --atomic` 参数，默认为 `false`
- `spec.skipCRDs` *可选字段*

  布尔值，如果设置为 `true`，则跳过 CRD 的安装。默认情况下，如果尚未安装 CRD，会自动安装。类似 `helm install/upgrade --skip-crds` 参数，默认为 `false`
- `spec.enableDNS` *可选字段*

  布尔值，在渲染模板时是否启用 DNS 查询，类似 `helm install/upgrade --enable-dns` 参数 默认为 `false`
- `spec.historyMax` *可选字段*

  整数值，限制每个 release 保存的最大 revisions 数目。使用 `0` 表示无限制，默认为 `10`
- `spec.maxRetry` *可选字段*

  整数值，创建/更新最大重试次数，默认为 `5`
- `spec.override` *可选字段*

  用于覆盖原组件配置的字段。

  - `spec.override.values`

    `JSON` 格式的 `values`，用于覆盖默认值
  - `spec.override.valuesFrom`

    字段为数组。当要设定的字段偏多时，我们一般希望把 `values.yaml` 单独拿出来，放在 `ConfigMap` 或者 `Secret` 中，而且我们可能会有很多 `values.yaml` 文件。具体格式为：

    - `spec.override.valuesFrom[].kind` `Secret` 或 `ConfigMap`
    - `spec.override.valuesFrom[].name` `Secret` 或 `ConfigMap` 的名称，不需要 `namespace` 字段，因为只会查找和当前 ComponentPlan 同 `namespace` 的资源。
    - `spec.override.valuesFrom[].valuesKey` `Secret` 或 `ConfigMap` 的 `data` 中的 `key`，默认为 `values.yaml` 会尝试先后查询 `ConfigMap` 中的 `Data` 和 `BinaryData` 字段，`Secret` 中的 `StringData` 和 `Data` 字段。
  - `spec.override.set`

    数组，类似 `helm template --set` 的参数
  - `spec.override.set-string`

    数组，类似 `helm template --set-string` 的参数
  - `spec.override.images`

    数组。类似 `kustomize` 的镜像自定义参数

    - `spec.override.images[].name`

      去除 `tag` 后的原始镜像名称
    - `spec.override.images[].newName`

      替代原始镜像名称的名称
    - `spec.override.images[].newTag`

      替代原始 `tag` 的新 `tag` 名称
    - `spec.override.images[].digest`

      替代原始 `tag` 的新 `digest`，如果 `digest` 有值，会忽略 `newTag` 的值。

## 状态描述

一个典型的组件安装计划状态示例如下：

```yaml
status:
  conditions:
  - lastTransitionTime: "2023-07-25T12:22:12Z"
    reason: ""
    status: "True"
    type: Approved
  - lastTransitionTime: "2023-07-25T12:25:00Z"
    message: timed out waiting for the condition
    reason: UpgradeFailed
    status: "False"
    type: Actioned
  - lastTransitionTime: "2023-07-25T12:25:00Z"
    reason: ""
    status: "False"
    type: Succeeded
  images:
  - docker.io/bitnami/nginx:xxxxx
  installedRevision: 4
  latest: true
  observedGeneration: 1
  resources:
  - NewCreated: true
    apiVersion: v1
    kind: Service
    name: my-nginx
  - NewCreated: true
    apiVersion: apps/v1
    kind: Deployment
    name: my-nginx
```

- `status.conditions`
  
  组件安装计划（ComponentPlan）状态
  
  - `status.conditions[].lastTransitionTime` 
  
    上次从一种状态转换到另一种状态时的时间戳
  - `status.conditions[].reason` 
  
    机器可读的、驼峰编码（UpperCamelCase）的文字，表述上次状况变化的原因
  - `status.conditions[].message` 
    
    人类可读的消息，给出上次状态转换的详细信息
  - `status.conditions[].status` 
    
    表明该状况是否适用，可能的取值有 `True"`、`False` 或 `Unknown`
  - `status.conditions[].type` 
    
    状况的名称

    可能包含以下状态：

    - `Approved` 
      
      用户已经同意该组件安装计划（ComponentPlan）的安装
    - `Actioned`
      
      某个操作已经完成
    - `Succeeded` 
      
      用户期待的操作已经全部完成

- `status.images`

  该组件安装计划（ComponentPlan）会引入的镜像列表
- `status.installedRevision`

  该组件安装计划（ComponentPlan）安装的helm release revision版本。
- `status.latest`

  helm release 的最新版本是否是该组件安装计划（ComponentPlan）安装的。支持多个组件安装计划（ComponentPlan）按部署时间安装/升级同一个 helm release。
- `status.observedGeneration`

  用于程序内部处理。表示该组件安装计划（ComponentPlan）基于的 `.metadata.generation` 的过期次数。 例如，如果 `.metadata.generation` 当前为 12，但 `.status.observedGeneration` 为 9， 则相对于实例的当前状态已过期。
- `status.resources`

  组件安装计划（ComponentPlan）涉及的资源
  
  - `status.resources[].specDiffwithExist` 
  
    展示该资源的manifest在该组件安装计划（ComponentPlan）应用前后的对比
  - `status.resources[].NewCreated` 
  
    布尔值，该资源是否是新创建的
  - `status.resources[].kind`
    
    该资源的类型
  - `status.resources[].name`
    
    该资源的名称
  - `status.resources[].apiVersion`
    
    该资源的 apiVersion 信息

## 工作原理

组件安装计划以 Kubernetes Operator 方式实现。使用标准 `helm` 命令将 helm chart 包下载到本地后，首先通过 `helm template` 命令生成组件的 `manifest` 文件，然后执行 `Repository` 和 `ComponentPlan` 上的各种覆盖配置，比如镜像的覆盖配置，然后将结果放到同命名空间的名为 `manifest.<componentPlanName>` 的 `ConfigMap` 中，如果当前 `ComponentPlan` 的 `spec.approved` 字段为 `true`，那么会直接安装，如果为 `false`，会暂时停止在这里，直到这个字段为 `true`，这时，用户可以通过浏览 `ComponentPlan` 中的 `Status` 字段来查看安装这个组件会对集群中现有的资源造成什么影响，当前组件安装计划会新创建哪些资源，又会对哪些资源有修改。如果不满意，还可以直接修改 `manifest` 的 `ConfigMap`，满意后，然后再将 `spec.approved` 改为 `true`，进行安装。

### 镜像覆盖策略

![image-changed](../images/image-changed.png)

### 组件安装计划和 Helm release 的关系

![componentplan](../images/componentplan-helm-release.png)
