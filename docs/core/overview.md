---
sidebar_position: 1
---

# 总览

[KubeBB Core(内核)](https://github.com/kubebb/core)基于[kubernetes operator](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)模式进行开发，提供完整的组件生命周期管理、组件订阅和自动化部署能力。

## 架构

KubeBB Core架构图如下：

![KubeBB Core架构图](./images/core-architecture.png)

KubeBB Core通过operator开发模式实现了以下几个核心功能模块：

- 组件仓库服务，用于存储不同版本组件的镜像和配置文件，适配通用的Helm Repo、ChartMuseum、Harbor等仓库服务，并支持丰富的组件条件过滤
- 仓库轮询服务，用于轮询组件仓库，获取最新的组件版本信息，并实时同步更新组件
- 组件订阅服务，用于订阅组件更新，支持手动、自动两种订阅模式
- 组件部署服务，通过组件部署模版的实时解析和自定义参数的注入，实现组件的自动化部署

## 路线图

详见[路线图](https://github.com/kubebb/design#%E8%B7%AF%E7%BA%BF%E5%9B%BE)
