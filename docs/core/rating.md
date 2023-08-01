---
sidebar_position: 3
---

# 组件评级

待补充

## 核心流程(待补充)

1. 获取组件

2. 触发流水线

3. 创建`CR Rating`

4. 获取流水线结果并计算评分

## 任务列表

:::tip
所有任务权重目前都为`1`,后续需要根据实际的任务重要性赋予不同的权重，并以此获得最终的评分
:::

| 评测任务                           | 类型   | 描述                                   | 权重 | 状态    |
| ---------------------------------- | ------ | -------------------------------------- | ---- | ------- |
| **rating-security-rback**          | **安全性** | 通过 dryrun 的方式获取完整的组件 RBAC | 1    | 已支持 |
| **rating-security-slsa**           | **安全性** | 验证 SLSA 供应链安全等级              | 1    | 已支持 |
| **rating-reliability-linting**     | **可靠性** | 通过 `helm lint` 验证组件是否符合规范 | 1    | 已支持 |
| **rating-reliability-testing**     | **可靠性** | 通过 `helm testing`                    | 1    | 研发中 |
| **rating-reliability-deployment-testing** | **可靠性** | 验证部署后的组件，功能和性能是否符合预期 | 1    | 研发中 |
| **rating-availability-sample**     | **可用性** | 验证组件包是否包含 ComponentPlan 示例  | 1    | 研发中 |

### 安全性任务

(待补充)

### 可靠性任务

(待补充)

### 可用性任务

(待补充)
