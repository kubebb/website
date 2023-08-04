---
sidebar_position: 5
---

# 路线图

## v0.1.0

- 支持管理组件仓库 **Repository**
  - 支持与 Helm 仓库兼容的 **Repository Server**
  - **Watcher** 监视 **Repository**
- 实现 **Component** 管理
  - **Watcher** 实现 **Components** 的 CRUD 操作
- 支持 **ComponentPlan** 和 **Subscription**
  - 允许用户订阅 **Component** 的最新版本更改
  - 使用与 Helm Chart 兼容的 **ComponentPlan** 计划组件部署

## v0.2.0

- 支持内核各控制器的**Events**记录
- 适配 Kubebb 底座服务
- 基于[Tekton Pipeline](https://tekton.dev/) 从 **安全性**、**可靠性** 和 **可用性** 三个维度对 **Component** 进行评级**Rating**
- 基于[Tekton Pipeline](https://tekton.dev/)实现**ComponentPlan**组件部署前的预先校验**Check**
- 组件仓库**Repository** 中启用 **auth** 和 **OCI**
- 实现与低代码平台集成
