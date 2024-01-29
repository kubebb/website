---
sidebar_position: 1
---

# 快速部署

默认情况下，Rating组件评级功能是关闭的，需要手动启用。我们建议按照以下步骤启用Rating:

:::tip
详细了解更多Rating有关内容，请参考[组件评测设计](../rating/rating.md)和[Rating CRD定义](../concepts/rating.md)
:::

**Rating**依赖两个组件，分别是:

- **Tekton**提供流水线能力,完成组件的自动化测试
- **KubeAGI Arcadia**提供AI数据分析能力，完整组件的AI评测

因此, 需要先安装好Tekton和Arcadia, 才能使用Rating功能。

## 1.安装kubebb core

参考[安装内核](../../../quick-start/quick-install.md)完成内核(未启用Rating)安装。

## 2. 创建需要的命名空间 `kubebb-addons`, `tekton`

:::info
tekton 会安装在 `tekton` 的命名空间下。
后续安装的组件都会添加到`kubebb-addons`命名空间中，作为kubebb的扩展
:::

```shell
kubectl create ns kubebb-addons tekton
```

## 3. 安装Tekton流水线

```yaml
# install-tekton.yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: ComponentPlan
metadata:
  name: tekton
  namespace: tekton
spec:
  approved: true
  name: tekton # similar to helm release name
  version: 0.64.0
  component:
    name: kubebb.tekton-operator
    namespace: kubebb-system
```

在 `kubebb core` 内核安装完成后，会自动创建一个系统的 `Repository`, 直接利用这个 `Repository` 来创建 tekton。

> 执行以下命令前需要确保组件kubebb.tekton-operator已经同步完成

命令如下:

```shell
kubectl apply -f install-tekton.yaml
```

查看安装状态:

```shell
kubectl -ntekton get pods --watch
```

如果安装完成,输出如下:

```shell
root@macbookpro:~/workspace/test-arcadia-helm/rating# kubectl get po -ntekton 
NAME                                              READY   STATUS    RESTARTS   AGE
tekton-tekton-operator-7754767b9f-hjzjq           2/2     Running   0          2m35s
tekton-tekton-operator-webhook-66c8448c8b-qmzz7   1/1     Running   0          2m35s
```

安装完成后，检查 tekton 安装的 CRD.

```shell
root@macbookpro:~/workspace/test-arcadia-helm/rating# kubectl get crd|grep tekton
clustertasks.tekton.dev                    2024-01-10T06:41:24Z
customruns.tekton.dev                      2024-01-10T06:41:25Z
pipelineresources.tekton.dev               2024-01-10T06:41:25Z
pipelineruns.tekton.dev                    2024-01-10T06:41:25Z
pipelines.tekton.dev                       2024-01-10T06:41:25Z
resolutionrequests.resolution.tekton.dev   2024-01-10T06:41:25Z
runs.tekton.dev                            2024-01-10T06:41:25Z
taskruns.tekton.dev                        2024-01-10T06:41:25Z
tasks.tekton.dev                           2024-01-10T06:41:25Z
tektonchains.operator.tekton.dev           2024-01-10T06:41:19Z
tektonconfigs.operator.tekton.dev          2024-01-10T06:41:19Z
tektondashboards.operator.tekton.dev       2024-01-10T06:41:19Z
tektonhubs.operator.tekton.dev             2024-01-10T06:41:19Z
tektoninstallersets.operator.tekton.dev    2024-01-10T06:41:19Z
tektonpipelines.operator.tekton.dev        2024-01-10T06:41:19Z
tektonresults.operator.tekton.dev          2024-01-10T06:41:19Z
tektontriggers.operator.tekton.dev         2024-01-10T06:41:19Z
```

如果长时间安装未完成,可查看对应的Componentplan资源的状态。

## 4. 安装Arcadia AI组件

