"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5548],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},i="\u4f53\u9a8c\u81ea\u5b9a\u4e49\u914d\u7f6e",l={unversionedId:"quick-start/customization",id:"quick-start/customization",title:"\u4f53\u9a8c\u81ea\u5b9a\u4e49\u914d\u7f6e",description:"1. \u81ea\u5b9a\u4e49\u95e8\u6237\u7684\u4e3b\u8272\u8c03",source:"@site/docs/quick-start/customization.md",sourceDirName:"quick-start",slug:"/quick-start/customization",permalink:"/en/docs/quick-start/customization",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72\u5e95\u5ea7\u7ec4\u4ef6",permalink:"/en/docs/quick-start/get-started"},next:{title:"\u6280\u672f\u603b\u89c8",permalink:"/en/docs/category/\u6280\u672f\u603b\u89c8"}},c={},u=[],s={toc:u},p="wrapper";function m(e){let{components:n,...o}=e;return(0,a.kt)(p,(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f53\u9a8c\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u4f53\u9a8c\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u95e8\u6237\u7684\u4e3b\u8272\u8c03")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit cm portal-global-configs -n u4a-system\n")),(0,a.kt)("p",null,"\u4fee\u6539 primaryColor \u5373\u53ef\u81ea\u5b9a\u4e49\u95e8\u6237\u4e3b\u8272\u8c03"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: portal-global-configs\ndata:\n  global-configs: |\n    {"theme": {"primaryColor": "#FE8F35"}}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u83dc\u5355")),(0,a.kt)("p",null,"kubebb \u7684\u6240\u6709\u83dc\u5355\u5747\u57fa\u4e8e menu \u7684 CRD \u8fdb\u884c\u5b9a\u4e49\uff0c\u5982\u679c\u9700\u8981\u6dfb\u52a0\u81ea\u5df1\u7684\u83dc\u5355\uff0c\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b memnu \u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u4e3b\u83dc\u5355\napiVersion: component.t7d.io/v1beta1\nkind: Menu\nmetadata:\n  name: demo-menu\nspec:\n  column: 1\n  isRenderSelectCurrent: false\n  parentOwnerReferences:\n    apiVersion: ""\n    kind: ""\n    name: ""\n    uid: ""\n  rankingInColumn: 100\n  tenant: true\n  text: \u6d4b\u8bd5\u83dc\u5355\n  textEn: "Test Menu"\n---\n# \u6d4b\u8bd5\u83dc\u5355\u7d22\u5f15\u83dc\u5355\napiVersion: component.t7d.io/v1beta1\nkind: Menu\nmetadata:\n  name: demo-menu-index\nspec:\n  getTitleForReplaceSider: {}\n  parentOwnerReferences:\n    apiVersion: component.t7d.io/v1beta1\n    blockOwnerDeletion: false\n    controller: false\n    kind: Menu\n    name: demo-menu\n    uid: ""\n  rankingInColumn: 100\n  tenant: true\n  text: \u83dc\u5355\u7d22\u5f15\u9879\n  textEn: \u201cMenu Index Item"\n---\n# \u5b50\u83dc\u5355\uff0c\u5177\u5907\u5b9e\u9645\u94fe\u63a5\u529f\u80fd\napiVersion: component.t7d.io/v1beta1\nkind: Menu\nmetadata:\n  name: demo-menu-submenu1\nspec:\n  getTitleForReplaceSider: {}\n  isRenderSelectCurrent: false\n  parentOwnerReferences:\n    apiVersion: component.t7d.io/v1beta1\n    blockOwnerDeletion: false\n    controller: false\n    kind: Menu\n    name: demo-menu-index\n    uid: ""\n  pathname: /demo-feature1\n  rankingInColumn: 200\n  text: \u6d4b\u8bd5\u5b50\u83dc\u5355\n  textEn: "Test Submenu"\n')),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f")," \u5373\u53ef\u5c06\u83dc\u5355\u9879\u90e8\u7f72\u5230\u73af\u5883\u4e2d\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,a.kt)("img",{alt:"\u56fe 1",src:t(7506).Z,width:"1796",height:"516"}),"  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4ecb\u7ecd\u53c2\u8003 ",(0,a.kt)("a",{parentName:"li",href:"/en/docs/configuration/customize-menu"},"\u81ea\u5b9a\u4e49\u83dc\u5355"))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u591a\u8bed\u8a00 & \u767d\u5929/\u9ed1\u591c\u6a21\u5f0f")),(0,a.kt)("p",null,"1\uff09\u901a\u8fc7\u53f3\u4e0a\u89d2\u7684\u8bed\u8a00\u5207\u6362\u6309\u94ae\u8fdb\u884c\u591a\u8bed\u8a00\u5207\u6362\uff0c\u76ee\u524d\u652f\u6301\u4e2d\u6587\u3001\u82f1\u6587\u4e24\u79cd\u8bed\u8a00"),(0,a.kt)("p",null,"2\uff09\u901a\u8fc7\u53f3\u4e0a\u89d2\u7684\u6309\u94ae\u5207\u6362\u767d\u5929/\u9ed1\u591c\u6a21\u5f0f"))}m.isMDXComponent=!0},7506:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/4a52ae49bf01baee581357a57038c5792dab1fe153770917e42a5888a7ebebdc-fdbb239e6fc4fbeb5e8f8338d8f6d83b.png"}}]);