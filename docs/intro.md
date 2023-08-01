---
sidebar_position: 1
---

# 总览

**KubeBB(Kubernetes Building Blocks)**是一种全新的**云原生组件开发、发布和部署模式**。

## 核心套件

通过提供三种核心套件实现这一目标：

- [底座服务套件](./building-base/tech-arch.md)

提供开箱即用的云原生服务门户，包括用户、OIDC认证、权限、审计、租户管理、门户服务等基础组件以及证书管理、Nignx Ingress等集群组件

- [云梯低代码开发套件](./core/overview.md)

依托[Low-Code Engine](https://lowcode-engine.cn/index)和具有Git特性的关系数据库[Dolt](https://www.dolthub.com/)打造，并借助底座门户的**菜单和路由资源**和内核套件的**组件管理**能力,实现组件开发、测试到上线的全链路能力。

- [内核套件](./lowcode-development/components.md)

提供声明式的组件生命周期管理，适配Helm生态，实现低代码平台组件与底座服务的集成
