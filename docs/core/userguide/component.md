---
sidebar_position: 2
---

# 组件

组件是将 `chart package` 映射为集群资源的一个概念，组件定义了 `chart package` 的基础描述信息，版本信息等。组件一般由仓库创建出来，无需手动创建。

<!-- 介绍基本内容 -->

## 使用

下面是手动创建一个组件示例：

1. 准备组件 component.yaml
```yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: Component
metadata:
  labels:
    kubebb.component.repository: repository-bitnami-sample
  name: repository-bitnami-sample.wordpress
  namespace: kubebb-system
  ownerReferences:
    - apiVersion: core.kubebb.k8s.com.cn/v1alpha1
      kind: Repository
      name: repository-bitnami-sample
      uid: a5b8b73d-47a5-40e1-9839-7aebf8a25618
spec: {}
```

```shell
kubectl apply -f component.yaml
```

2. 准备更新组件 status.yaml

```yaml
status:
  description: WordPress is the world's most popular blogging and content management
    platform. Powerful yet simple, everyone from students to global corporations use
    it to build beautiful, functional websites.
  home: https://bitnami.com
  icon: https://bitnami.com/assets/stacks/wordpress/img/wordpress-stack-220x234.png
  keywords:
    - application
    - blog:
    - cms
    - http
    - php
    - web
    - wordpress
  maintainers:
    - name: VMware, Inc.
      url: https://github.com/bitnami/charts
    - name: Bitnami
      url: https://github.com/bitnami/charts
  name: wordpress
  repository:
    apiVersion: core.kubebb.k8s.com.cn/v1alpha1
    kind: Repository
    name: repository-bitnami-sample
    namespace: kubebb-system
    uid: a5b8b73d-47a5-40e1-9839-7aebf8a25618
  sources:
    - https://github.com/bitnami/charts/tree/main/bitnami/wordpress
  versions:
    - appVersion: 6.2.2
      createdAt: "2023-06-06T19:08:58Z"
      deprecated: false
      digest: 47096ed3f0a385e5830e90c75f443b7be107d7fa6df6aa869e7deb60b6cb6f8f
      updatedAt: "2023-06-08T05:34:00Z"
      version: 16.1.13
    - appVersion: 6.2.2
      createdAt: "2023-06-05T12:52:45Z"
      deprecated: false
      digest: 2005819fa8a08dea1f73585bcc4a37d83d3ef4f787c3927b5f51d2b5ae826dcb
      updatedAt: "2023-06-08T05:34:00Z"
```

```shell
kubectl -nkubebb-system patch component.core.kubebb.k8s.com.cn repository-bitnami-sample.wordpress --type=merge --subresource status --patch-file status.yaml
```

## CRD 定义说明

CRD 的代码定义位于 [ComponentTypes](https://github.com/kubebb/core/blob/main/api/v1alpha1/component_types.go)。组件的信息都定在 `status` 中， 接下来会详细介绍每个字段的含义及其作用。 

- `status.name`

    该字段用来保存 `chart package` 的名字。

- `status.versions`

    该字段是数组，用来保存 `chart package` 的多个版本。每个版本包含的信息如下

    - `status.versions[index].appVersion` 定义 `chart packge` 里面的应用的版本信息。
    - `status.versions[index].createdAt` 创建时间
    - `status.versions[index].updatedAt` 更新时间
    - `status.versions[index].deprecated` 当前版本是否废弃
    - `status.versions[index].version` `chart package` 的版本信息
    - `status.versions[index].digest` 数字签名

- `status.description` 

    `chart package` 的描述信息

- `status.maintainers`

    该字段是数组类型，每一项都是 `chart package` 的维护者。每一项的包含的信息如下

    - `status.maintainers[index].name` 维护者名字
    - `status.maintainers[index].email` 维护者的邮箱
    - `status.maintainers[index].url` 维护者的网站


- `status.home`

    组件的官网。

- `status.soureces`

    该字段是字符串数组类型，定义组件代码仓库。

- `status.keywords`

    该字段是字符串数组类型，定义与该组件关联的关键词。

- `status.icon`

    定义该组件的图标

- `status.deprecated`

    定义当前组件是否废弃

## 工作原理

组件也实现为 Kubernetes Operator，主要功能就是当组件创建，更新给每个组件添加label `kubebb.component.repository=<repository-name>`，方便搜索。
