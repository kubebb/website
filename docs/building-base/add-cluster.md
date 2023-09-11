---
sidebar_position: 2
---
# 添加集群

1. 为集群管理创建一个 namespace，可以使用 cluster-system，用来保存集群信息
```
kubectl create ns cluster-system
```

2. 获取添加集群的 token
```
export TOKENNAME=$(kubectl get serviceaccount/host-cluster-reader -n u4a-system -o jsonpath='{.secrets[0].name}')
kubectl get secret $TOKENNAME -n u4a-system -o jsonpath='{.data.token}' | base64 -d
```

3. 登录管理平台，进入 “集群管理”，参考 [安装底座](../quick-start/buildingbase_quickstart.md)，点击“添加集群”。

4. 输入集群名称，按需修改集群后缀，这里使用“API Token”方式接入集群。

* API Host，使用支持 OIDC 协议的 K8s API 地址，可以通过 **kubectl get ingress -nu4a-system** 查看kube-oidc-proxy-server-ingress 对应的 Host 信息，比如 https://k8s.172.22.96.136.nip.io（注意结尾不要有 /）
* API Token，输入第 2 步获取的 token 信息

5. 添加成功后，可以在列表上看到集群信息及其状态；选择“租户管理”，会看到名称为 "system-tenant" 的一个系统租户


