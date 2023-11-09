---
sidebar_position: 1
---

# 快速部署

默认情况下，Rating组件评级功能是关闭的，需要手动启用。我们建议按照以下步骤启用Rating:

:::tip
详细了解更多Rating有关内容，请参考[组件评测设计](../rating)和[Rating CRD定义](../concepts/rating)
:::

**Rating**依赖两个组件，分别是:

- **Tekton**提供流水线能力,完成组件的自动化测试
- **KubeAGI Arcadia**提供AI数据分析能力，完整组件的AI评测

因此, 需要先安装好Tekton和Arcadia, 才能使用Rating功能。

## 1.安装kubebb core

参考[安装内核](../../quick-start/core_quickstart)完成内核(未启用Rating)安装。

## 2. 创建命名空间 `kubebb-addons`

:::info
后续安装的组件都会添加到`kubebb-addons`命名空间中，作为kubebb的扩展
:::

```shell
kubectl create namespace kubebb-addons
```

## 3. 安装Tekton流水线

官方组件仓库提供了[Tekton组件安装包](https://github.com/kubebb/components/tree/main/charts/tekton-operator)和[Tekton安装示例](https://github.com/kubebb/components/tree/main/examples/tekton-operator)。可以使用内核快速完成tekton的安装。

> 执行以下命令前需要确保组件kubebb.tekton-operator已经同步完成

命令如下:

```shell
# 默认安装到default命名空间
kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/examples/tekton-operator/componentplan.yaml
```

查看安装状态:

```shell
kubectl get pods --watch
```

如果安装完成,输出如下:

```shell
❯ kubectl get pods
NAME                                                 READY   STATUS    RESTARTS   AGE
my-tekton-tekton-operator-68bdffc888-8dtfx           2/2     Running   0          25m
my-tekton-tekton-operator-webhook-78bdfcbc77-6k6cx   1/1     Running   0          25m
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

> 此处建议采用组件订阅自动安装的模式，默认安装到default命名空间

```shell
kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/examples/arcadia/subscription.yaml
```

3. 查看安装状态

```shell
❯ kubectl get pods --watch
NAME                                                 READY   STATUS    RESTARTS   AGE
my-tekton-tekton-operator-68bdffc888-8dtfx           2/2     Running   0          48m
my-tekton-tekton-operator-webhook-78bdfcbc77-6k6cx   1/1     Running   0          48m
arcadia-5cb86f8787-jvd7j                             0/1     Pending   0          0s
arcadia-5cb86f8787-jvd7j                             0/1     Pending   0          0s
arcadia-5cb86f8787-jvd7j                             0/1     ContainerCreating   0          0s
arcadia-5cb86f8787-jvd7j                             0/1     Running             0          20s
arcadia-5cb86f8787-jvd7j                             1/1     Running             0          30s
```

### 5. 更新内核

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
