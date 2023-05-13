---
sidebar_position: 1
---
# 技术架构

## 相关技术组件
- Kubernetes 集群
- `u4a-component` 提供账号、认证、权限及审计管理功能，包含以下主要资料
    - [nginx ingress](https://docs.nginx.com/nginx-ingress-controller/)
    - [cert-manager](https://cert-manager.io/)
    - [基于 dex 构建](https://github.com/dexidp/dex)
    - [多租户基于 capsule 构建](https://github.com/clastix/capsule)
    - [oidc-proxy 基于 kube-oidc-proxy 构建](https://github.com/jetstack/kube-oidc-proxy)

## 技术架构
平台开发采取前后端分离，以 K8S 为核心的开发框架，遵循 K8S 的扩展机制及 API 规范，整体开发架构的基本逻辑如下图所示：
![图 2](images/6b8d0cb645caee89c8df55940f5c5b3379940f8714667f8fb2dc780f3442b8f0.png)  

1. 所有组件的开发、扩展的认证都通过统一认证中心进行认证
2. 认证由微前端的主框架 DockApp 统一进行，其他微前端的扩展不需要单独支持同认证中心的处理
3. 开发架构上整体可以按照三层来看
- 第一层，前端采用微前端架构，尽量采用低代码方式进行开发，提高代码自动化生成比例
- 第二层，根据业务需求增加 OpenAPI，形成统一的 BFF 层，对 API 进行聚合，提供前端所需要的业务场景数据
- 后端采用 CRD + controller 的 Operator 模式进行开发，形成数据驱动的流程开发模式
4. 对外 API 主要包括两部分：
- 从 BFF 层提供的 OpenAPI
- 从 K8S 层提供的资源 API

# 使用域名访问
在代理服务器/负载均衡上，使用 nip.io 来支持 http/https 域名的绑定方式，便于默认统一采用域名进行配置。
* 使用 nip.io 进行访问 ```http://<ip-address>.nip.io，比如 http://192.168.1.123.nip.io```
