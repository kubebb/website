---
sidebar_position: 3
---
# 从 Helm 命令迁移

内核被设计为尽量兼容 Helm 命令，对于一个熟悉 Helm 命令的开发者或者用户，使用内核将变得很容易。

## helm repo add 添加仓库

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
```

添加仓库对应创建 `Repository` 资源

```yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: Repository
metadata:
  name: bitnami
spec:
  url: https://charts.bitnami.com/bitnami
```

## helm install 安装 chart

```bash
cat << EOF > values.yaml
replicaCount: 2
EOF

helm install nginx bitnami/nginx --version 15.0.2 -f values.yaml --set image.registry=ddd.ccc
```

安装 Chart 对应创建 `ComponentPlan` 资源。

```yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: ComponentPlan
metadata:
  name: nginx
spec:
  approved: true
  component:
    name: bitnami.nginx
    namespace: default
  name: nginx
  override:
    valuesFrom:
      - kind: ConfigMap
        name: nginx
        valuesKey: values.yaml
    set:
      - image.registry=ddd.ccc
  version: 15.0.2
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx
data:
  values.yaml: |
    replicaCount: 2
```

## helm upgrade 更新版本

```bash
helm upgrade nginx bitnami/nginx --set image.registry=docker.io
```

升级版本，这里有 2 个方法：

1. 用新的配置创建一个 `ComponentPlan`，只要保证 `metadata.namespace`（对应 `helm release` 的 `namespace`）和 `spec.name`（对应 `helm release` 的 `name`）一致，就会升级对应的 `helm release`。
2. 在原来的 `ComponentPlan` 基础上修改。相比较前者，这种方式不会保留历史，更灵活。前一种方式可以进行回滚。

## helm uninstall 删除 release

```bash
helm uninstall nginx
```

删除 release，对应删除 `ComponentPlan`。因为 `ComponentPlan` 和 `helm release` 的关系是可以多对一，要注意，需要删除 `status.latest` 为 `True`（表明当前 `ComponentPlan` 对应 `helm release` 的最新版本）或者 `status.installedRevision` 和当前 `helm release` 版本一致的 `Componentplan`

## helm rollback 回滚 release

```bash
helm rollback nginx 1
```

回滚，只需要在想要回滚到的 `ComponentPlan` 上增加一个 label:`core.kubebb.k8s.com.cn/rollback: ture` 即可。
