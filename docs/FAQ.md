---
sidebar_position: 8
---


# 常见问题

## BuildingBase部署

### 1. 租户管理控制器probe liveness校验失败，导致无法启动

- 环境
  - Azure VM (Ubuntu 22.04)

#### 问题重现

运行`helm install --wait -n u4a-system u4a-component .`后，发现租户管理控制器一直处于`CrashLoopBackOff`状态:

```shell
➜  ~ k get pods -nu4a-system
NAME                                                          READY   STATUS             RESTARTS      AGE
bff-server-9cc54cbc5-gcp6x                                    1/1     Running            0             17m
capsule-controller-manager-5b9864f9bf-7mkhb                   0/1     CrashLoopBackOff   8 (27s ago)   17m
cert-manager-79d7998d9-c7q8n                                  1/1     Running            0             33m
cert-manager-cainjector-57bb7f44dd-c9sj6                      1/1     Running            0             33m
cert-manager-webhook-65b494ccf4-4blzx                         1/1     Running            0             33m
cluster-component-ingress-nginx-controller-86d6bfdbf6-qj6hf   1/1     Running            0             33m
kube-oidc-proxy-fc6b54b8c-ddc2s                               1/1     Running            0             17m
oidc-server-84cbfcc9f5-bmmf9                                  2/2     Running            0             17m
resource-view-controller-94645667-ttvst                       1/1     Running            0             17m
```

查看日志发现如下错误：

```shell
Events:
  Type     Reason     Age                    From               Message
  ----     ------     ----                   ----               -------
  Normal   Scheduled  4m35s                  default-scheduler  Successfully assigned u4a-system/capsule-controller-manager-5b9864f9bf-7mkhb to kubebb-core-worker
  Normal   Pulling    4m34s                  kubelet            Pulling image "hub.tenxcloud.com/u4a-component/capsule:v0.1.2-20221122"
  Normal   Pulled     3m57s                  kubelet            Successfully pulled image "hub.tenxcloud.com/u4a-component/capsule:v0.1.2-20221122" in 36.616134797s
  Warning  Unhealthy  3m53s                  kubelet            Liveness probe failed: Get "http://10.244.1.6:10080/healthz": context deadline exceeded (Client.Timeout exceeded while awaiting headers)
  Warning  Unhealthy  3m44s                  kubelet            Readiness probe failed: Get "http://10.244.1.6:10080/readyz": dial tcp 10.244.1.6:10080: connect: connection refused
  Warning  Unhealthy  3m44s                  kubelet            Liveness probe failed: Get "http://10.244.1.6:10080/healthz": dial tcp 10.244.1.6:10080: connect: connection refused
  Normal   Created    3m34s (x3 over 3m57s)  kubelet            Created container manager
  Normal   Started    3m34s (x3 over 3m57s)  kubelet            Started container manager
  Warning  Unhealthy  3m31s (x7 over 3m55s)  kubelet            Readiness probe failed: Get "http://10.244.1.6:10080/readyz": context deadline exceeded (Client.Timeout exceeded while awaiting headers)
  Warning  BackOff    3m13s (x4 over 3m42s)  kubelet            Back-off restarting failed container
  Normal   Pulled     3m1s (x3 over 3m50s)   kubelet            Container image "hub.tenxcloud.com/u4a-component/capsule:v0.1.2-20221122" already present on machine
```

#### 问题原因

> 感谢 @0xff-dev 提供的解决方案

去除liveness probe后，能看到容器报错，发现是由于capsule初始化过程中超出了操作系统允许的最大文件打开数，导致capsule无法启动。

#### 解决方案

> 感谢 @0xff-dev 提供的解决方案，需设置 fs.inotify.max_user_instances=81920

**由微软的New Bing解答得到的答案：**

`fs.inotify.max_user_instances` 是一个内核参数，它表示每个用户可以创建的 `inotify` 实例的最大数量。`inotify` 是一个用来监视文件系统变化的机制。如果你想要修改这个参数，你有两种方法：

- 临时修改：你可以使用 sysctl -w 命令来临时修改这个参数，例如：

```sh
sudo sysctl -w fs.inotify.max_user_instances=81920
```

这个命令会把 `fs.inotify.max_user_instances` 的值设置为 81920，并写入`/proc/sys/fs/inotify/max_user_instances` 文件。但是这个修改只在重启之前有效，重启后会恢复默认值。

- 永久修改：你可以在 /etc/sysctl.conf 文件中添加一行：

```sh
fs.inotify.max_user_instances=81920
```

然后运行 `sudo sysctl -p`命令来加载这个文件中的设置。这样，这个修改就会在每次重启后生效。

如果你想了解更多关于 sysctl 和 fs.inotify.max_user_instances 的信息，请参考以下链接：

- [How to increase the inotify.max_user_watches and inotify.max_user_instances sysctls on a Linux host | Support | SUSE](https://www.suse.com/support/kb/doc/?id=000020048)
- [How to set and understand fs.notify.max_user_watches - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/444998/how-to-set-and-understand-fs-notify-max-user-watches)
- [sysctl: permission denied on key 'fs.inotify.max_user_watches' - Ask Ubuntu](https://askubuntu.com/questions/1068168/sysctl-permission-denied-on-key-fs-inotify-max-user-watches)

<!-- Source: Conversation with Bing, 2023/7/3
(1) How to increase the inotify.max_user_watches and inotify.max_user_instances sysctls on a Linux host | Support | SUSE. <https://www.suse.com/support/kb/doc/?id=000020048>.
(2) How to set and understand fs.notify.max_user_watches. <https://unix.stackexchange.com/questions/444998/how-to-set-and-understand-fs-notify-max-user-watches>.
(3) sysctl: permission denied on key 'fs.inotify.max_user_watches'. <https://askubuntu.com/questions/1068168/sysctl-permission-denied-on-key-fs-inotify-max-user-watches>. -->
