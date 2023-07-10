"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,m=s["".concat(l,".").concat(f)]||s[f]||b[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="\u603b\u89c8",c={unversionedId:"core/overview",id:"core/overview",title:"\u603b\u89c8",description:"KubeBB Core(\u5185\u6838)\u57fa\u4e8ekubernetes operator\u6a21\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u63d0\u4f9b\u5b8c\u6574\u7684\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u7ba1\u7406\u3001\u7ec4\u4ef6\u8ba2\u9605\u548c\u81ea\u52a8\u5316\u90e8\u7f72\u80fd\u529b\u3002",source:"@site/docs/core/overview.md",sourceDirName:"core",slug:"/core/overview",permalink:"/website/en/docs/core/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5185\u6838",permalink:"/website/en/docs/category/\u5185\u6838"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/website/en/docs/core/get_started"}},l={},p=[{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"\u8def\u7ebf\u56fe",id:"\u8def\u7ebf\u56fe",level:2}],u={toc:p},s="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubebb/core"},"KubeBB Core(\u5185\u6838)"),"\u57fa\u4e8e",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},"kubernetes operator"),"\u6a21\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u63d0\u4f9b\u5b8c\u6574\u7684\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u7ba1\u7406\u3001\u7ec4\u4ef6\u8ba2\u9605\u548c\u81ea\u52a8\u5316\u90e8\u7f72\u80fd\u529b\u3002"),(0,o.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,o.kt)("p",null,"KubeBB Core\u67b6\u6784\u56fe\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"KubeBB Core\u67b6\u6784\u56fe",src:r(7233).Z,width:"1041",height:"731"})),(0,o.kt)("p",null,"KubeBB Core\u901a\u8fc7operator\u5f00\u53d1\u6a21\u5f0f\u5b9e\u73b0\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u6838\u5fc3\u529f\u80fd\u6a21\u5757\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u4ed3\u5e93\u670d\u52a1\uff0c\u7528\u4e8e\u5b58\u50a8\u4e0d\u540c\u7248\u672c\u7ec4\u4ef6\u7684\u955c\u50cf\u548c\u914d\u7f6e\u6587\u4ef6\uff0c\u9002\u914d\u901a\u7528\u7684Helm Repo\u3001ChartMuseum\u3001Harbor\u7b49\u4ed3\u5e93\u670d\u52a1\uff0c\u5e76\u652f\u6301\u4e30\u5bcc\u7684\u7ec4\u4ef6\u6761\u4ef6\u8fc7\u6ee4"),(0,o.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\u8f6e\u8be2\u670d\u52a1\uff0c\u7528\u4e8e\u8f6e\u8be2\u7ec4\u4ef6\u4ed3\u5e93\uff0c\u83b7\u53d6\u6700\u65b0\u7684\u7ec4\u4ef6\u7248\u672c\u4fe1\u606f\uff0c\u5e76\u5b9e\u65f6\u540c\u6b65\u66f4\u65b0\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u8ba2\u9605\u670d\u52a1\uff0c\u7528\u4e8e\u8ba2\u9605\u7ec4\u4ef6\u66f4\u65b0\uff0c\u652f\u6301\u624b\u52a8\u3001\u81ea\u52a8\u4e24\u79cd\u8ba2\u9605\u6a21\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u90e8\u7f72\u670d\u52a1\uff0c\u901a\u8fc7\u7ec4\u4ef6\u90e8\u7f72\u6a21\u7248\u7684\u5b9e\u65f6\u89e3\u6790\u548c\u81ea\u5b9a\u4e49\u53c2\u6570\u7684\u6ce8\u5165\uff0c\u5b9e\u73b0\u7ec4\u4ef6\u7684\u81ea\u52a8\u5316\u90e8\u7f72")),(0,o.kt)("h2",{id:"\u8def\u7ebf\u56fe"},"\u8def\u7ebf\u56fe"),(0,o.kt)("p",null,"\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubebb/design#%E8%B7%AF%E7%BA%BF%E5%9B%BE"},"\u8def\u7ebf\u56fe")))}b.isMDXComponent=!0},7233:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/core-architecture-82ae9e725814e9eb2818f805067a7d87.png"}}]);