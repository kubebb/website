---
sidebar_position: 1
---

# 自定义门户

## 自定义 logo
1. 准备好需要替换的 logo，比如 logo-white.png、favicon.png，使用以下命令创建对应的 configmap
```
kubectl create configmap portal-logos -n u4a-system \
  --from-file=logo-white.png=./logo-white.png \
  --from-file=favicon.ico=./favicon.png
```
2. 修改 bff-server 的 deployment 将 configmap 挂载进去
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bff-server
  namespace: u4a-system
spec:
  template:
    spec:
      volumes:
      - hostPath:
          path: /etc/localtime
          type: ""
        name: time-localtime
      # 存储卷中增加刚刚创建的 configmap portal-logos
      - configMap:
          name: portal-logos
        name: logos
      containers:
        volumeMounts:
        - mountPath: /etc/localtime
          name: time-localtime
          readOnly: true
        # 将上面的存储卷 logos 挂载到对应 logo 目录
        - mountPath: /usr/src/app/public/profile/img
          name: logos
```

## 自定义主色调
通过创建 portal-global-configs 的 configmap，即可自定义门户主色调，示意如下：
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: portal-global-configs
  namespace: u4a-system
data:
  global-configs: |
    {"theme": {"primaryColor": "#008F35"}}
```
创建 configMap，刷新门户后即可生效
```shell
kubectl create cm portal-global-configs -n u4a-system
```

2. 修改 bff-server 的 deployment 将 configmap 挂载进去
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bff-server
  namespace: u4a-system
spec:
  template:
    spec:
      volumes:
      - hostPath:
          path: /etc/localtime
          type: ""
        name: time-localtime
      # 存储卷中增加刚刚创建的 configmap portal-global-configs
      - configMap:
          name: portal-global-configs
        name: portal-global-configs
      containers:
        volumeMounts:
        - mountPath: /etc/localtime
          name: time-localtime
          readOnly: true
        # 将上面的存储卷 logos 挂载到对应 logo 目录：
        - mountPath: /usr/src/app/configs
          name: portal-global-configs
```