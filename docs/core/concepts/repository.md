---
sidebar_position: 1
---
# 组件仓库

仓库是将 `chart repository` 映射为集群资源的一个概念。仓库定义了 `chart repository` 的 URL，认证信息等相关信息。仓库是组件部署，升级的基础。

组件仓库的工作流程如下:

![repository_flow](https://raw.githubusercontent.com/kubebb/core/main/assets/repository_flow.drawio.png)

## 定义

CRD 的代码定义位于 [RepositoryTypes](https://github.com/kubebb/core/blob/main/api/v1alpha1/repository_types.go)。接下来会详细介绍每个字段的含义及其作用。

:::tip
说明  对于下面的 yaml，我们想要访问 bar 字段，书写格式为 `spec.foo.bar`

```yaml
spec:
  foo:
    bar: xx
```

:::

- `spec.url`

  该字段用来保存 `chart repository` 的地址
- `spec.authSecret`

  对于需要认证，或者有自定义证书的 `chart repository`，需要将认证信息，证书信息存放到以该字段为名字的 `secret` 中。secret 中的主要字段信息如下

  - `username` 定义认证需要的用户名
  - `password` 定义认证需要的密码
  - `cadata` 定义签发证书的 RootCA
  - `certdata` 定义客户端通过 RootCA 签发的证书
  - `keydata` 定义客户端私钥

  如果服务端要求 TLS 双向认证，那么需要提供 `certdata` 和 `keydata`。
- `spec.insecure`

  是否跳过 https 验证
- `spec.repositoryType`

  仓库类型，是字符串，理解为标记即可。
- `spec.PullStrategy.intervalSeconds`

  定义获取数据的周期，可以不填写，默认是 120 秒。
- `spec.PullStrategy.timeoutSeconds`

  定义一次 http 请求的超时时间。
- `spec.PullStrategy.retry`

  定义请求失败的重试次数。默认不填写，只会做一次请求
- `spec.filter`

  该字段是数组，定义了一系列的对 `chart package` 和 版本的过滤条件。因为是数组，所以可以出现对同一个 `chart package` 的多个过滤条件，只会使用最后一条。

  数组的每一项的介绍

  - `spec.filter[index].name` 定义了要参与过滤的 `chart package` 的名称。
  - `spec.filter[index].operation` 有两个可选值 `keep`, `ignore`。`ignore` 定义 `chart package` 要忽略的版本, `keep` 定义 `chart package` 要保留的版本。
  - `spec.filter[index].keepDeprecated` `false` 表示不保留 `chart package` 已经废弃的版本，`true` 表示保留。
  - `spec.filter[index].versionedFilterCond.versions` 是一个版本的数组，只要 `chart package` 的版本与该数组中任意一个精确匹配上，即符合规则。
  - `spec.fitler[index].versionedFilterCond.versionRegexp` 版本过滤的正则表达式。
  - `spec.filter[index].versionedFilterCond.versionConstraint` 版本验证条件，表达式格式请参考 [semver](https://github.com/Masterminds/semver#semver)

  当 `operation=keep` 的时候，  `versions, versionRegexp, VersionConstraint` 满足任一条件就会保留版本。  
  当 `operation=ignore` 的时候，  `versions, versionRegexp, VersionConstraint` 满足任一条件就会忽略版本。

  `keepDeprecated` 在对最终留下来的版本进行过滤，是否保留废弃版本。

- `spec.imageOverride`  非必需
  该字段是数组，定义了一系列仓库级别的镜像覆盖策略。

  每一项内容包括：

  - `spec.imageOverride[].registry` 该镜像仓库域名地址，可以包含端口，例如：`docker.io`，`192.168.1.1:5000`
  - `spec.imageOverride[].newRegistry` 要将 `registry` 替换后的镜像仓库域名地址，可以包含端口。
  - `spec.imageOverride[].pathOverride` 非必需
    - `spec.imageOverride[].pathOverride.path` 旧的镜像仓库路径，比如镜像地址 `docker.io/library/nginx:latest` 中的 path 为 `library`
    - `spec.imageOverride[].pathOverride.newPath` 要将 `path` 替换后的镜像仓库新路径。

- `spec.keywordLenLimit` 非必要
   每个 chart 包都可以定义一个关键词列表，供 helm 搜索使用。该字段是用来限制这个关键词列表的长度，避免关键词过多导致在产品界面不好展示。如果不配置，不会做任何限制。

## 使用

下面是一个仓库示例：

```yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: Repository
metadata:
  name: repository-bitnami-special-version
  namespace: kubebb-system
spec:
  url: https://charts.bitnami.com/bitnami
  pullStategy:
    intervalSeconds: 120
    retry: 5
  filter:
  - name: wordpress
    operation: keep
    versionedFilterCond:
      versions:
      - 16.1.14
      - 16.1.13
  imageOverride:
  - registry: docker.io
    newRegistry: 192.168.1.1
    pathOverride:
      path: library
      newPath: system-container
```

上述仓库定义了数据来源是 `https://charts.bitnami.com/bitnami` ，数据获取策略是，每隔 120s 获取一次，如果发生错误最多尝试 5 次。
对 `wordpress` 的版本定义了多虑条件，精确匹配 `16.1.14`, `16.1.13` 两个版本。
对仓库中所有来自 `docker.io` 的镜像，替换为 `192.168.1.1` ，并将镜像路径为 `library` 的镜像替换为 `system-container` ，比如仓库中有镜像 `docker.io/library/nginx:v1.2.3` 会替换为 `192.168.1.1/system-container/nginx:v1.2.3` 。

## 工作原理

仓库以 Kubernetes Operator 方式实现。周期性的获取 `chart repository` 的数据，对集群中组件更新或者创建，**一般不会删除组件，而是将在 `chart repository` 中不存在的组件标记为废弃**。

1. 当 `Repository` 创建，更新时

创建或者更新 `Repository` 时，会检查该资源是否添加 finalizers, 以及 URL 变更历史是否正确更新。

当所有的更新都处理完成后，将会启动 `chartmuseum watcher`，在每次获取到若干的 `chart package` 后，与集群中已经存在的 `Component` 对比，将会执行 `新增 component`, `更新 component`。

我们不会删除已经创建的 `Component`, 而是在发现集群中存在 `Component` 且并不存在于当前的 `chart repository` 中，那么会将其标记为废弃。

2. 当 `Repoistory` 删除时

由 `Repository` 创建出来的 `Component` 都会添加 `OwnerReferences`，删除 `Repository` 的时候会自动删除关联的 `Component`。

3. 镜像覆盖策略

![image-changed](../images/image-changed.png)
