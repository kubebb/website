---
sidebar_position: 1
---

# 介绍

[内核](https://github.com/kubebb/core)基于[kubernetes operator](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)模式进行开发，提供完整的组件生命周期管理、组件订阅和自动化部署能力，并通过[tekton](https://tekton.dev/)扩展实现组件自动化评级和安装前校验等能力。

## 背景

## 整体架构

![KubeBB Core架构图](https://raw.githubusercontent.com/kubebb/core/main/assets/arch.png)

## 核心优势

### 声明式组件生命周期管理

**声明式**的组件生命周期管理有以下优势:

- **可读性：** 更易于理解和阅读组件定义本身，因为它们表达了想要的结果，而不是实现的步骤。
- **可维护性：**更易于维护组件，因为它们更容易理解，更容易修改，而且更少有错误。
- **可重用性：**更容易重用组件，因为它们通常是独立于上下文的，可以在不同的环境中使用。
- **可扩展性：**更易于扩展组件，因为它们通常是基于组件和模块的，可以简单地组合起来创建更复杂的系统。
- **可靠性：**更可靠，因为它们通常是基于静态配置的，而不是基于运行时状态的。这意味着它们更少出现运行时错误和意外行为。

为实现**声明式生命周期管理**，定义了四种CRD：

- [Repository](./concepts/repository.md): 定义了组件仓库的访问信息、轮询策略和过滤选项，从而实现周期性地向仓库服务获取最新的组件列表信息。
- [Component](./concepts/component.md): 记录了组件的基础描述、版本列表等信息
- [ComponentPlan](./concepts/componentplan.md): 定义了组件安装部署的手动批准、组件引用、版本设置、类helm的配置覆盖策略，从而实现组件的可追踪部署、升级和回滚。
- [Subscription](./concepts/subscription.md): 定义了用户订阅组件版本更新

### 多维度组件评级

通过集成[Tekton](https://github.com/kubebb/components/tree/main/examples/tekton-operator)流水线组件，实现自动化的组件评级，并通过`CRD Rating`完成评测数据总结和分析。

目前组件评级围绕三个维度展开:

- [**安全性:**](./rating#安全性任务) 评估组件的安全性和软件供应链的安全性。
- [**可靠性:**](./rating#可靠性任务) 评估组件本身是否已经过良好的功能测试、性能测试
- [**可用性:**](./rating#可用性任务) 评估组件是否有充足的文档、示例来指导用户使用

### 全面适配Helm生态

[Helm](https://helm.sh/)是一种成熟的包管理工具，提供一种简单的方式来管理Kubernetes应用程序的部署和升级。它拥有庞大的社区和众多优秀的项目。
因此，内核从设计之初就确定了必须全面兼容**Helm生态**。

这一特点体现在**内核设计**的各个方面，我们支持:

- [Charts](https://helm.sh/docs/chart_template_guide/getting_started/)作为组件
- [组件仓库](./concepts/repository.md)完全适配**Helm类型**仓库
- [组件部署](./concepts/componentplan.md)基本全面覆盖[Helm CLI](https://helm.sh/docs/helm/helm/)能力

### 扩展适配底座服务

底座服务支持通过**自定义菜单**和**路由**扩展平台服务，为支撑适配这一能力，我们做了以下努力：

- 移植**Menu**资源类型
- 移植**Route**配置

从而通过**内核**串联**云梯低代码开发平台**与**底座服务**。

:::tip

1. 低代码开发平台定义**Menus**、**Route**等底座相关资源，并打包到组件模版中
2. 内核获取**底座自定义资源**后,自动解析、配置、创建对应资源

:::

## 路线图

### v0.1.0

- 支持管理组件仓库 **Repository**
  - 支持与 Helm 仓库兼容的 **Repository Server**
  - **Watcher** 监视 **Repository**
- 实现 **Component** 管理
  - **Watcher** 实现 **Components** 的 CRUD 操作
- 支持 **ComponentPlan** 和 **Subscription**
  - 允许用户订阅 **Component** 的最新版本更改
  - 使用与 Helm Chart 兼容的 **ComponentPlan** 计划组件部署

### v0.2.0

- 支持内核各控制器的**Events**记录
- 适配 Kubebb 底座服务
- 基于[Tekton Pipeline](https://tekton.dev/) 从 **安全性**、**可靠性** 和 **可用性** 三个维度对 **Component** 进行评级**Rating**
- 基于[Tekton Pipeline](https://tekton.dev/)实现**ComponentPlan**组件部署前的预先校验**Check**
- 组件仓库**Repository** 中启用 **auth** 和 **OCI**
- 实现与低代码平台集成
