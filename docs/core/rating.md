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
| **rating-security-slsa**           | **安全性** | 验证 SLSA 供应链安全等级              | 1    | 研发中 |
| **rating-reliability-linting**     | **可靠性** | 通过 `helm lint` 验证组件是否符合规范 | 1    | 已支持 |
| **rating-reliability-testing**     | **可靠性** | 通过 `helm testing`                    | 1    | 研发中 |
| **rating-reliability-deployment-testing** | **可靠性** | 验证部署后的组件，功能和性能是否符合预期 | 1    | 研发中 |
| **rating-availability-sample**     | **可用性** | 验证组件包是否包含 ComponentPlan 示例  | 1    | 研发中 |

### 安全性任务

- [rating-security-rback](https://github.com/kubebb/core/blob/main/pipeline/rating/tasks/task-rbac.yaml)

`rating-security-rback` 根据 chart 包里的内容得到完整的安装文件，并根据这些文件生成权限关系图，用户可以根据这个关系图判断权限是否过大而选择是否安装。

分以下4个步骤完成：

1. 下载chart包

通过 `helm pull` 下载指定的chart包

2. 生成 .dot 文件

通过 `helm template` 将 chart 包要安装的内容完全列举出来，并通过 `yq` 和 `jq` 命令转换成如下格式:

```json
{
    "kind":"List",
    "apiVersion": "v1",
    "items": [
        {
            "kind": "ServiceAccount",
            "apiVersion": "v1",
            "metadata": {
                "name": "sa",
            }
        }
    ]
}
```

通过 [rback](https://github.com/team-soteria/rback) 命令将以上的 json 内容转换成 `.dot` 文件。

3. 存储到 ConfigMap

将上述得到 `.dot` 文件存储到 ConfigMap 中。

4. 将 ConfigMap 名字写到输出

`Pipeline` 支持输出一些运行结果，将CongiMap的名字写到输出内容中，方便后续用户使用。

### 可靠性任务

- [rating-reliability-linting](https://github.com/kubebb/core/blob/main/pipeline/rating/tasks/task-helm-lint.yaml)

`rating-reliability-linting` 用来检查 chart 包里书写格式是否正确，以保证平台可以完整的给用户展示相关信息。

分以下2个步骤完成：

1. 下载 chart 包

通过 `helm pull` 下载 chart 包。

2. 检查 lint

通过 `helm lint` 检查包的书写格式，输出内容会跟随日志输出。

### 可用性任务

(待补充)
