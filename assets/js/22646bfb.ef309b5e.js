"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},i="\u4ecb\u7ecd",o={unversionedId:"lowcode-development/intro",id:"lowcode-development/intro",title:"\u4ecb\u7ecd",description:"\u4f4e\u7801 Kit \u5373\u4e91\u68af\u4f4e\u7801\u5e73\u53f0\uff08\u4ee5\u4e0b\u7b80\u79f0\u201c\u4e91\u68af\u201d\uff09",source:"@site/docs/lowcode-development/intro.md",sourceDirName:"lowcode-development",slug:"/lowcode-development/intro",permalink:"/website/docs/lowcode-development/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4f4e\u7801 Kit",permalink:"/website/docs/category/\u4f4e\u7801-kit"},next:{title:"\u5f00\u53d1\u6a21\u5f0f",permalink:"/website/docs/lowcode-development/development_pattern"}},p={},s=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u67b6\u6784\u6982\u8ff0",id:"\u67b6\u6784\u6982\u8ff0",level:2},{value:"\u7279\u70b9\u548c\u4f18\u52bf",id:"\u7279\u70b9\u548c\u4f18\u52bf",level:2},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4f4e\u7801 Kit \u5373\u4e91\u68af\u4f4e\u7801\u5e73\u53f0\uff08\u4ee5\u4e0b\u7b80\u79f0\u201c\u4e91\u68af\u201d\uff09")),(0,a.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,a.kt)("p",null,"\u4e91\u68af\u4f9d\u6258 ",(0,a.kt)("a",{parentName:"p",href:"https://lowcode-engine.cn/index"},"Low-Code Engine"),"\uff08\u4f4e\u4ee3\u7801\u5f15\u64ce\uff09\u548c\u5177\u6709 Git \u7279\u6027\u7684\u5173\u7cfb\u6570\u636e\u5e93 ",(0,a.kt)("a",{parentName:"p",href:"https://www.dolthub.com/"},"Dolt")," \u6253\u9020\uff0c\u76ee\u6807\u662f\u5b9e\u73b0\u4ece\u5f00\u53d1\u3001\u6d4b\u8bd5\u5230\u4e0a\u7ebf\u7684\u5168\u94fe\u8def\u4f4e\u7801\u5316\u3002\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u4e91\u68af\u8fdb\u884c\u7ec4\u4ef6\u3001\u9875\u9762\u7684\u53ef\u89c6\u5316\u642d\u5efa\uff0c\u4e5f\u53ef\u4ee5\u50cf\u4f7f\u7528 Git \u4e00\u6837\u5bf9\u4f4e\u4ee3\u7801\u5e94\u7528\u8fdb\u884c\u534f\u4f5c\u5f00\u53d1\u548c\u7248\u672c\u7ba1\u7406\u3002"),(0,a.kt)("h2",{id:"\u67b6\u6784\u6982\u8ff0"},"\u67b6\u6784\u6982\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4e91\u68af\u603b\u4f53\u67b6\u6784\u56fe",src:n(268).Z,width:"1146",height:"540"})),(0,a.kt)("p",null,"\u4e91\u68af\u603b\u4f53\u67b6\u6784\u5206\u4e3a\u4e09\u5c42\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5c42\uff1a\u6570\u636e\u5e93\u91c7\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://www.dolthub.com/"},"Dolt"),"\uff0cDolt \u53ef\u4ee5\u50cf Git \u4e00\u6837\u7ba1\u7406\u6570\u636e\uff0c\u8fd9\u6837\u4e91\u68af\u5c31\u62e5\u6709\u4e86\u534f\u4f5c\u548c\u7248\u672c\u7ba1\u7406\u80fd\u529b\uff0c\u7528\u6237\u4f7f\u7528\u4e91\u68af\u642d\u5efa\u5e94\u7528\u8ddf\u4f7f\u7528 Git \u5f00\u53d1\u5e94\u7528\u4e00\u6837\uff0c\u53ef\u4ee5\u8fdb\u884c\u591a\u4eba\u534f\u4f5c\u548c\u7248\u672c\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef yunti-server\uff1a\u540e\u7aef\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"li",href:"https://nestjs.com/"},"Nest.js")," \u5f00\u53d1\uff0c\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"li",href:"https://typeorm.io/"},"TypeOrm")," \u4e0e Dolt \u6570\u636e\u5e93\u8fdb\u884c\u4ea4\u4e92\uff0c\u63d0\u4f9b GraphQL API \u4f9b\u524d\u7aef\u8c03\u7528\uff0c\u4e3a\u4e86\u65b9\u4fbf\u524d\u7aef\u5bf9\u63a5 API\uff0c\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"li",href:"https://the-guild.dev/graphql/codegen"},"GraphQL code generator")," \u5de5\u5177\u751f\u6210\u4e86 API SDK \u5e76\u53d1\u5e03\u6210 npm \u5305\u4f9b\u524d\u7aef\u76f4\u63a5\u4f7f\u7528\uff0c\u964d\u4f4e\u4e86 API \u5bf9\u63a5\u6210\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u524d\u7aef yunti-console\uff1a\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"li",href:"https://umijs.org/"},"Umi.js")," \u5f00\u53d1\uff0c\u4e3b\u8981\u7531\u4ee5\u4e0b 2 \u4e2a\u6a21\u5757\u7ec4\u6210\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f4e\u4ee3\u7801\u7f16\u8f91\u5668\uff1a\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"li",href:"https://lowcode-engine.cn/index"},"Low-Code Engine")," \u4f4e\u4ee3\u7801\u5f15\u64ce\u6269\u5c55\u800c\u6765\uff0c\u76ee\u524d\u6709\u9875\u9762\u7f16\u8f91\u5668\u548c\u7ec4\u4ef6\u7f16\u8f91\u5668\uff0c\u540e\u671f\u8fd8\u53ef\u4ee5\u6269\u5c55"),(0,a.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u7ba1\u7406\u6a21\u5757\uff1a\u5bf9\u5e94\u7528\u3001\u7ec4\u4ef6\u3001\u533a\u5757\u7b49\u8fdb\u884c\u589e\u5220\u6539\u67e5")))),(0,a.kt)("p",null,"\u8fd8\u6709\u4e00\u4e9b\u57fa\u7840\u8bbe\u65bd\uff0c\u67b6\u6784\u56fe\u4e2d\u6ca1\u6709\u4f53\u73b0\uff0c\u4f8b\u5982\u79c1\u6709 npm \u4ed3\u5e93\u53ca\u79c1\u6709 unpkg \u7b49\u3002"),(0,a.kt)("h2",{id:"\u7279\u70b9\u548c\u4f18\u52bf"},"\u7279\u70b9\u548c\u4f18\u52bf"),(0,a.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u67b6\u6784\uff0c\u4e91\u68af\u5177\u6709\u4ee5\u4e0b\u6280\u672f\u7279\u70b9\u548c\u4f18\u52bf\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u53ef\u89c6\u5316\u7ec4\u4ef6\u3001\u9875\u9762\u642d\u5efa"),"\uff1a\u901a\u8fc7\u7b80\u5355\u7684\u62d6\u62fd\u5b8c\u6210\u5e94\u7528\u9875\u9762\u5f00\u53d1\uff0c\u5bf9\u524d\u7aef\u6280\u80fd\u6ca1\u6709\u8981\u6c42\u6216\u4e0d\u9700\u8981\u7279\u522b\u4e13\u4e1a\u7684\u4e86\u89e3\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6807\u51c6\u5316\u534f\u8bae"),"\uff1a\u6807\u51c6\u5316\u534f\u8bae\u662f\u4f4e\u4ee3\u7801\u751f\u6001\u7684\u57fa\u7840\uff0c\u662f\u6253\u7834\u7269\u6599\u5b64\u5c9b\u7684\u5173\u952e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lowcode-engine.cn/site/docs/specs/lowcode-spec"},"\u300a\u4f4e\u4ee3\u7801\u5f15\u64ce\u642d\u5efa\u534f\u8bae\u89c4\u8303\u300b"),"\uff1a\u63cf\u8ff0\u6e90\u7801\u7269\u6599\u89c4\u8303\u548c\u642d\u5efa\u7269\u6599\u89c4\u8303"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lowcode-engine.cn/site/docs/specs/material-spec"},"\u300a\u4f4e\u4ee3\u7801\u5f15\u64ce\u7269\u6599\u534f\u8bae\u89c4\u8303\u300b"),"\uff1a\u63cf\u8ff0\u4f4e\u4ee3\u7801\u642d\u5efa\u5e73\u53f0\u4ea7\u7269\u7684 Schema \u7ed3\u6784"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lowcode-engine.cn/site/docs/specs/assets-spec"},"\u300a\u4f4e\u4ee3\u7801\u5f15\u64ce\u8d44\u4ea7\u5305\u534f\u8bae\u89c4\u8303\u300b"),"\uff1a\u63cf\u8ff0\u4f4e\u4ee3\u7801\u5e73\u53f0\u8d44\u4ea7\u5305\u7ed3\u6784"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8bbe\u8ba1\u5668\u6613\u4e8e\u6269\u5c55"),"\uff1a\u7269\u6599\u3001\u63d2\u4ef6\u3001\u8bbe\u7f6e\u5668\u7b49\u90fd\u53ef\u4ee5\u6269\u5c55"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f18\u79c0\u7684\u51fa\u7801\u80fd\u529b"),"\uff1a\u5b9a\u5236\u5316\u7684\u51fa\u7801\u63d2\u4ef6\uff0c\u53ef\u5c06\u4f4e\u7801\u5e94\u7528\u7684 schema \u8f6c\u5316\u4e3a\u4ee3\u7801\u8f93\u51fa\uff0c\u8f93\u51fa\u7684\u4ee3\u7801\u53ef\u8bfb\u6027\u5f3a\uff0c\u53ef\u4f5c\u4e3a\u57fa\u7840\u5e94\u7528\u505a\u5b9a\u5236\u6269\u5c55\u5f00\u53d1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5b8c\u5907\u7684\u534f\u4f5c\u548c\u7248\u672c\u7ba1\u7406\u529f\u80fd\uff1a"),"\u652f\u6301\u50cf\u4f7f\u7528 Git \u4e00\u6837\u5bf9\u4f4e\u4ee3\u7801\u5e94\u7528\u8fdb\u884c\u534f\u4f5c\u642d\u5efa\u548c\u7248\u672c\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u201cServerless\u201d"),"\uff1a\u65e0\u9700\u5173\u5fc3\u670d\u52a1\u5668\u3001\u6570\u636e\u5e93\u7b49\u5e95\u5c42\u8fd0\u7ef4\u3001\u8ba1\u7b97\u8bbe\u65bd\u8bbe\u5907\u3001\u7f51\u7edc\u7b49\u7b49\u590d\u6742\u6280\u672f\u6982\u5ff5\uff0c\u5177\u5907\u5b89\u5168\u3001\u6027\u80fd\u7684\u7edf\u4e00\u89e3\u51b3\u65b9\u6848\uff0c\u5f00\u53d1\u8005\u53ea\u9700\u8981\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u672c\u8eab\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u53ef\u89c6\u5316\u670d\u52a1\u4e0e\u6570\u636e\u5f00\u653e\u3001\u96c6\u6210"),"\uff1a\u5177\u5907\u4e0e\u5176\u4ed6\u7cfb\u7edf\u4e92\u8054\u4e92\u901a\u7684\u914d\u7f6e\uff1b")),(0,a.kt)("h2",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BFF \u5c42\u4f4e\u7801\u5316\u63a2\u7d22",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u89c6\u5316\u6a21\u578b\u8bbe\u8ba1\uff1a\u4e0e\u4e1a\u52a1\u76f8\u5173\u7684\u6570\u636e\u5b58\u50a8\u53d8\u5f97\u66f4\u5bb9\u6613\u7406\u89e3\uff0c\u751a\u81f3\u5927\u591a\u6570\u7b80\u5355\u573a\u666f\u53ef\u4ee5\u505a\u5230\u8868\u5355\u5373\u6a21\u578b\uff0c\u6a21\u578b\u5b57\u6bb5\u7684\u7c7b\u578b\u66f4\u52a0\u4e1a\u52a1\u5316\uff1b"),(0,a.kt)("li",{parentName:"ul"},"API \u7f16\u6392\uff1a\u7f16\u6392 OpenAPI \u7b49\u4e3a BFF \u5c42\u63d0\u4f9b\u6570\u636e\u6e90"))),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u5316\u6d4b\u8bd5\uff1a\u63a2\u7d22\u57fa\u4e8e\u4f4e\u7801\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\u65b9\u6848"),(0,a.kt)("li",{parentName:"ul"},"AIGC \u8f85\u52a9\u5de5\u5177\uff1a\u63a2\u7d22 AIGC \u5728\u4f4e\u7801\u5e73\u53f0\u7684\u5e94\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u6269\u5c55\u66f4\u591a\u7684\u7f16\u8f91\u5668",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u89c6\u5316\u6d41\u7a0b\u8bbe\u8ba1\uff0c\u4e0d\u7ba1\u662f\u4e1a\u52a1\u6d41\u7a0b\u8fd8\u662f\u5ba1\u6279\u6d41\u7a0b\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u70b9\u7ebf\u8fde\u63a5\u6765\u8fdb\u884c\u914d\u7f6e\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u89c6\u5316\u62a5\u8868\u53ca\u6570\u636e\u5206\u6790\uff1a BI \u6570\u636e\u5206\u6790\u80fd\u529b\u6210\u4e3a\u6807\u914d\uff0c\u968f\u65f6\u968f\u5730\u901a\u8fc7\u62d6\u62fd\u9009\u62e9\u6765\u5b9a\u4e49\u81ea\u5b9a\u4e49\u5206\u6790\u62a5\u8868\uff1b"))),(0,a.kt)("li",{parentName:"ul"},"\u6743\u9650\u3001\u89d2\u8272\u8bbe\u7f6e\u6807\u51c6\u5316\u548c\u4e1a\u52a1\u5316\uff1a\u901a\u8fc7\u7b56\u7565\u89c4\u5219\u914d\u7f6e\u6765\u5c06\u6570\u636e\u3001\u64cd\u4f5c\u7684\u6743\u9650\u8fdb\u884c\u7cbe\u7ec6\u5316\u7ba1\u7406\uff1b")))}u.isMDXComponent=!0},268:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/yunti_arch-b78d802506579d6930bfd849bb573389.svg"}}]);