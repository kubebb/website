---
sidebar_position: 1
---

# 预先准备

## 基础环境

- [Helm](https://helm.sh/docs/intro/install/) +3.0 客户端
- [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) 客户端

## Kubernetes集群

:::tip
如果没有kubernets集群，可按照下述教程通过[kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)部署一个开发集群。默认情况下，为适配`building base`,集群至少有一个节点需要为`Ingress Controller`服务节点，并暴露`80`和`443`端口。
:::

### Kind开发集群

1. 安装kind

> 参考: https://kind.sigs.k8s.io/docs/user/quick-start/#installation

Linux环境为例:

```shell
# For AMD64 / x86_64
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-amd64
# For ARM64
[ $(uname -m) = aarch64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-arm64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
```

2. 准备单节点集群[配置文件](https://github.com/kubebb/core/blob/main/tests/kind-config.yaml)`kind-config.yaml`

:::tip

- 此处采用v1.24.13版本，其他版本请自行替换. [版本列表](https://hub.docker.com/r/kindest/node/tags?page=1&ordering=last_updated)。
- 如需创建多节点集群，可参考[3节点配置文件](https://github.com/kubebb/core/blob/main/tests/kind-config-3nodes.yaml)

:::

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: kubebb-core
nodes:
  - role: control-plane
    image: kindest/node:v1.24.13
    kubeadmConfigPatches:
      - |
        kind: InitConfiguration
        nodeRegistration:
          kubeletExtraArgs:
            node-labels: "ingress-ready=true"
    extraPortMappings:
      - containerPort: 80
        hostPort: 80
        protocol: TCP
      - containerPort: 443
        hostPort: 443
        protocol: TCP
```

3. 创建集群

```shell
kind create cluster --config=kind-config.yaml
```

4. 查看集群状态

```shell
kubectl cluster-info --context kind-kubebb-core
```

如果一切正常，输出如下:

```shell
Kubernetes control plane is running at https://127.0.0.1:42607
CoreDNS is running at https://127.0.0.1:42607/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

5. 查看集群节点

```shell
kubectl get nodes
```

如果一切正常，输出如下:

```shell
NAME                              STATUS   ROLES           AGE   VERSION
kubebb-core-control-plane         Ready    control-plane   21m   v1.24.13
```

通过`docker ps`可发现该节点已经暴露了`80`和`443`端口:

```shell
(base) ➜  building-base git:(azure) docker ps
CONTAINER ID   IMAGE                   COMMAND                  CREATED          STATUS          PORTS                                                                 NAMES
e4e3820cdb5a   kindest/node:v1.24.13   "/usr/local/bin/entr…"   22 minutes ago   Up 22 minutes   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp, 127.0.0.1:33611->6443/tcp   kubebb-core-control-plane
```
