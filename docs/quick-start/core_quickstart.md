---
sidebar_position: 2
---

# 安装内核

:::tip
安装前需完成[预先准备](./prerequisite)。
:::

## 安装

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

## 快速体验

内核安装完成后可通过[官方组件仓库](https://github.com/kubebb/components)快速体验组件化的部署:

:::tip
**kubebb**为[官方组件仓库](https://github.com/kubebb/components),内核安装过程中默认添加,提供多个认证仓库、组件和组件应用.
:::

1. 通过以下命令查看仓库列表:

```shell
kubectl get repository -nkubebb-system
```

默认情况下，至少包含仓库**kubebb**

```shell
(base) ➜  charts git:(dev) kubectl get repository -nkubebb-system
NAME     AGE
kubebb   14m
```

如果没有看到**kubebb**,可手动添加:

```shell
kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/repos/repository_kubebb.yaml
```

2. 获取官方仓库中的组件

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

3. 部署一个组件

> 以部署`kubebb.minio`为例

```shell
kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/examples/minio/componentplan.yaml
```

查看组件部署状态:

```shell
kubectl get componentplan my-minio -oyaml
```

查看组件Pod状态

```shell
kubectl get pods -l core.kubebb.k8s.com.cn/componentplan=my-minio
```

如果一切正常，输出如下:

```shell
NAME             READY   STATUS    RESTARTS   AGE
my-minio-0   1/1     Running   0          42h
my-minio-1   1/1     Running   0          42h
my-minio-2   1/1     Running   0          42h
```

## 部署一个私有仓库

1. 在官方仓库中部署chartmuseum

```shell
kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/examples/chartmuseum/componentplan.yaml
```

2. 添加仓库

```yaml
# repository_chartmuseum.yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: Repository
metadata:
  name: chartmuseum
  namespace: kubebb-system
spec:
  url: http://chartmuseum.kubebb-system.svc.cluster.local:8080
  pullStategy:
    intervalSeconds: 120
    retry: 5
```

创建仓库

```shell
kubectl apply -f repository_chartmuseum.yaml 
```

执行结果

```shell
kubectl get repository -nkubebb-system
NAME          AGE
chartmuseum   4m41s
kubebb        15h
```

端口暴露

```shell
kubectl port-forward service/chartmuseum 8080:8080 -nkubebb-system
```

上传自定义chart

```shell
helm create mychart
cd mychart
helm package .
curl --data-binary "@mychart-0.1.0.tgz" http://localhost:8080/api/charts
```

从私有仓库中查看

```
kubectl get component -l kubebb.component.repository=chartmuseum -nkubebb-system
NAME                  AGE
chartmuseum.mychart   4m27s
```