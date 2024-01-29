---
sidebar_position: 5
---

# 私有集群部署方案

在使用 kubebb-core 之前我们需要有一个 k8s 集群，版本是 `1.24+`。

## 1. 准备

**因为是在私有环境部署，所以需要通过某个可以联网集群，获取下面所必须的 命令，镜像上传到目标节点。**

### 命令行工具

- kind (https://kind.sigs.k8s.io/docs/user/quick-start/#installation)
- kubectl (https://kubernetes.io/docs/tasks/tools/)
- docker
- helm (https://helm.sh/docs/intro/install/)

### 镜像

- kindest/node:v1.24.4 (创建k8s集群，kind要是用的镜像)
- kubebb/core:v0.1.4 (kubebb-core 的镜像)
- alpine:3.15 (用来测试registry是否正常)
- ghcr.io/helm/chartmuseum:v0.16.0

### 代码仓库

- [kubebb/components](https://github.com/kubebb/components) (这里包含了kubebb的基础chart包, 因为是私有部署，所以需要先clone下来)

## 2. 创建集群

**如果已经有了镜像 registry，执行步骤 [2.1](#21-通过-kind-创建-k8s-集群), 没有镜像 registry，执行步骤 [2.2](#22-创建带有镜像-registry-的-kind-集群)**

### 2.1 通过 kind 创建 k8s 集群

下面是创建一个单节点集群的配置文件:

```yaml
# conf.yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: kubebb-core
nodes:
  - role: control-plane
    image: kindest/node:v1.24.4
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

创建集群

```shell
kind create cluster --config=conf.yaml
```

创建成功输出如下：

```shell
Creating cluster "kubebb-core" ...
 ✓ Ensuring node image (kindest/node:v1.24.4) 🖼
 ✓ Preparing nodes 📦  
 ✓ Writing configuration 📜 
 ✓ Starting control-plane 🕹️ 
 ✓ Installing CNI 🔌 
 ✓ Installing StorageClass 💾 
Set kubectl context to "kind-kubebb-core"
You can now use your cluster with:

kubectl cluster-info --context kind-kubebb-core

Not sure what to do next? 😅  Check out https://kind.sigs.k8s.io/docs/user/quick-start/
```

检查节点

```
kubectl get node

NAME                        STATUS   ROLES           AGE   VERSION
kubebb-core-control-plane   Ready    control-plane   70s   v1.24.4
```

### 2.2 创建带有镜像 Registry 的 kind 集群

可以通过kind部署集群的时候，直接带出来一个, 参考这里部署直接带出来一个registry
https://kind.sigs.k8s.io/docs/user/local-registry/

1. 启动 registry

```shell
# 1. 创建容器
docker run \
    -d --restart=always -p "127.0.0.1:5001:5000" --name kind-registry \
    registry:2

# 2. 检查容器是否正常运行
docker ps

CONTAINER ID   IMAGE        COMMAND                  CREATED         STATUS         PORTS                      NAMES
27c8049d53b9   registry:2   "/entrypoint.sh /etc…"   4 seconds ago   Up 3 seconds   127.0.0.1:5001->5000/tcp   kind-registry
```

2. 修改配置，并创建集群

```yaml
# conf-with-registry.yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: kubebb-core
containerdConfigPatches:
  - |-
    [plugins."io.containerd.grpc.v1.cri".registry.mirrors."localhost:5001"]
      endpoint = ["http://kind-registry:5000"]
nodes:
  - role: control-plane
    image: kindest/node:v1.24.4
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
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: local-registry-hosting
  namespace: kube-public
data:
  localRegistryHosting.v1: |
    host: "localhost:5001"
    help: "https://kind.sigs.k8s.io/docs/user/local-registry/"
```

创建集群

```shell
# 1. create cluster
kind create cluster --config=conf-with-registry.yaml
```

创建成功，输入如下:

```shell
# 输出如下
Creating cluster "kubebb-core" ...
 ✓ Ensuring node image (kindest/node:v1.24.4) 🖼
 ✓ Preparing nodes 📦  
 ✓ Writing configuration 📜 
 ✓ Starting control-plane 🕹️ 
 ✓ Installing CNI 🔌 
 ✓ Installing StorageClass 💾 
Set kubectl context to "kind-kubebb-core"
You can now use your cluster with:

kubectl cluster-info --context kind-kubebb-core

Not sure what to do next? 😅  Check out https://kind.sigs.k8s.io/docs/user/quick-start/
```

将 registry 连接到 `kind` 网络

```shell
if [ "$(docker inspect -f='{{json .NetworkSettings.Networks.kind}}' "kind-registry")" = 'null' ]; then
    docker network connect "kind" "kind-registry"
fi
```

3. 测试镜像

```shell
docker tag alpine:3.15 localhost:5001/alpine:3.15
docker push localhost:5001/alpine:3.15
```

4. 测试镜像使用

```yaml
#deploy.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: log
  labels:
    app: log
spec:
  replicas: 1
  selector:
    matchLabels:
      app: log
  template:
    metadata:
      labels:
        app: log
    spec:
      containers:
      - name: log
        image: localhost:5001/alpine:3.15
        command:
        - "/bin/sh"
        args:
        - "-c"
        - "while true; do echo hello; sleep 10;done"
```

```shell
# 1. 创建deployment
kubectl apply -f deploy.yaml 

# 2. 检查pod是否运行
kubectl get po

NAME                   READY   STATUS    RESTARTS   AGE
log-847f844f96-wvb46   1/1     Running   0          1s

# 3. 查看pod日志
kubectl logs -f log-847f844f96-wvb46
hello
hello
hello
^C
```

---

## 3.安装 kubebb-core

1. 将镜像 `kubebb/core:v0.1.4` 推到你的镜像 registry。

```shell
docker tag kubebb/core:v0.1.4 localhost:5001/core:v0.1.4
docker push localhost:5001/core:v0.1.4
```

2. 安装

```shell
kubectl create ns kubebb-system
cd components/charts/kubebb-core
helm  -nkubebb-system install kubebb --set deployment.image=localhost:5001/core:v0.1.4
```

3. 执行结果

```shell
kubectl get po -nkubebb-system

NAME                      READY   STATUS    RESTARTS   AGE
kubebb-799f9c474d-c9jnn   1/1     Running   0          17s
```

---

## 4.部署 chartmuseum

部署一个私有的chart repo，用来存储chart包。

1. 将镜像 `ghcr.io/helm/chartmuseum:v0.16.0` 推到你的 registry

```shell
docker tag ghcr.io/helm/chartmuseum:v0.16.0 localhost:5001/chartmuseum:v0.16.0
docker push localhost:5001/chartmuseum:v0.16.0
```

2. 安装

这里注意：如果要是用 chartmuseum 的 api 必须设置 `env.open.DISABLE_API=false`

```shell
cd components/charts/chartmuseum
helm install chartmuseum --set image.repository=localhost:5001/chartmuseum --set env.open.DISABLE_API=false .
```

3. 执行结果

```shell
kubectl get po

NAME                           READY   STATUS    RESTARTS   AGE
chartmuseum-6c4bc46898-6jj4b   1/1     Running   0          13s
```

4. 测试包上传

    这里可以通过 nodePort，ingress等方式将 chartmuseum 暴露出去。
    目前是通过kind部署的集群，没有映射更多的主机端口，所以这里选择 `port-forward`

    4.1 找到 chartmuseum 的服务port信息

    ```shell
    kubectl get svc
    NAME          TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
    chartmuseum   ClusterIP   10.96.240.154   <none>        8080/TCP   2m59s
    ```

    4.2 通过 `port-froward` 转发

    ```shell
    kubectl port-forward service/chartmuseum 8080:8080 --address=0.0.0.0
    ```

    4.3 上传chart包
    这里还是以 chartmuseum 测试

    ```shell
    cd components/charts/chartmuseum
    helm pacakge .

    # 成功将会输出 {"saved":true}
    curl --data-binary "@chartmuseum-3.10.1.tgz" http://localhost:8080/api/charts
    ```

    4.4 结果查看

    ```shell
    # 查看 index.yaml
    curl http://localhost:8080/index.yaml
    ```

    4.4 上传其他的chart包

    对于 `components/charts` 下面的其他的chart包用到哪些，按照 `4.3` 步骤就可以完成上传。

---

## 5.使用 kubebb-core

### 5.1 部署一个 Repository

```yaml
# repo.yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: Repository
metadata:
  name: kubebb
  namespace: kubebb-system
spec:
  url: http://chartmuseum.default.svc.cluster.local:8080
  pullStategy:
    intervalSeconds: 120
    retry: 5
```

创建 repository

```shell
# 1. 创建 repository
kubectl apply -f repo.yaml 

# 2. 检查 components 是否创建
kubectl get components.core.kubebb.k8s.com.cn -n kubebb-system
NAME                 AGE
kubebb.chartmuseum   2s
kubebb.kubebb-core   2s
```

可以看到创建了 repository 后，相关的 components 已经被创建出来了。

### 5.2 部署一个 Component

部署 component ，需要使用 componentplan 这个资源。这里我们选择再次部署一个 chartmuseum。前面通过 helm 部署的 chartmuseum 是给系统存储chart用的，这里部署，是为了测试功能正常(没搞其他的chart包)。

```yaml
# componentplan.yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: ComponentPlan
metadata:
  name: chartmuseum-test
  namespace: default
spec:
  approved: true
  name: chartmuseum-test
  version: 3.10.1
  override:
    set:
    - image.repository=localhost:5001/chartmuseum 
    - env.open.DISABLE_API=false
  component:
    name: kubebb.chartmuseum
    namespace: kubebb-system
```

创建compnentplan

```shell
kubectl apply -f componentplan.yaml
```

部署完成后，可以看到 `chartmuseum-test` 的pod也起来了。

```shell
kubectl get po

NAME                                READY   STATUS    RESTARTS   AGE
chartmuseum-6c4bc46898-msp7r        1/1     Running   0          107s
chartmuseum-test-86d66fd5d7-lp2rn   1/1     Running   0          11s
```

### 5.3 Repository Image 重写

这个步骤是为了测试 image 更新策略，如果不需要可以不用操作。
我们还是用之前的helm部署的 chartmuseum，里面有一个chartmuseum 的包， 要用到镜像

`ghcr.io/helm/chartmuseum:v0.16.0`

```yaml
# repo-override-image.yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: Repository
metadata:
  name: repo-override-image
  namespace: kubebb-system
spec:
  url: http://chartmuseum.default.svc.cluster.local:8080
  pullStategy:
    intervalSeconds: 120
    retry: 5
  imageOverride:
    - registry: ghcr.io
      newRegistry: localhost:5001
      pathOverride:
        path: helm
        newPath: ""
```

创建Repository

```shell
kubectl apply -f repo-override-image.yaml
```

创建 repository 后，查看 components

```shell
kubectl get components -A
NAMESPACE       NAME                              AGE
kubebb-system   kubebb.chartmuseum                18m
kubebb-system   kubebb.kubebb-core                18m
kubebb-system   repo-override-image.chartmuseum   5s
kubebb-system   repo-override-image.kubebb-core   5s
```

再次安装 chartmuseum
**注意，这里我们不再设置 chartmuseum 所使用的镜像。**

```yaml
# componentplan-default-override.yaml
apiVersion: core.kubebb.k8s.com.cn/v1alpha1
kind: ComponentPlan
metadata:
  name: chartmuseum-test233
  namespace: default
spec:
  approved: true
  name: chartmuseum-test233
  version: 3.10.1
  override:
    set:
    - env.open.DISABLE_API=false
  component:
    name: repo-override-image.chartmuseum
    namespace: kubebb-system
```

创建 componentplan

```shell
kubectl apply -f componentplan-default-override.yaml
```

检查pod的运行情况

```shell
kubectl get po

NAME                                   READY   STATUS    RESTARTS   AGE
chartmuseum-6c4bc46898-msp7r           1/1     Running   0          32m
chartmuseum-test-86d66fd5d7-lp2rn      1/1     Running   0          31m
chartmuseum-test233-544cbfb87c-b6pdd   1/1     Running   0          12s
```

部署完成✅!
