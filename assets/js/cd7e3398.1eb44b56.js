"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,p(p({ref:t},c),{},{components:n})):a.createElement(k,p({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},p="\u7ec4\u4ef6",o={unversionedId:"core/concepts/component",id:"core/concepts/component",title:"\u7ec4\u4ef6",description:"\u7ec4\u4ef6\u662f\u5c06 chart package \u6620\u5c04\u4e3a\u96c6\u7fa4\u8d44\u6e90\u7684\u4e00\u4e2a\u6982\u5ff5\uff0c\u7ec4\u4ef6\u5b9a\u4e49\u4e86 chart package \u7684\u57fa\u7840\u63cf\u8ff0\u4fe1\u606f\uff0c\u7248\u672c\u4fe1\u606f\u7b49\u3002\u7ec4\u4ef6\u4e00\u822c\u7531\u4ed3\u5e93\u521b\u5efa\u51fa\u6765\uff0c\u65e0\u9700\u624b\u52a8\u521b\u5efa\u3002",source:"@site/docs/core/concepts/component.md",sourceDirName:"core/concepts",slug:"/core/concepts/component",permalink:"/website/docs/core/concepts/component",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4ed3\u5e93",permalink:"/website/docs/core/concepts/repository"},next:{title:"\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212",permalink:"/website/docs/core/concepts/componentplan"}},l={},s=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"CRD \u5b9a\u4e49\u8bf4\u660e",id:"crd-\u5b9a\u4e49\u8bf4\u660e",level:2},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u662f\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"chart package")," \u6620\u5c04\u4e3a\u96c6\u7fa4\u8d44\u6e90\u7684\u4e00\u4e2a\u6982\u5ff5\uff0c\u7ec4\u4ef6\u5b9a\u4e49\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"chart package")," \u7684\u57fa\u7840\u63cf\u8ff0\u4fe1\u606f\uff0c\u7248\u672c\u4fe1\u606f\u7b49\u3002\u7ec4\u4ef6\u4e00\u822c\u7531\u4ed3\u5e93\u521b\u5efa\u51fa\u6765\uff0c\u65e0\u9700\u624b\u52a8\u521b\u5efa\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u624b\u52a8\u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6\u793a\u4f8b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u51c6\u5907\u7ec4\u4ef6 component.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: Component\nmetadata:\n  labels:\n    kubebb.component.repository: repository-bitnami-sample\n  name: repository-bitnami-sample.wordpress\n  namespace: kubebb-system\n  ownerReferences:\n    - apiVersion: core.kubebb.k8s.com.cn/v1alpha1\n      kind: Repository\n      name: repository-bitnami-sample\n      uid: a5b8b73d-47a5-40e1-9839-7aebf8a25618\nspec: {}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f component.yaml\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u51c6\u5907\u66f4\u65b0\u7ec4\u4ef6 status.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'status:\n  description: WordPress is the world\'s most popular blogging and content management\n    platform. Powerful yet simple, everyone from students to global corporations use\n    it to build beautiful, functional websites.\n  home: https://bitnami.com\n  icon: https://bitnami.com/assets/stacks/wordpress/img/wordpress-stack-220x234.png\n  keywords:\n    - application\n    - blog:\n    - cms\n    - http\n    - php\n    - web\n    - wordpress\n  maintainers:\n    - name: VMware, Inc.\n      url: https://github.com/bitnami/charts\n    - name: Bitnami\n      url: https://github.com/bitnami/charts\n  name: wordpress\n  repository:\n    apiVersion: core.kubebb.k8s.com.cn/v1alpha1\n    kind: Repository\n    name: repository-bitnami-sample\n    namespace: kubebb-system\n    uid: a5b8b73d-47a5-40e1-9839-7aebf8a25618\n  sources:\n    - https://github.com/bitnami/charts/tree/main/bitnami/wordpress\n  versions:\n    - appVersion: 6.2.2\n      createdAt: "2023-06-06T19:08:58Z"\n      deprecated: false\n      digest: 47096ed3f0a385e5830e90c75f443b7be107d7fa6df6aa869e7deb60b6cb6f8f\n      updatedAt: "2023-06-08T05:34:00Z"\n      version: 16.1.13\n    - appVersion: 6.2.2\n      createdAt: "2023-06-05T12:52:45Z"\n      deprecated: false\n      digest: 2005819fa8a08dea1f73585bcc4a37d83d3ef4f787c3927b5f51d2b5ae826dcb\n      updatedAt: "2023-06-08T05:34:00Z"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -nkubebb-system patch component.core.kubebb.k8s.com.cn repository-bitnami-sample.wordpress --type=merge --subresource status --patch-file status.yaml\n")),(0,r.kt)("h2",{id:"crd-\u5b9a\u4e49\u8bf4\u660e"},"CRD \u5b9a\u4e49\u8bf4\u660e"),(0,r.kt)("p",null,"CRD \u7684\u4ee3\u7801\u5b9a\u4e49\u4f4d\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubebb/core/blob/main/api/v1alpha1/component_types.go"},"ComponentTypes"),"\u3002\u7ec4\u4ef6\u7684\u4fe1\u606f\u90fd\u5b9a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," \u4e2d\uff0c \u63a5\u4e0b\u6765\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u6bcf\u4e2a\u5b57\u6bb5\u7684\u542b\u4e49\u53ca\u5176\u4f5c\u7528\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status.name")),(0,r.kt)("p",{parentName:"li"},"\u8be5\u5b57\u6bb5\u7528\u6765\u4fdd\u5b58 ",(0,r.kt)("inlineCode",{parentName:"p"},"chart package")," \u7684\u540d\u5b57\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status.versions")),(0,r.kt)("p",{parentName:"li"},"\u8be5\u5b57\u6bb5\u662f\u6570\u7ec4\uff0c\u7528\u6765\u4fdd\u5b58 ",(0,r.kt)("inlineCode",{parentName:"p"},"chart package")," \u7684\u591a\u4e2a\u7248\u672c\u3002\u6bcf\u4e2a\u7248\u672c\u5305\u542b\u7684\u4fe1\u606f\u5982\u4e0b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status.versions[index].appVersion")," \u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"li"},"chart packge")," \u91cc\u9762\u7684\u5e94\u7528\u7684\u7248\u672c\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status.versions[index].createdAt")," \u521b\u5efa\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status.versions[index].updatedAt")," \u66f4\u65b0\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status.versions[index].deprecated")," \u5f53\u524d\u7248\u672c\u662f\u5426\u5e9f\u5f03"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status.versions[index].version")," ",(0,r.kt)("inlineCode",{parentName:"li"},"chart package")," \u7684\u7248\u672c\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status.versions[index].digest")," \u6570\u5b57\u7b7e\u540d"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status.description")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"chart package")," \u7684\u63cf\u8ff0\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status.maintainers")),(0,r.kt)("p",{parentName:"li"},"\u8be5\u5b57\u6bb5\u662f\u6570\u7ec4\u7c7b\u578b\uff0c\u6bcf\u4e00\u9879\u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"chart package")," \u7684\u7ef4\u62a4\u8005\u3002\u6bcf\u4e00\u9879\u7684\u5305\u542b\u7684\u4fe1\u606f\u5982\u4e0b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status.maintainers[index].name")," \u7ef4\u62a4\u8005\u540d\u5b57"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status.maintainers[index].email")," \u7ef4\u62a4\u8005\u7684\u90ae\u7bb1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status.maintainers[index].url")," \u7ef4\u62a4\u8005\u7684\u7f51\u7ad9"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status.home")),(0,r.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u7684\u5b98\u7f51\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status.soureces")),(0,r.kt)("p",{parentName:"li"},"\u8be5\u5b57\u6bb5\u662f\u5b57\u7b26\u4e32\u6570\u7ec4\u7c7b\u578b\uff0c\u5b9a\u4e49\u7ec4\u4ef6\u4ee3\u7801\u4ed3\u5e93\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status.keywords")),(0,r.kt)("p",{parentName:"li"},"\u8be5\u5b57\u6bb5\u662f\u5b57\u7b26\u4e32\u6570\u7ec4\u7c7b\u578b\uff0c\u5b9a\u4e49\u4e0e\u8be5\u7ec4\u4ef6\u5173\u8054\u7684\u5173\u952e\u8bcd\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status.icon")),(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u8be5\u7ec4\u4ef6\u7684\u56fe\u6807")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status.deprecated")),(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u5f53\u524d\u7ec4\u4ef6\u662f\u5426\u5e9f\u5f03"))),(0,r.kt)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u4e5f\u5b9e\u73b0\u4e3a Kubernetes Operator\uff0c\u4e3b\u8981\u529f\u80fd\u5c31\u662f\u5f53\u7ec4\u4ef6\u521b\u5efa\uff0c\u66f4\u65b0\u7ed9\u6bcf\u4e2a\u7ec4\u4ef6\u6dfb\u52a0 label ",(0,r.kt)("inlineCode",{parentName:"p"},"kubebb.component.repository=<repository-name>"),"\uff0c\u65b9\u4fbf\u641c\u7d22\u3002"))}u.isMDXComponent=!0}}]);