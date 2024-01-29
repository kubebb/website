"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(c,".").concat(m)]||u[m]||b[m]||l;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:4},o="\u53d1\u5e03 HelloWorld \u7ec4\u4ef6",i={unversionedId:"quick-start/quick-experience",id:"quick-start/quick-experience",title:"\u53d1\u5e03 HelloWorld \u7ec4\u4ef6",description:"\u5df2\u5b8c\u6210 Kubebb \u7684\u5b89\u88c5\uff0c\u53c2\u8003\u5b89\u88c5 Kubebb",source:"@site/docs/quick-start/quick-experience.md",sourceDirName:"quick-start",slug:"/quick-start/quick-experience",permalink:"/website/docs/quick-start/quick-experience",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5 Kubebb",permalink:"/website/docs/quick-start/quick-install"},next:{title:"\u79c1\u6709\u96c6\u7fa4\u90e8\u7f72\u65b9\u6848",permalink:"/website/docs/quick-start/privatecluster"}},c={},p=[],s={toc:p},u="wrapper";function b(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53d1\u5e03-helloworld-\u7ec4\u4ef6"},"\u53d1\u5e03 HelloWorld \u7ec4\u4ef6"),(0,a.kt)("admonition",{title:"\u524d\u63d0\u6761\u4ef6",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5df2\u5b8c\u6210 Kubebb \u7684\u5b89\u88c5\uff0c\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/website/docs/quick-start/quick-install"},"\u5b89\u88c5 Kubebb"))),(0,a.kt)("p",null,"Kubebb \u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u53ef\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubebb/components"},"\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93"),"\u5feb\u901f\u4f53\u9a8c\u7ec4\u4ef6\u7684\u90e8\u7f72\u548c\u4f7f\u7528\u3002\u672c\u7ae0\u8282\u4e3b\u8981\u4ee5 HelloWorld \u7ec4\u4ef6\u4e3a\u4f8b\uff0c\u6f14\u793a\u7ec4\u4ef6\u53d1\u5e03\u3001\u5b89\u88c5\u3001\u4f7f\u7528\u6d41\u7a0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubebb \u4e3a\u5185\u7f6e\u7684\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93\uff0c\u63d0\u4f9b\u591a\u529f\u80fd\u7ec4\u4ef6\u3002 HelloWorld \u7ec4\u4ef6\u4f5c\u4e3a\u6f14\u793a\u7ec4\u4ef6\u5185\u7f6e\u5728<\u7ec4\u4ef6\u5e02\u573a>\u4e2d\u3002\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u3010\u7ec4\u4ef6\u5e02\u573a/\u7ec4\u4ef6\u4ed3\u5e93\u7ba1\u7406\u3011\uff0c\u5373\u53ef\u67e5\u770b\u5230\u4ed3\u5e93 ",(0,a.kt)("inlineCode",{parentName:"li"},"kubebb"),"\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u624b\u52a8\u6dfb\u52a0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/repos/repository_kubebb.yaml\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u3010\u7ec4\u4ef6\u5e02\u573a/\u7ec4\u4ef6\u5e02\u573a\u3011\uff0c\u641c\u7d22\u201chello\u201d\uff0c\u5982\u4e0b\u56fe\uff0c\u793a\u4f8b\u7ec4\u4ef6\uff08hello-world\uff09")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u7ec4\u4ef6\u5e02\u573a",src:r(8953).Z,width:"1902",height:"739"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb\u7ec4\u4ef6\u5361\u7247\u7684",(0,a.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\uff0c\u8fdb\u5165\u5b89\u88c5\u9875\u9762\uff0c\u793a\u4f8b\u7ec4\u4ef6\u5404\u9009\u9879\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\uff1a\u586b\u5199\u90e8\u7f72\u540d\u79f0\uff0c\u9009\u62e9\u7ec4\u4ef6\u7248\u672c\uff0c\u9009\u62e9\u5b89\u88c5\u4f4d\u7f6e\uff08\u79df\u6237\u3001\u9879\u76ee\uff09\uff0c\u68c0\u67e5 values.yaml\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u540d\u79f0\uff1a\u4f8bhelloworld\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"\u75313~53\u4e2a\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e2d\u5212\u7ebf\u201c-\u201d\u7ec4\u6210\uff0c\u5e76\u4ee5\u5b57\u6bcd\u3001\u6570\u5b57\u5f00\u5934\u6216\u7ed3\u5c3e")),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u65b9\u5f0f\uff1a\u9ed8\u8ba4\u624b\u52a8\u5373\u53ef"),(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u7248\u672c\uff1a\u9ed8\u8ba4\u7b2c\u4e00\u4e2a0.1.0\u5373\u53ef"),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u4f4d\u7f6e\uff1a\u6309\u60a8\u9700\u8981\u9009\u62e9\u79df\u6237\u3001\u9879\u76ee"),(0,a.kt)("li",{parentName:"ul"},"values.yaml\uff1a\u65e0\u9700\u6539\u52a8\u3002\u5982\u679c\u5b89\u88c5\u5176\u4ed6\u7ec4\u4ef6\uff0c\u8bf7\u70b9\u51fb\u9875\u9762\u4e0a\u65b9 \u201c\u5b89\u88c5\u8bf4\u660e\u201d \u67e5\u770b\u662f\u5426\u9700\u8981\u8c03\u6574\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u955c\u50cf\u66ff\u6362\uff1a\u672c\u793a\u4f8b\u6682\u65e0\u9700\u6dfb\u52a0\u66ff\u6362\u89c4\u5219")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u7ec4\u4ef6\u5b89\u88c5",src:r(3888).Z,width:"1165",height:"811"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u786e\u5b9a"),"\uff0c\u5f00\u59cb\u5b89\u88c5\uff0c\u81ea\u52a8\u8df3\u8f6c\u5230\u6240\u9009\u79df\u6237\u3001\u9879\u76ee&\u96c6\u7fa4\u7684<\u6211\u5b89\u88c5\u7684>\u5217\u8868\u9875\u9762\uff0c\u67e5\u770b\u5b89\u88c5\u7ed3\u679c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u5237\u65b0\u9875\u9762\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u6240\u6709\u83dc\u5355\uff0c\u53ef\u89c1\uff0c\u81f3\u6b64\u5b8c\u6210\u7ec4\u4ef6\u5b89\u88c5\u3001\u4f7f\u7528\u6d41\u7a0b\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u83dc\u5355",src:r(5748).Z,width:"764",height:"465"})))}b.isMDXComponent=!0},3888:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/componetinstall-48c4f43369628ecd72f0b7552b56aa9a.png"},8953:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/componetmarket-a5736dc9d12730f13b18f808c90694fd.png"},5748:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/menu-cd788e2c64e300e4b712cb8ae3a40e9b.png"}}]);