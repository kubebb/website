"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const l={sidebar_position:2},a="\u5f00\u53d1\u6a21\u5f0f",i={unversionedId:"develop-guide/lowcode-development/development_pattern",id:"develop-guide/lowcode-development/development_pattern",title:"\u5f00\u53d1\u6a21\u5f0f",description:"KubeBB \u7ec4\u4ef6\u7684\u5f00\u53d1\u91c7\u53d6\u524d\u540e\u7aef\u5206\u79bb\uff0c\u4ee5 K8S \u4e3a\u6838\u5fc3\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u9075\u5faa K8S \u7684\u6269\u5c55\u673a\u5236\u53ca API \u89c4\u8303\u3002\u6574\u4f53\u5f00\u53d1\u67b6\u6784\u7684\u57fa\u672c\u903b\u8f91\u5982\u4e0b\u56fe\u6240\u793a\uff1a",source:"@site/docs/develop-guide/lowcode-development/development_pattern.md",sourceDirName:"develop-guide/lowcode-development",slug:"/develop-guide/lowcode-development/development_pattern",permalink:"/website/en/docs/develop-guide/lowcode-development/development_pattern",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/website/en/docs/develop-guide/lowcode-development/intro"},next:{title:"\u7ec4\u4ef6\u5f00\u53d1",permalink:"/website/en/docs/category/\u7ec4\u4ef6\u5f00\u53d1"}},p={},c=[{value:"\u4e09\u5c42\u6a21\u5f0f",id:"\u4e09\u5c42\u6a21\u5f0f",level:2}],d={toc:c},u="wrapper";function s(e){let{components:t,...l}=e;return(0,o.kt)(u,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5f00\u53d1\u6a21\u5f0f"},"\u5f00\u53d1\u6a21\u5f0f"),(0,o.kt)("p",null,"KubeBB \u7ec4\u4ef6\u7684\u5f00\u53d1\u91c7\u53d6\u524d\u540e\u7aef\u5206\u79bb\uff0c\u4ee5 K8S \u4e3a\u6838\u5fc3\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u9075\u5faa K8S \u7684\u6269\u5c55\u673a\u5236\u53ca API \u89c4\u8303\u3002\u6574\u4f53\u5f00\u53d1\u67b6\u6784\u7684\u57fa\u672c\u903b\u8f91\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,o.kt)("img",{alt:"dev_arch",src:r(5541).Z,width:"1089",height:"724"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6240\u6709\u7ec4\u4ef6\u7684\u5f00\u53d1\u3001\u6269\u5c55\u7684\u8ba4\u8bc1\u90fd\u901a\u8fc7\u7edf\u4e00\u8ba4\u8bc1\u4e2d\u5fc3\u8fdb\u884c\u8ba4\u8bc1"),(0,o.kt)("li",{parentName:"ol"},"\u8ba4\u8bc1\u7531\u5fae\u524d\u7aef\u7684\u4e3b\u6846\u67b6 DockApp \u7edf\u4e00\u8fdb\u884c\uff0c\u5176\u4ed6\u5fae\u524d\u7aef\u7684\u6269\u5c55\u4e0d\u9700\u8981\u5355\u72ec\u652f\u6301\u540c\u8ba4\u8bc1\u4e2d\u5fc3\u7684\u5904\u7406")),(0,o.kt)("h2",{id:"\u4e09\u5c42\u6a21\u5f0f"},"\u4e09\u5c42\u6a21\u5f0f"),(0,o.kt)("p",null,"\u57fa\u4e8e\u4f4e\u7801\u5f00\u53d1\u7684\u7ec4\u4ef6\uff0c\u5c06\u91c7\u7528\u5982\u4e0b\u4e09\u5c42\u5f00\u53d1\u6a21\u5f0f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u5c42:")," \u524d\u7aef\u91c7\u7528\u5fae\u524d\u7aef\u67b6\u6784\uff0c\u63a8\u8350\u91c7\u7528\u4f4e\u4ee3\u7801\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u63d0\u9ad8\u4ee3\u7801\u81ea\u52a8\u5316\u751f\u6210\u6bd4\u4f8b\uff0c\u4e5f\u53ef\u91c7\u7528\u624b\u52a8\u5f00\u53d1\u7684\u6a21\u5f0f\uff0c\u8be6\u89c1 ",(0,o.kt)("a",{parentName:"li",href:"/website/en/docs/develop-guide/lowcode-development/development/frontend"},"\u524d\u7aef\u5c42\u5f00\u53d1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b2c\u4e8c\u5c42:")," \u6839\u636e\u4e1a\u52a1\u9700\u6c42\u589e\u52a0 OpenAPI\uff0c\u5f62\u6210\u7edf\u4e00\u7684 BFF \u5c42\uff0c\u5bf9 API \u8fdb\u884c\u805a\u5408\uff0c\u63d0\u4f9b\u524d\u7aef\u6240\u9700\u8981\u7684\u4e1a\u52a1\u573a\u666f\u6570\u636e\uff0c\u76ee\u524d K8s \u8d44\u6e90\u7684 sdk \u53ef\u5b9e\u73b0\u81ea\u52a8\u751f\u6210\uff0c\u540e\u7eed\u8fd9\u4e00\u5c42\u4e5f\u4f1a\u63a2\u7d22\u4f4e\u7801\u5316"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b2c\u4e09\u5c42:")," \u540e\u7aef\u91c7\u7528 CRD + controller \u7684 Operator \u6a21\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u5f62\u6210\u6570\u636e\u9a71\u52a8\u7684\u6d41\u7a0b\u5f00\u53d1\u6a21\u5f0f")))}s.isMDXComponent=!0},5541:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dev_arch-8fbc2a4fd6aeaaa23274c226eb811799.png"}}]);