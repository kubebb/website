---
sidebar_position: 5
---

# 组件开发

Kubebb的组件安装包采用`Helm`模式，遵循Helm charts开发规则。除此之外，我们额外定义添加了一些特殊字段来满足一些组件的特殊性。


## 组件类型

从功能角度，我们将组件划分为两类:

- 系统组件,如U4A、TMF等,组件的运行需要系统管理权限

- 普通功能组件，如minio、weaviate等，组件可运行在任何`租户-项目`中，没有特殊限制


## 通用配置

参考[Helm官方文档](https://helm.sh/docs/)

## 组件高级配置

为支持不同组件对安装位置、权限的可控，特此额外约定了多个配置字段

### Chart.yaml

`Chart.yaml`中包含组件的核心定义、版本、维护者等信息，属于`Helm`预定义的内容。为了支持额外的特殊需求，我们决定通过`annotations`来自由定义。如下所示:

```yaml
annotations:
  core.kubebb.k8s.com.cn/displayname: "内核"
  core.kubebb.k8s.com.cn/restricted-tenants: "system-tenant"
  core.kubebb.k8s.com.cn/restricted-namespaces: "msa-system"
```

- `core.kubebb.k8s.com.cn/displayname`: 用于填充组件的展示名，支持中英文
- `core.kubebb.k8s.com.cn/restrict-tenants`: 用于设置组件安装位置的限制租户，多个租户需要通过`,`隔开
- `ore.kubebb.k8s.com.cn/restricted-namespaces`: 用于设置组件安装位置的限制项目/命名空间，多个命名空间通过`,`隔开
