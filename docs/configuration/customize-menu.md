---
sidebar_position: 2
---

# 自定义菜单

kubebb 的所有菜单均基于 menu 的 CRD 进行定义，如果需要添加自己的菜单，可以参考以下 memnu 示例:
```yaml
# 主菜单
apiVersion: component.t7d.io/v1beta1
kind: Menu
metadata:
  name: demo-menu
spec:
  column: 1
  isRenderSelectCurrent: false
  parentOwnerReferences:
    apiVersion: ""
    kind: ""
    name: ""
    uid: ""
  rankingInColumn: 100
  tenant: true
  text: 测试菜单
  textEn: "Test Menu"
---
# 测试菜单索引菜单
apiVersion: component.t7d.io/v1beta1
kind: Menu
metadata:
  name: demo-menu-index
spec:
  getTitleForReplaceSider: {}
  parentOwnerReferences:
    apiVersion: component.t7d.io/v1beta1
    blockOwnerDeletion: false
    controller: false
    kind: Menu
    name: demo-menu
    uid: ""
  rankingInColumn: 100
  tenant: true
  text: 菜单索引项
  textEn: “Menu Index Item"
---
# 子菜单，具备实际链接功能
apiVersion: component.t7d.io/v1beta1
kind: Menu
metadata:
  name: demo-menu-submenu1
spec:
  getTitleForReplaceSider: {}
  isRenderSelectCurrent: false
  parentOwnerReferences:
    apiVersion: component.t7d.io/v1beta1
    blockOwnerDeletion: false
    controller: false
    kind: Menu
    name: demo-menu-index
    uid: ""
  pathname: /demo-feature1
  rankingInColumn: 200
  text: 测试子菜单
  textEn: "Test Submenu"
```

使用 `kubectl apply -f` 即可将菜单项部署到环境中，如下图所示：
![图 1](../quick-start/images/4a52ae49bf01baee581357a57038c5792dab1fe153770917e42a5888a7ebebdc.png)  
