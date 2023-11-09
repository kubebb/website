---
sidebar_position: 4
---

# 发布 HelloWorld 组件

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

## 体验自定义配置

1. 自定义门户的主色调
```shell
kubectl edit cm portal-global-configs -n u4a-system
```
修改 primaryColor 即可自定义门户主色调
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: portal-global-configs
data:
  global-configs: |
    {"theme": {"primaryColor": "#FE8F35"}}
```

2. 自定义菜单

kubebb 的所有菜单均基于 menu 的 CRD 进行定义，如果需要添加自己的菜单，可以参考以下 memnu 示例:
```yaml
# 主菜单
apiVersion: component.t7d.io/v1beta1
kind: Menu
metadata:
  name: demo-menu
spec:
  column: 1
  isRenderSelectCurrent: false
  parentOwnerReferences:
    apiVersion: ""
    kind: ""
    name: ""
    uid: ""
  rankingInColumn: 100
  tenant: true
  text: 测试菜单
  textEn: "Test Menu"
---
# 测试菜单索引菜单
apiVersion: component.t7d.io/v1beta1
kind: Menu
metadata:
  name: demo-menu-index
spec:
  getTitleForReplaceSider: {}
  parentOwnerReferences:
    apiVersion: component.t7d.io/v1beta1
    blockOwnerDeletion: false
    controller: false
    kind: Menu
    name: demo-menu
    uid: ""
  rankingInColumn: 100
  tenant: true
  text: 菜单索引项
  textEn: “Menu Index Item"
---
# 子菜单，具备实际链接功能
apiVersion: component.t7d.io/v1beta1
kind: Menu
metadata:
  name: demo-menu-submenu1
spec:
  getTitleForReplaceSider: {}
  isRenderSelectCurrent: false
  parentOwnerReferences:
    apiVersion: component.t7d.io/v1beta1
    blockOwnerDeletion: false
    controller: false
    kind: Menu
    name: demo-menu-index
    uid: ""
  pathname: /demo-feature1
  rankingInColumn: 200
  text: 测试子菜单
  textEn: "Test Submenu"
```

使用 `kubectl apply -f` 即可将菜单项部署到环境中，如下图所示：
![图 1](images/4a52ae49bf01baee581357a57038c5792dab1fe153770917e42a5888a7ebebdc.png)  

* 详细介绍参考 [自定义菜单](docs/develop-guid/building-base/configuration/customize-menu.md)

3. 多语言 & 白天/黑夜模式

1）通过右上角的语言切换按钮进行多语言切换，目前支持中文、英文两种语言

2）通过右上角的按钮切换白天/黑夜模式
