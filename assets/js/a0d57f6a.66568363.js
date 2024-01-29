"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2498],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),g=a,f=m["".concat(p,".").concat(g)]||m[g]||u[g]||r;return t?o.createElement(f,l(l({ref:n},s),{},{components:t})):o.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={sidebar_position:1},l="\u81ea\u5b9a\u4e49\u95e8\u6237",i={unversionedId:"develop-guide/building-base/configuration/customize-portal",id:"develop-guide/building-base/configuration/customize-portal",title:"\u81ea\u5b9a\u4e49\u95e8\u6237",description:"\u81ea\u5b9a\u4e49 logo",source:"@site/docs/develop-guide/building-base/configuration/customize-portal.md",sourceDirName:"develop-guide/building-base/configuration",slug:"/develop-guide/building-base/configuration/customize-portal",permalink:"/website/docs/develop-guide/building-base/configuration/customize-portal",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u914d\u7f6e",permalink:"/website/docs/category/\u81ea\u5b9a\u4e49\u914d\u7f6e"},next:{title:"\u81ea\u5b9a\u4e49\u83dc\u5355",permalink:"/website/docs/develop-guide/building-base/configuration/customize-menu"}},p={},c=[{value:"\u81ea\u5b9a\u4e49 logo",id:"\u81ea\u5b9a\u4e49-logo",level:2},{value:"\u81ea\u5b9a\u4e49\u4e3b\u8272\u8c03",id:"\u81ea\u5b9a\u4e49\u4e3b\u8272\u8c03",level:2}],s={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u81ea\u5b9a\u4e49\u95e8\u6237"},"\u81ea\u5b9a\u4e49\u95e8\u6237"),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49-logo"},"\u81ea\u5b9a\u4e49 logo"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u51c6\u5907\u597d\u9700\u8981\u66ff\u6362\u7684 logo\uff0c\u6bd4\u5982 logo-white.png\u3001favicon.png\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u5bf9\u5e94\u7684 configmap")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create configmap portal-logos -n u4a-system \\\n  --from-file=logo-white.png=./logo-white.png \\\n  --from-file=favicon.ico=./favicon.png\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539 bff-server \u7684 deployment \u5c06 configmap \u6302\u8f7d\u8fdb\u53bb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: bff-server\n  namespace: u4a-system\nspec:\n  template:\n    spec:\n      volumes:\n      - hostPath:\n          path: /etc/localtime\n          type: ""\n        name: time-localtime\n      # \u5b58\u50a8\u5377\u4e2d\u589e\u52a0\u521a\u521a\u521b\u5efa\u7684 configmap portal-logos\n      - configMap:\n          name: portal-logos\n        name: logos\n      containers:\n        volumeMounts:\n        - mountPath: /etc/localtime\n          name: time-localtime\n          readOnly: true\n        # \u5c06\u4e0a\u9762\u7684\u5b58\u50a8\u5377 logos \u6302\u8f7d\u5230\u5bf9\u5e94 logo \u76ee\u5f55\n        - mountPath: /usr/src/app/public/profile/img\n          name: logos\n')),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u4e3b\u8272\u8c03"},"\u81ea\u5b9a\u4e49\u4e3b\u8272\u8c03"),(0,a.kt)("p",null,"\u901a\u8fc7\u521b\u5efa portal-global-configs \u7684 configmap\uff0c\u5373\u53ef\u81ea\u5b9a\u4e49\u95e8\u6237\u4e3b\u8272\u8c03\uff0c\u793a\u610f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: portal-global-configs\n  namespace: u4a-system\ndata:\n  global-configs: |\n    {"theme": {"primaryColor": "#008F35"}}\n')),(0,a.kt)("p",null,"\u521b\u5efa configMap\uff0c\u5237\u65b0\u95e8\u6237\u540e\u5373\u53ef\u751f\u6548"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create cm portal-global-configs -n u4a-system\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539 bff-server \u7684 deployment \u5c06 configmap \u6302\u8f7d\u8fdb\u53bb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: bff-server\n  namespace: u4a-system\nspec:\n  template:\n    spec:\n      volumes:\n      - hostPath:\n          path: /etc/localtime\n          type: ""\n        name: time-localtime\n      # \u5b58\u50a8\u5377\u4e2d\u589e\u52a0\u521a\u521a\u521b\u5efa\u7684 configmap portal-global-configs\n      - configMap:\n          name: portal-global-configs\n        name: portal-global-configs\n      containers:\n        volumeMounts:\n        - mountPath: /etc/localtime\n          name: time-localtime\n          readOnly: true\n        # \u5c06\u4e0a\u9762\u7684\u5b58\u50a8\u5377 logos \u6302\u8f7d\u5230\u5bf9\u5e94 logo \u76ee\u5f55\uff1a\n        - mountPath: /usr/src/app/configs\n          name: portal-global-configs\n')))}u.isMDXComponent=!0}}]);