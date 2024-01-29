---
sidebar_position: 6
---

# 组件评测

**组件评测** 目的是通过尽可能多的自动化测试，从多个纬度评估一个组件。评估一个组件分三个部分的内容：

1. 定义并完成组件的自动化测试
2. 收集处理测试数据
3. 评估获取组件等级

定义 CRD `Rating`, 支持同时设置多个 pipeline， 管理他们的生命周期，统一展示 `PipelineRun`, `TaskRun` 的运行过程。

## 依赖

### [Tekton](https://tekton.dev/docs/operator/)

主要用到 4 个 CRD：

- [Task](https://tekton.dev/docs/pipelines/tasks/)

`Task` 是你定义并按特定执行顺序排列的步骤的集合，是持续集成流程的一部分。`Task` 作为 Kubernetes 集群上的 Pod 执行。 `Task` 在特定命名空间内可用。

- [TaskRun](https://tekton.dev/docs/pipelines/taskruns/)

`TaskRun` 允许你在集群上实例化并执行任务。任务指定执行容器映像的一个或多个步骤，每个容器映像执行一项特定的构建工作。 `TaskRun` 按照指定的顺序执行任务中的步骤，直到所有步骤都成功执行或发生失败。

- [Pipeline](https://tekton.dev/docs/pipelines/pipelines/)

`Pipeline` 是你定义并按特定执行顺序排列的任务集合，是持续集成流程的一部分。`Pipeline` 中的每个任务都在 Kubernetes 集群上作为一个 Pod 执行。你可以配置各种执行条件，以满足你的业务需求。

- [PipelineRun](https://tekton.dev/docs/pipelines/pipelineruns/)

`PipelineRun` 允许你在集群上实例化和执行管道。管道按照所需的执行顺序指定一个或多个任务。`PipelineRun` 会按照指定的顺序执行管道中的任务，直到所有任务都成功执行或出现故障。

### [Arcadia云原生AI](https://github.com/kubeagi/arcadia)

主要用到2个CRD:

- [LLM](https://github.com/kubeagi/arcadia/blob/main/api/v1alpha1/llm_types.go),包含AI大模型服务的访问配置信息
- [Prompt](https://github.com/kubeagi/arcadia/blob/main/api/v1alpha1/prompt_types.go),包含针对LLM服务的请求提示词和控制参数

## 定义

CRD 的代码定义位于 [RatingTypes](https://github.com/kubebb/core/blob/main/api/v1alpha1/rating_types.go)。接下来会详细介绍每个字段的含义及其作用。

:::tip
说明  对于下面的 yaml，我们想要访问 bar 字段，书写格式为 `spec.foo.bar`

```yaml
spec:
  foo:
    bar: xx
```

:::

- `spec.componentName`

  该字段定义了关联的 Component，是**必填字段**。

- `spec.pipelineParams`

   该字段是数组，每一项都包含 `Pipeline` 的名字及其需要的参数，该字段是**必填字段**。数组的每一项介绍

  - `spec.pipelineParams[index].pipelineName` 定义了 `Pipeline` 的名字，该字段是**必填字段**。
  - `spec.pipelineParams[index].params` 这个字段也是数组，里面的每一项分别是。

    - `spec.pipelineParams[index].params[idx].name` 定义的参数的名字，是**必填字段**。
    - `spec.pipelineParams[index].params[idx].value.type` 该字段指明参数的类型，**是必填字段**，有三个可选值 `string`, `array`, `object`。
    - `spec.pipelineParams[index].params[idx].value.stringVal` 当 `type=string` 的时候，填写该字段。
    - `spec.pipelineParams[index].params[idx].value.arrayVal` 当 `type=array` 的时候，填写该字段，数组里的每一项都是字符串。
    - `spec.pipelineParams[index].params[idx].value.objectVal` 当 `type=object` 的时候，填写该字段。

## 工作原理

### 运行时所需资源

通过 `helm` 将 operator 部署在 `kubebb-system` namespace后，会看到以下几个资源( 这里 release 的名字是 `kubebb`)

1. ClusterRole

名为 `kubebb-system.kubebb-rating`，里面仅包含了操作 configmap 资源的权限。
`ClusterRole` 定义了所有的 `Task` 在运行时需要的权限，有新的权限需求，直接更新这个 `ClusterRole` 即可。

2. ServiceAccount

名为 `kubebb-system.kubebb-rating`。这个 serviceaccount 会在每个 `Repository` 的 namespace 下都创建一个。

3. ClusterRoleBinding

名为 `kubebb-system.kubebb-rating`，将 serviceaccount `kubebb-system.kubebb-rating` 与 clusterrole `kubebb-system.kubebb-rating` 绑定。

```shell
kubectl get clusterrole,clusterrolebinding kubebb-system.kubebb-rating 
NAME                                                                CREATED AT
clusterrole.rbac.authorization.k8s.io/kubebb-system.kubebb-rating   2023-08-21T09:24:12Z

NAME                                                                       ROLE                                      AGE
clusterrolebinding.rbac.authorization.k8s.io/kubebb-system.kubebb-rating   ClusterRole/kubebb-system.kubebb-rating   8m8s
```

4. Pipeline, Task

一个名为 `kubebb` 的 pipeline 和 名字分别为 `kubebb-rback`, `kubebb-helm-lint` 的 `Task`。
`Task` 定义了要执行的任务的具体动作，而 `Pipeline` 则是定义了要执行哪些 `Task` 以及这些 `Task` 之间的执行顺序等。

```shell
kubectl get pipeline -nkubebb-system
NAME     AGE
kubebb   4m19s

kubectl get task -nkubebb-system
NAME               AGE
kubebb-helm-lint   4m25s
kubebb-rback       4m25s
```

支持用户自己定义 `Task` 和 `Pipeline`, 但是需要讲这些资源放到与 operator 相同的 **namespace** 下。
`ClusterRole`, `ClusterRoleBinding`, `ServiceAccount` 是给 pipelinerun 在执行 `Task` 用的，避免 `Task` 因为权限不足而失败。

### 核心逻辑

1. 当 `Rating` 创建时

给 `Rating` 添加两个标签 `rating.component=<component-name>`, `rating.repository=<repository-name>` 用来记录与当前 `Rating` 关联的组件和仓库的名字。

2. 当 `Rating` 更新时

目前对于 `spec`, `status` 的更新不做处理，只有当 `metadata` 发生变化的时候，才会进入处理逻辑。

根据 `spec` 定义的 pipeline 列表，开始创建 `PipelineRun`, 同时 `watch` `PipelineRun` 的变化，将其状态，以及 `Task`, `TaskRun` 的信息同步到 `Rating`。

3. 当 `Rating` 删除时

`Rating` 被删除，他所创建的 `PipelineRun` 同样会被删除。

## 使用

一个 rating CR 的例子:

```yaml
# rating.yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: Rating
metadata:
  name: rating
  namespace: kubebb-system
spec:
  componentName: kubebb.kubebb-core
  pipelineParams:
  - pipelineName: kubebb
    params:
    - name: URL
      value: 
        type: string
        stringVal: https://github.com/kubebb/components/releases/download/kubebb-core-v0.1.10/kubebb-core-v0.1.10.tgz
        arrayVal: []
        objectVal: {}
    - name: COMPONENT_NAME
      value: 
        stringVal: kubebb-core
        type: string
    - name: VERSION
      value: 
        stringVal: v0.1.10
        type: string
    - name: REPOSITORY_NAME
      value: 
        stringVal: kubebb
        type: string
```

上述 yaml 所定义的 `Rating` 包含一个默认的 pipeline，并且将 pipeline 需要的参数传递进去。 执行上面的 yaml

```shell
kubectl apply -f rating.yaml
```

可以持续观察 Rating 的变化

```shell
kubectl -nkubebb-system get rating -oyaml -w
```

如果运行不成功，会在 status 中给出错误原因。 运行成功会得到如下的 status

```yaml
status:
  pipelineRuns:
    rating.kubebb:
      actualWeight: 2
      conditions:
      - lastTransitionTime: "2023-08-23T05:39:53Z"
        message: 'Tasks Completed: 2 (Failed: 0, Cancelled 0), Skipped: 0'
        reason: Succeeded
        status: "True"
        type: Succeeded
      expectWeight: 2
      pipelineName: kubebb
      tasks:
      - conditions:
        - lastTransitionTime: "2023-08-23T05:39:53Z"
          message: All Steps have completed executing
          reason: Succeeded
          status: "True"
          type: Succeeded
        name: kubebb-rback
        taskRunName: rating.kubebb-kubebb-rback
      - conditions:
        - lastTransitionTime: "2023-08-23T05:39:53Z"
          message: All Steps have completed executing
          reason: Succeeded
          status: "True"
          type: Succeeded
        name: kubebb-helm-lint
        taskRunName: rating.kubebb-kubebb-helm-lint
```

如果想要知道每个 task 运行的输出日志，可以先得到 pod 列表，然后查看pod日志即可。

```shell
kubectl get po -nkubebb-system
NAME                                 READY   STATUS      RESTARTS   AGE
kubebb-5dbf45964c-26jpp              1/1     Running     0          3m53s
rating.kubebb-kubebb-helm-lint-pod   0/1     Completed   0          2m9s
rating.kubebb-kubebb-rback-pod       0/1     Completed   0          2m9s
```
