---
sidebar_position: 2
---
# 组件

组件是将 `chart package` 映射为集群资源的一个概念，组件定义了 `chart package` 的基础描述信息，版本信息等。组件一般由仓库创建出来，无需手动创建。

## 定义

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

仓库`Watcher`同步仓库服务的组件列表，并`创建/更新`组件。因此:

- `组件`不建议主动创建，应该都通过组件仓库对应的`Watcher`自动同步获得
- 同属一个仓库的组件可通过`kubebb.component.repository=<repository-name>`检索
