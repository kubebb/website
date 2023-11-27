"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),k=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=k(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=k(n),c=a,d=u["".concat(i,".").concat(c)]||u[c]||m[c]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var k=2;k<l;k++)o[k]=n[k];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},o="\u603b\u89c8",p={unversionedId:"develop-guid/intro",id:"develop-guid/intro",title:"\u603b\u89c8",description:"KubeBB(Kubernetes Building Blocks)\u662f\u4e00\u79cd\u7531\u5185\u6838\u9a71\u52a8\u7684\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u7ba1\u7406\u5e73\u53f0\uff0c\u96c6\u6210\u5f00\u7bb1\u5373\u7528\u7684\u4e91\u539f\u751f\u5e95\u5ea7\u548c\u4f4e\u7801\u7ec4\u4ef6\u5f00\u53d1\u80fd\u529b,\u6574\u5408\u5b9e\u73b0\u4e91\u539f\u751f\u4e09\u5c42\u7ec4\u4ef6\u6a21\u5f0f\u3002",source:"@site/docs/develop-guid/intro.md",sourceDirName:"develop-guid",slug:"/develop-guid/intro",permalink:"/website/en/docs/develop-guid/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7ec4\u4ef6\u4ed3\u5e93\u7ba1\u7406",permalink:"/website/en/docs/user-guid/repository_anagement"},next:{title:"\u5185\u6838Kit",permalink:"/website/en/docs/category/\u5185\u6838kit"}},i={},k=[{value:"\u5185\u6838Kit",id:"\u5185\u6838kit",level:2},{value:"1. \u58f0\u660e\u5f0f\u7684\u7ec4\u4ef6\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406",id:"1-\u58f0\u660e\u5f0f\u7684\u7ec4\u4ef6\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406",level:3},{value:"\u63d0\u4f9b\u56db\u4e2a\u6838\u5fc3\u7684CRD\u5b9e\u73b0:",id:"\u63d0\u4f9b\u56db\u4e2a\u6838\u5fc3\u7684crd\u5b9e\u73b0",level:4},{value:"\u4e00\u4e2a\u6269\u5c55CRD\u5b9e\u73b0,\u96c6\u6210<strong>Tekton Pipeline</strong>:",id:"\u4e00\u4e2a\u6269\u5c55crd\u5b9e\u73b0\u96c6\u6210tekton-pipeline",level:4},{value:"2. \u5f00\u653e\u7ec4\u4ef6\u5e02\u573a",id:"2-\u5f00\u653e\u7ec4\u4ef6\u5e02\u573a",level:3},{value:"\u5e95\u5ea7Kit",id:"\u5e95\u5ea7kit",level:2},{value:"\u4f4e\u7801 Kit",id:"\u4f4e\u7801-kit",level:2},{value:"\u6280\u672f\u67b6\u6784",id:"\u6280\u672f\u67b6\u6784",level:2},{value:"\u83b7\u53d6\u66f4\u591a\u7ec4\u4ef6",id:"\u83b7\u53d6\u66f4\u591a\u7ec4\u4ef6",level:2}],s={toc:k},u="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,a.kt)("p",null,"KubeBB(Kubernetes Building Blocks)\u662f\u4e00\u79cd\u7531",(0,a.kt)("a",{parentName:"p",href:"./core/intro"},(0,a.kt)("strong",{parentName:"a"},"\u5185\u6838")),"\u9a71\u52a8\u7684\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u7ba1\u7406\u5e73\u53f0\uff0c\u96c6\u6210\u5f00\u7bb1\u5373\u7528\u7684",(0,a.kt)("a",{parentName:"p",href:"./building-base/intro"},(0,a.kt)("strong",{parentName:"a"},"\u4e91\u539f\u751f\u5e95\u5ea7")),"\u548c",(0,a.kt)("a",{parentName:"p",href:"./lowcode-development/intro"},(0,a.kt)("strong",{parentName:"a"},"\u4f4e\u7801\u7ec4\u4ef6\u5f00\u53d1")),"\u80fd\u529b,\u6574\u5408\u5b9e\u73b0",(0,a.kt)("a",{parentName:"p",href:"./lowcode-development/development_pattern"},(0,a.kt)("strong",{parentName:"a"},"\u4e91\u539f\u751f\u4e09\u5c42\u7ec4\u4ef6\u6a21\u5f0f")),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"overview",src:n(8546).Z,width:"943",height:"639"})),(0,a.kt)("p",null,"Kubebb\u63d0\u4f9b\u4e09\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u5957\u4ef6"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./core/intro"},(0,a.kt)("strong",{parentName:"a"},"\u5185\u6838 Kit")))),(0,a.kt)("p",null,"\u63d0\u4f9b",(0,a.kt)("strong",{parentName:"p"},"\u58f0\u660e\u5f0f\u7684\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u7ba1\u7406\u548c\u7ec4\u4ef6\u5e02\u573a"),",\u5e76\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"Tekton\u6d41\u6c34\u7ebf"),"\u5f3a\u5316\u4f4e\u4ee3\u7801\u5e73\u53f0\u7ec4\u4ef6\u4e0e\u5e95\u5ea7\u670d\u52a1\u7684\u96c6\u6210\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./building-base/intro"},(0,a.kt)("strong",{parentName:"a"},"\u5e95\u5ea7 Kit")))),(0,a.kt)("p",null,"\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u4e91\u539f\u751f\u670d\u52a1\u95e8\u6237\uff0c\u5305\u62ec",(0,a.kt)("strong",{parentName:"p"},"\u7528\u6237\u3001OIDC\u8ba4\u8bc1\u3001\u6743\u9650\u3001\u5ba1\u8ba1\u3001\u79df\u6237\u7ba1\u7406\u3001\u95e8\u6237\u670d\u52a1\u7b49\u57fa\u7840\u7ec4\u4ef6\u4ee5\u53ca\u8bc1\u4e66\u7ba1\u7406\u3001Nignx Ingress"),"\u7b49\u96c6\u7fa4\u7ec4\u4ef6\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./lowcode-development/intro"},(0,a.kt)("strong",{parentName:"a"},"\u4f4e\u7801 Kit")))),(0,a.kt)("p",null,"\u4f4e\u7801 Kit \u5373\u4e91\u68af\u4f4e\u4ee3\u7801\u5e73\u53f0\uff0c\u4f9d\u6258 ",(0,a.kt)("a",{parentName:"p",href:"https://lowcode-engine.cn/index"},(0,a.kt)("strong",{parentName:"a"},"Low-Code Engine"))," \u548c\u5177\u6709 Git \u7279\u6027\u7684\u5173\u7cfb\u6570\u636e\u5e93 ",(0,a.kt)("a",{parentName:"p",href:"https://www.dolthub.com/"},(0,a.kt)("strong",{parentName:"a"},"Dolt"))," \u6253\u9020\uff0c\u5e76\u501f\u52a9\u5e95\u5ea7\u95e8\u6237\u7684",(0,a.kt)("strong",{parentName:"p"},"\u83dc\u5355\u548c\u8def\u7531\u8d44\u6e90"),"\u4ee5\u53ca\u5185\u6838\u5957\u4ef6\u7684",(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u7ba1\u7406"),"\u80fd\u529b\uff0c\u5b9e\u73b0\u7ec4\u4ef6\u5f00\u53d1\u3001\u6d4b\u8bd5\u5230\u4e0a\u7ebf\u7684\u5168\u94fe\u8def\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u4e09\u4e2a\u6838\u5fc3\u5957\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb\u53ef\u4ee5\u7c7b\u6bd4\u4e00\u4e0b",(0,a.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7cfb\u7edf"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Kubernetes")," ~ ",(0,a.kt)("strong",{parentName:"li"},"\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Core")," ~ ",(0,a.kt)("strong",{parentName:"li"},"\u8f6f\u4ef6\u5b89\u88c5\u5668")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5e95\u5ea7Kit")," ~ ",(0,a.kt)("strong",{parentName:"li"},"\u64cd\u4f5c\u7cfb\u7edf\u7684\u7cfb\u7edf\u8f6f\u4ef6\uff0c\u5982GUI\u3001\u7528\u6237\u7cfb\u7edf\u3001\u7f51\u7edc\u7b49")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f4e\u7801\u7ec4\u4ef6\u5f00\u53d1Kit")," ~ ",(0,a.kt)("strong",{parentName:"li"},"\u64cd\u4f5c\u7cfb\u7edf\u8f6f\u4ef6\u5f00\u53d1\u5de5\u5177"))),(0,a.kt)("h2",{id:"\u5185\u6838kit"},"\u5185\u6838Kit"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5185\u6838Kit"),"\u7684\u662f\u73b0\u9636\u6bb5\u6211\u4eec\u91cd\u70b9\u5173\u6ce8\u5e76\u7814\u53d1\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubebb/core"},(0,a.kt)("strong",{parentName:"a"},"\u9879\u76ee")),",\u5b8c\u5168\u9075\u5faa\u5f00\u6e90\u9879\u76ee\u7ba1\u7406\u89c4\u8303\u3002\u73b0\u9636\u6bb5\u6211\u4eec\u7684\u76ee\u6807:"),(0,a.kt)("h3",{id:"1-\u58f0\u660e\u5f0f\u7684\u7ec4\u4ef6\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406"},"1. \u58f0\u660e\u5f0f\u7684\u7ec4\u4ef6\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406"),(0,a.kt)("p",null,"\u57fa\u4e8e",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},(0,a.kt)("strong",{parentName:"a"},"Operator Pattern")),"\u5f00\u53d1,\u5b9e\u73b0\u58f0\u660e\u5f0f\u7684\u7ec4\u4ef6\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"component-lifecycle",src:n(7228).Z,width:"752",height:"522"})),(0,a.kt)("h4",{id:"\u63d0\u4f9b\u56db\u4e2a\u6838\u5fc3\u7684crd\u5b9e\u73b0"},"\u63d0\u4f9b\u56db\u4e2a\u6838\u5fc3\u7684CRD\u5b9e\u73b0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./core/concepts/repository"},(0,a.kt)("strong",{parentName:"a"},"Repository\u7ec4\u4ef6\u4ed3\u5e93")))),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e86\u7ec4\u4ef6\u4ed3\u5e93\u7684\u8bbf\u95ee\u4fe1\u606f\u3001\u8f6e\u8be2\u7b56\u7565\u548c\u8fc7\u6ee4\u9009\u9879\uff0c\u4ece\u800c\u5b9e\u73b0\u5468\u671f\u6027\u5730\u5411\u4ed3\u5e93\u670d\u52a1\u83b7\u53d6\u6700\u65b0\u7684\u7ec4\u4ef6\u5217\u8868\u4fe1\u606f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./core/concepts/component"},(0,a.kt)("strong",{parentName:"a"},"Component\u7ec4\u4ef6")))),(0,a.kt)("p",null,"\u8bb0\u5f55\u7ec4\u4ef6\u7684\u57fa\u7840\u63cf\u8ff0\u3001\u7248\u672c\u5217\u8868\u3001\u662f\u5426\u5e9f\u5f03\u7b49\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./core/concepts/componentplan"},(0,a.kt)("strong",{parentName:"a"},"ComponentPlan\u7ec4\u4ef6\u90e8\u7f72")))),(0,a.kt)("p",null,"\u5b9a\u4e49\u7ec4\u4ef6\u5b89\u88c5\u90e8\u7f72\u7684\u624b\u52a8\u6279\u51c6\u3001\u7ec4\u4ef6\u5f15\u7528\u3001\u7248\u672c\u8bbe\u7f6e\u3001\u7c7bhelm\u7684\u914d\u7f6e\u8986\u76d6\u7b56\u7565\uff0c\u4ece\u800c\u5b9e\u73b0\u7ec4\u4ef6\u7684\u53ef\u8ffd\u8e2a\u90e8\u7f72\u3001\u5347\u7ea7\u548c\u56de\u6eda\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./core/concepts/subscription"},(0,a.kt)("strong",{parentName:"a"},"Subscription\u7ec4\u4ef6\u8ba2\u9605")))),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e86\u7528\u6237\u8ba2\u9605\u7ec4\u4ef6\u7248\u672c\u66f4\u65b0"),(0,a.kt)("h4",{id:"\u4e00\u4e2a\u6269\u5c55crd\u5b9e\u73b0\u96c6\u6210tekton-pipeline"},"\u4e00\u4e2a\u6269\u5c55CRD\u5b9e\u73b0,\u96c6\u6210",(0,a.kt)("a",{parentName:"h4",href:"https://tekton.dev/"},(0,a.kt)("strong",{parentName:"a"},"Tekton Pipeline")),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./core/rating"},(0,a.kt)("strong",{parentName:"a"},"Rating\u7ec4\u4ef6\u8bc4\u7ea7")))),(0,a.kt)("h3",{id:"2-\u5f00\u653e\u7ec4\u4ef6\u5e02\u573a"},"2. \u5f00\u653e\u7ec4\u4ef6\u5e02\u573a"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u5e02\u573a\u662f\u5185\u6838\u80fd\u529b\u7684",(0,a.kt)("strong",{parentName:"p"},"\u4ea7\u54c1\u5316"),"\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u9002\u914d",(0,a.kt)("strong",{parentName:"p"},"\u5e95\u5ea7\u670d\u52a1\u7684\u7ec4\u4ef6"),"\u53d1\u5e03\u5230\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93\u4e2d\u4f7f\u7528\uff0c\u6269\u5c55KubeBB\u751f\u6001\u3002"),(0,a.kt)("h2",{id:"\u5e95\u5ea7kit"},"\u5e95\u5ea7Kit"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5e95\u5ea7Kit"),"\u901a\u8fc7\u96c6\u6210\u4ee5\u4e0b\u7ec4\u4ef6\u4ece\u800c\u63d0\u4f9b\u7edf\u4e00\u7684\u8ba4\u8bc1\u4e2d\u5fc3\u548c\u95e8\u6237\u5165\u53e3:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"u4a-component")," \u63d0\u4f9b\u8d26\u53f7\u3001\u8ba4\u8bc1\u3001\u6743\u9650\u53ca\u5ba1\u8ba1\u7ba1\u7406\u529f\u80fd\uff0c\u5305\u542b\u4ee5\u4e0b\u4e3b\u8981\u8d44\u6599"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.nginx.com/nginx-ingress-controller/"},"nginx ingress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cert-manager.io/"},"cert-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dexidp/dex"},"\u57fa\u4e8e dex \u6784\u5efa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/clastix/capsule"},"\u591a\u79df\u6237\u57fa\u4e8e capsule \u6784\u5efa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jetstack/kube-oidc-proxy"},"oidc-proxy \u57fa\u4e8e kube-oidc-proxy \u6784\u5efa"))))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"portal",src:n(3317).Z,width:"1918",height:"848"})),(0,a.kt)("h2",{id:"\u4f4e\u7801-kit"},"\u4f4e\u7801 Kit"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4e\u7801 Kit"),"\u63d0\u4f9b",(0,a.kt)("a",{parentName:"p",href:"./lowcode-development/development_pattern"},(0,a.kt)("strong",{parentName:"a"},"\u4e09\u5c42\u7ec4\u4ef6\u5f00\u53d1\u6a21\u5f0f")),"\u4e2d\u7684",(0,a.kt)("a",{parentName:"p",href:"./lowcode-development/development/frontend"},(0,a.kt)("strong",{parentName:"a"},"\u524d\u7aef\u6a21\u5757\u7814\u53d1")),"\u3001\u51fa\u7801\u80fd\u529b\uff0c\u5e76\u501f\u52a9",(0,a.kt)("strong",{parentName:"p"},"\u5185\u6838 Kit"),"\u5b8c\u6210\u6807\u51c6\u5316\u6253\u5305\u3001\u6d4b\u8bd5\u3001\u53d1\u5e03\uff0c\u540e\u7eed BFF \u5c42\u4e5f\u4f1a\u63a2\u7d22\u4f4e\u7801\u7684\u5f00\u53d1\u6a21\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"lowcode_development",src:n(5155).Z,width:"1644",height:"1118"})),(0,a.kt)("h2",{id:"\u6280\u672f\u67b6\u6784"},"\u6280\u672f\u67b6\u6784"),(0,a.kt)("p",null,"\u5e73\u53f0\u5f00\u53d1\u91c7\u53d6\u524d\u540e\u7aef\u5206\u79bb\uff0c\u4ee5 K8S \u4e3a\u6838\u5fc3\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u9075\u5faa K8S \u7684\u6269\u5c55\u673a\u5236\u53ca API \u89c4\u8303\uff0c\u6574\u4f53\u5f00\u53d1\u67b6\u6784\u7684\u57fa\u672c\u903b\u8f91\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,a.kt)("img",{alt:"\u56fe 2",src:n(326).Z,width:"1089",height:"724"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6240\u6709\u7ec4\u4ef6\u7684\u5f00\u53d1\u3001\u6269\u5c55\u7684\u8ba4\u8bc1\u90fd\u901a\u8fc7\u7edf\u4e00\u8ba4\u8bc1\u4e2d\u5fc3\u8fdb\u884c\u8ba4\u8bc1"),(0,a.kt)("li",{parentName:"ol"},"\u8ba4\u8bc1\u7531\u5fae\u524d\u7aef\u7684\u4e3b\u6846\u67b6 DockApp \u7edf\u4e00\u8fdb\u884c\uff0c\u5176\u4ed6\u5fae\u524d\u7aef\u7684\u6269\u5c55\u4e0d\u9700\u8981\u5355\u72ec\u652f\u6301\u540c\u8ba4\u8bc1\u4e2d\u5fc3\u7684\u5904\u7406"),(0,a.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u67b6\u6784\u4e0a\u6574\u4f53\u53ef\u4ee5\u6309\u7167\u4e09\u5c42\u6765\u770b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u5c42\uff0c\u524d\u7aef\u91c7\u7528\u5fae\u524d\u7aef\u67b6\u6784\uff0c\u5c3d\u91cf\u91c7\u7528\u4f4e\u4ee3\u7801\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u63d0\u9ad8\u4ee3\u7801\u81ea\u52a8\u5316\u751f\u6210\u6bd4\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u5c42\uff0c\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u589e\u52a0 OpenAPI\uff0c\u5f62\u6210\u7edf\u4e00\u7684 BFF \u5c42\uff0c\u5bf9 API \u8fdb\u884c\u805a\u5408\uff0c\u63d0\u4f9b\u524d\u7aef\u6240\u9700\u8981\u7684\u4e1a\u52a1\u573a\u666f\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef\u91c7\u7528 CRD + controller \u7684 Operator \u6a21\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u5f62\u6210\u6570\u636e\u9a71\u52a8\u7684\u6d41\u7a0b\u5f00\u53d1\u6a21\u5f0f")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u5916 API \u4e3b\u8981\u5305\u62ec\u4e24\u90e8\u5206\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ece BFF \u5c42\u63d0\u4f9b\u7684 OpenAPI"),(0,a.kt)("li",{parentName:"ul"},"\u4ece K8S \u5c42\u63d0\u4f9b\u7684\u8d44\u6e90 API")),(0,a.kt)("h2",{id:"\u83b7\u53d6\u66f4\u591a\u7ec4\u4ef6"},"\u83b7\u53d6\u66f4\u591a\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u6d4f\u89c8 ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/%E7%BB%84%E4%BB%B6%E5%B8%82%E5%9C%BA"},"\u7ec4\u4ef6\u5e02\u573a"),"\uff0c\u5b89\u88c5\u66f4\u591a\u9700\u8981\u7684\u670d\u52a1\u7ec4\u4ef6\u5230\u95e8\u6237\u4e2d\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website/en/docs/develop-guid/component-market/kubedashboard"},"kubedashboard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website/en/docs/develop-guid/component-market/kubelogin"},"kubelogin"))))}m.isMDXComponent=!0},326:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/6b8d0cb645caee89c8df55940f5c5b3379940f8714667f8fb2dc780f3442b8f0-8fbc2a4fd6aeaaa23274c226eb811799.png"},7228:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/component-lifecycle.drawio-64de9e9f4e72adad8cdc532e11e9cab8.png"},8546:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kubebb_overview.drawio-28cfaba13e7b70d148500fd399d0dde3.png"},3317:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kubebb_portal-874bc2358e619fc78d9a674231e468b9.png"},5155:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lowcode-development-a62899bc77702b09922121532be59d41.png"}}]);