---
sidebar_position: 5
---

# 扩展资源(底座)

底座扩展资源用于适配底座的门户服务,不涉及核心的**组件生命周期管理**。目前主要有两种:

- `Menu`: 门户菜单
- `Portal`: 门户路由

## Menu

菜单是[底座门户](../../building-base/configuration/customize-menu)资源，用于与微前端页面结合，实现可定制化的门户菜单。

### 定义

代码定义位于 [Menus](https://github.com/kubebb/core/blob/main/api/v1alpha1/menu_types.go),详细介绍如下:

:::tip
说明  对于下面的 yaml，我们想要访问 bar 字段，书写格式为 `spec.foo.bar`

```yaml
spec:
  foo:
    bar: xx
```

:::

- `spec.id`: 菜单组ID
- `spec.text`: 菜单中文名称
- `spec.textEn`: 菜单英文名称
- `spec.column`: 菜单组所在列序号
- `spec.rankingInColumn`: 菜单在当前组中的排序，数字越小越靠前
- `spec.icon`: 菜单图标
- `spec.replaceSiderBackNextPathnamePattern`: 给替换菜单的返回按钮使用，当新的 pathname 是替换菜单，且替换菜单的返回按钮需要返回到当前 pathname 时，配置此属性
- `spec.pathname`: 菜单路由
- `spec.redirect`: 跳转菜单路由，优先级高于 pathname，指定后点击菜单会跳转到 redirect 相应路由
- `spec.target`: 同 a 标签的 target 属性
- `spec.requiredRoles`: 菜单可见需要的角色
- `spec.requiredModuleBits`: 菜单可对应的 module 二进制位 (有一个满足即可见)
- `spec.tenant`: 菜单对应路由是否可以切换租户
- `spec.project`: 菜单对应路由是否可以切换项目
- `spec.cluster`: 菜单对应路由是否可以切换集群
- `spec.isRenderSelectCurrent`: 是否渲染选择项目、集群
- `spec.useChildrenReplaceSider`: 是否在进入子页面后将 sider 替换
- `spec.getTitleForReplaceSider`: 获取 title 的函数
- `spec.parent`: 父菜单 ID
- `spec.parentOwnerReferences`: 父菜单依赖
- `spec.disabled`: menu 显示控制

## 门户路由

门户路由是[底座门户](../../building-base/configuration/customize-menu)资源,用于配置访问路径。

### 定义

代码定义位于 [Menus](https://github.com/kubebb/core/blob/main/api/v1alpha1/portal_types.go),详细介绍如下:

:::tip
说明  对于下面的 yaml，我们想要访问 bar 字段，书写格式为 `spec.foo.bar`

```yaml
spec:
  foo:
    bar: xx
```

:::

- `spec.path`: 请求的访问路径
- `spec.entry`: 静态资源的访问路径
