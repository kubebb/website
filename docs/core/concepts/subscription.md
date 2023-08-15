---
sidebar_position: 3
---
# 组件订阅

创建一个订阅，表示用户将追踪一个组件（Component）在 仓库（Repository）中的更新，当组件更新时，该组件会根据订阅中的配置自动或待批准后安装到集群中。

## 使用

下面是一个订阅的示例：

```yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: Subscription
metadata:
  name: wordpress-sample
  namespace: kubebb-system
spec:
  component:
    name: repository-bitnami-sample.wordpress
    namespace: kubebb-system
  repository:
    name: repository-bitnami-sample
    namespace: kubebb-system
  componentPlanInstallMethod: auto
  name: my-wordpress
#status:
#  conditions:
#    - lastTransitionTime: "2023-06-07T13:32:26Z"
#      reason: ReconcileSuccess
#      status: "True"
#      type: SourceSynced
#    - lastTransitionTime: "2023-06-07T13:34:35Z"
#      reason: Available
#      status: "True"
#      type: Ready
#    - lastTransitionTime: "2023-06-07T13:34:34Z"
#      reason: ReconcileSuccess
#      status: "True"
#      type: PlanSynced
#  installed:
#    - componentPlan:
#        name: sub-wordpress-sample-16.1.13
#        namespace: kubebb-system
#      installedTime: "2023-06-07T13:34:34Z"
#      installedVersion:
#        appVersion: 6.2.2
#        createdAt: "2023-06-06T19:08:58Z"
#        deprecated: false
#        digest: 47096ed3f0a385e5830e90c75f443b7be107d7fa6df6aa869e7deb60b6cb6f8f
#        updatedAt: "2023-06-07T13:34:31Z"
#        version: 16.1.13
#  repositoryHealth:
#    healthy: true
#    lastUpdated: "2023-06-07T13:34:35Z"
#    repository:
#      name: repository-bitnami-sample
#      namespace: kubebb-system
```

上述订阅定义了监控的组件是 `kubebb-system` 命名空间的 `repository-bitnami-sample.wordpress`。
当组件有新版本发布时，安装方式为 `auto` ，即自动安装。
该组件会被安装为 `my-wordpress` 。
查看该订阅的 `status` 可以看到该订阅会显示由该订阅创建的组件安装计划（ComponentPlan），以及该订阅对应的组件的仓库的健康状态。

## CRD 定义说明

CRD 的代码定义位于 [subscription_types.go](https://github.com/kubebb/core/blob/main/api/v1alpha1/subscription_types.go)。接下来会详细介绍每个字段的含义及其作用。

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
  该字段用来指明要监控的组件所在的仓库实例，一般使用 `namespace` 和 `name` 来唯一确定，一般由控制器自动填充，不需要用户填写。
- `spec.componentPlanInstallMethod` *可选字段*
  组件安装计划的安装方式，默认为 `auto`，可选项为 `auto` 或 `manual`
- `spec.其他`
  订阅中完整的包含了组件安装计划中的自定义配置字段。详细内容见组件安装计划的文档。

## 工作原理

订阅以 Kubernetes Operator 方式实现。当订阅控制器监视发现集群中订阅对应的组件创建或更新时，判断订阅未处理该更新事件时，用订阅中的组件安装计划配置创建一个名为 `sub-<订阅名>-<安装版本>` 的 `ComponentPlan`，触发后续的组件安装步骤。