> Arcadia组件位于另外的一个[组件仓库](https://github.com/kubeagi/arcadia/tree/main/charts)

1. 添加[arcadia组件仓库](https://github.com/kubebb/components/blob/main/repos/repository_arcadia.yaml)

```shell
kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/repos/repository_arcadia.yaml
```

成功后，可通过如下命令查看仓库中的组件:

```shell
kubectl get components -nkubebb-system -l kubebb.component.repository=arcadia
```

如果一切正常，输入如下:

```shell
❯ kubectl get components -nkubebb-system -l kubebb.component.repository=arcadia
NAME                 AGE
arcadia.arcadia      32s
arcadia.jupyterlab   32s
arcadia.llms         32s
```

2. 安装Arcadia AI组件

```yaml
# arcadia-sub.yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: Subscription
metadata:
  name: arcadia
  namespace: kubebb-system
spec:
  component:
    name: arcadia.arcadia
    namespace: kubebb-system
  componentPlanInstallMethod: auto
  name: arcadia
```

```shell
kubectl apply -f arcadia-sub.yaml
```

3. 查看安装状态

```shell
kubectl get po -nkubebb-system 

NAME                                   READY   STATUS              RESTARTS   AGE
arcadia-apiserver-559974c74b-r8jrp     0/1     ContainerCreating   0          5m5s
arcadia-chromadb-0                     0/1     Pending             0          5m4s
arcadia-controller-85cbddc8fd-bbh4q    1/1     Running             0          5m5s
arcadia-dataprocess-57b99c84bb-sgr9f   0/1     ContainerCreating   0          5m5s
arcadia-fastchat-6b4b454d69-mqjsl      0/2     ContainerCreating   0          5m5s
arcadia-minio-58d6b4885c-vdgzx         0/1     Pending             0          5m5s
arcadia-portal-64c5b7f986-5dc8x        1/1     Running             0          5m5s
arcadia-postgresql-0                   0/1     Pending             0          5m4s
kubebb-core-679594d66f-r769g           1/1     Running             0          69m
```

## 5. 更新内核

通过设置参数`deployment.rating_enable=true`来启用Rating

```shell
helm upgrade  -nkubebb-system kubebb-core kubebb/kubebb-core  --set deployment.rating_enable=true
```

查看内核Pod状态:

```shell
❯ kubectl get pods -nkubebb-system --watch
NAME                           READY   STATUS    RESTARTS   AGE
kubebb-core-65ddc99994-25k49   0/1     Running   0          7s
kubebb-core-6d78d7d8fd-vxbc6   1/1     Running   0          119s
kubebb-core-65ddc99994-25k49   1/1     Running   0          10s
kubebb-core-6d78d7d8fd-vxbc6   1/1     Terminating   0          2m2s
kubebb-core-6d78d7d8fd-vxbc6   0/1     Terminating   0          2m3s
kubebb-core-6d78d7d8fd-vxbc6   0/1     Terminating   0          2m3s
kubebb-core-6d78d7d8fd-vxbc6   0/1     Terminating   0          2m3s
```

如果升级成功,则可在内核Pod内看到如下日志:

```shell
1.6935407235060694e+09 INFO Starting EventSource {"controller": "rating", "controllerGroup": "core.kubebb.k8s.com.cn", "controllerKind": "Rating", "source": "kind source: *v1alpha1.Rating"}
1.6935407235063274e+09 INFO Starting EventSource {"controller": "rating", "controllerGroup": "core.kubebb.k8s.com.cn", "controllerKind": "Rating", "source": "kind source: *v1beta1.PipelineRun"}
```

## 6 创建系统 LLM

因为要进行 AI 评测，为了保证评测结果的公平，需要全局配置一个 `LLM`, 这个资源的 yaml 格式如下

```yaml
apiVersion: arcadia.kubeagi.k8s.com.cn/v1alpha1
kind: LLM
metadata:
  name: zhipuai # LLM 的名字
  namespace: kubebb-system # LLM的namespace
spec:
  provider:
    endpoint:
      authSecret: # authSecret 是当我们选择了一个模型服务后，例如 openai，zhipuai 等，会给用户一个 token 进行 api调用
        kind: secret
        name: zhipuai
      url: https://open.bigmodel.cn/api/paas/v3/model-api
  type: zhipuai
```

这里需要关注的就是 `spec.privider.endpoint`, 其中 `authSecret` 是配置一个 secret 的名字，这个secret中保存了访问 AI 服务的 `Token`, `Token` 在 secret的存储字段是 `apiKey`

```yaml
apiVersion: v1
data:
  apiKey: YmFzZTY0Cg==
kind: Secret
metadata:
  name: zhipuai
  namespace: kubebb-system
type: Opaque
```

`url` 字段，就是模型服务提供的调用接口的地址。

目前平台支持 `openai` 和 `zhipuai`，所以 `spec.type` 字段就是这两个值可选。
因为系统中可能存在多个 `LLM`, 所以我们需要一个配置指明 AI 要使用的 `LLM`。所以我们需要在创建一个 configmap 名字叫 `system-llm`，名字是固定的。
包含两个字段：

- name 使用的LLM的名字
- namespace 使用的LLM所在的namespace

```yaml
kind: ConfigMap
metadata:
  name: system-llm
  namespace: kubebb-system
data:
  name: "zhipuai"
  namespace: "kubebb-system"
```
