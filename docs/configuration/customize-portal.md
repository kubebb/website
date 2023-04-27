---
sidebar_position: 1
---

# 自定义门户

## 自定义 logo


# 自定义主色调
```shell
kubectl edit cm portal-global-configs -n u4a-system
```
修改 primaryColor 即可自定义门户主色调
```yaml
apiVersion: v1
data:
  global-configs: |
    {"theme": {"primaryColor": "#FE8F35"}}
```
