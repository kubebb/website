"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2598],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=c(t),d=r,b=k["".concat(p,".").concat(d)]||k[d]||u[d]||o;return t?a.createElement(b,l(l({ref:n},s),{},{components:t})):a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[k]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1},l="\u5feb\u901f\u90e8\u7f72",i={unversionedId:"develop-guide/core/rating/enablerating",id:"develop-guide/core/rating/enablerating",title:"\u5feb\u901f\u90e8\u7f72",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRating\u7ec4\u4ef6\u8bc4\u7ea7\u529f\u80fd\u662f\u5173\u95ed\u7684\uff0c\u9700\u8981\u624b\u52a8\u542f\u7528\u3002\u6211\u4eec\u5efa\u8bae\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u542f\u7528Rating:",source:"@site/docs/develop-guide/core/rating/enablerating.md",sourceDirName:"develop-guide/core/rating",slug:"/develop-guide/core/rating/enablerating",permalink:"/website/en/docs/develop-guide/core/rating/enablerating",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7ec4\u4ef6\u8bc4\u6d4b",permalink:"/website/en/docs/category/\u7ec4\u4ef6\u8bc4\u6d4b"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/website/en/docs/develop-guide/core/rating/"}},p={},c=[{value:"1.\u5b89\u88c5kubebb core",id:"1\u5b89\u88c5kubebb-core",level:2},{value:"2. \u521b\u5efa\u9700\u8981\u7684\u547d\u540d\u7a7a\u95f4 <code>kubebb-addons</code>, <code>tekton</code>",id:"2-\u521b\u5efa\u9700\u8981\u7684\u547d\u540d\u7a7a\u95f4-kubebb-addons-tekton",level:2},{value:"3. \u5b89\u88c5Tekton\u6d41\u6c34\u7ebf",id:"3-\u5b89\u88c5tekton\u6d41\u6c34\u7ebf",level:2},{value:"4. \u5b89\u88c5Arcadia AI\u7ec4\u4ef6",id:"4-\u5b89\u88c5arcadia-ai\u7ec4\u4ef6",level:2},{value:"5. \u66f4\u65b0\u5185\u6838",id:"5-\u66f4\u65b0\u5185\u6838",level:2},{value:"6 \u521b\u5efa\u7cfb\u7edf LLM",id:"6-\u521b\u5efa\u7cfb\u7edf-llm",level:2}],s={toc:c},k="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(k,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5feb\u901f\u90e8\u7f72"},"\u5feb\u901f\u90e8\u7f72"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRating\u7ec4\u4ef6\u8bc4\u7ea7\u529f\u80fd\u662f\u5173\u95ed\u7684\uff0c\u9700\u8981\u624b\u52a8\u542f\u7528\u3002\u6211\u4eec\u5efa\u8bae\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u542f\u7528Rating:"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6\u4e86\u89e3\u66f4\u591aRating\u6709\u5173\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/website/en/docs/develop-guide/core/rating/"},"\u7ec4\u4ef6\u8bc4\u6d4b\u8bbe\u8ba1"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"/website/en/docs/develop-guide/core/concepts/rating"},"Rating CRD\u5b9a\u4e49"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rating"),"\u4f9d\u8d56\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u5206\u522b\u662f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tekton"),"\u63d0\u4f9b\u6d41\u6c34\u7ebf\u80fd\u529b,\u5b8c\u6210\u7ec4\u4ef6\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"KubeAGI Arcadia"),"\u63d0\u4f9bAI\u6570\u636e\u5206\u6790\u80fd\u529b\uff0c\u5b8c\u6574\u7ec4\u4ef6\u7684AI\u8bc4\u6d4b")),(0,r.kt)("p",null,"\u56e0\u6b64, \u9700\u8981\u5148\u5b89\u88c5\u597dTekton\u548cArcadia, \u624d\u80fd\u4f7f\u7528Rating\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"1\u5b89\u88c5kubebb-core"},"1.\u5b89\u88c5kubebb core"),(0,r.kt)("p",null,"\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/website/en/docs/quick-start/quick-install"},"\u5b89\u88c5\u5185\u6838"),"\u5b8c\u6210\u5185\u6838(\u672a\u542f\u7528Rating)\u5b89\u88c5\u3002"),(0,r.kt)("h2",{id:"2-\u521b\u5efa\u9700\u8981\u7684\u547d\u540d\u7a7a\u95f4-kubebb-addons-tekton"},"2. \u521b\u5efa\u9700\u8981\u7684\u547d\u540d\u7a7a\u95f4 ",(0,r.kt)("inlineCode",{parentName:"h2"},"kubebb-addons"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"tekton")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"tekton \u4f1a\u5b89\u88c5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"tekton")," \u7684\u547d\u540d\u7a7a\u95f4\u4e0b\u3002\n\u540e\u7eed\u5b89\u88c5\u7684\u7ec4\u4ef6\u90fd\u4f1a\u6dfb\u52a0\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"kubebb-addons"),"\u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u4f5c\u4e3akubebb\u7684\u6269\u5c55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns kubebb-addons tekton\n")),(0,r.kt)("h2",{id:"3-\u5b89\u88c5tekton\u6d41\u6c34\u7ebf"},"3. \u5b89\u88c5Tekton\u6d41\u6c34\u7ebf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# install-tekton.yaml\napiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: ComponentPlan\nmetadata:\n  name: tekton\n  namespace: tekton\nspec:\n  approved: true\n  name: tekton # similar to helm release name\n  version: 0.64.0\n  component:\n    name: kubebb.tekton-operator\n    namespace: kubebb-system\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubebb core")," \u5185\u6838\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u7cfb\u7edf\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository"),", \u76f4\u63a5\u5229\u7528\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository")," \u6765\u521b\u5efa tekton\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u524d\u9700\u8981\u786e\u4fdd\u7ec4\u4ef6kubebb.tekton-operator\u5df2\u7ecf\u540c\u6b65\u5b8c\u6210")),(0,r.kt)("p",null,"\u547d\u4ee4\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f install-tekton.yaml\n")),(0,r.kt)("p",null,"\u67e5\u770b\u5b89\u88c5\u72b6\u6001:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -ntekton get pods --watch\n")),(0,r.kt)("p",null,"\u5982\u679c\u5b89\u88c5\u5b8c\u6210,\u8f93\u51fa\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"root@macbookpro:~/workspace/test-arcadia-helm/rating# kubectl get po -ntekton \nNAME                                              READY   STATUS    RESTARTS   AGE\ntekton-tekton-operator-7754767b9f-hjzjq           2/2     Running   0          2m35s\ntekton-tekton-operator-webhook-66c8448c8b-qmzz7   1/1     Running   0          2m35s\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u68c0\u67e5 tekton \u5b89\u88c5\u7684 CRD."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"root@macbookpro:~/workspace/test-arcadia-helm/rating# kubectl get crd|grep tekton\nclustertasks.tekton.dev                    2024-01-10T06:41:24Z\ncustomruns.tekton.dev                      2024-01-10T06:41:25Z\npipelineresources.tekton.dev               2024-01-10T06:41:25Z\npipelineruns.tekton.dev                    2024-01-10T06:41:25Z\npipelines.tekton.dev                       2024-01-10T06:41:25Z\nresolutionrequests.resolution.tekton.dev   2024-01-10T06:41:25Z\nruns.tekton.dev                            2024-01-10T06:41:25Z\ntaskruns.tekton.dev                        2024-01-10T06:41:25Z\ntasks.tekton.dev                           2024-01-10T06:41:25Z\ntektonchains.operator.tekton.dev           2024-01-10T06:41:19Z\ntektonconfigs.operator.tekton.dev          2024-01-10T06:41:19Z\ntektondashboards.operator.tekton.dev       2024-01-10T06:41:19Z\ntektonhubs.operator.tekton.dev             2024-01-10T06:41:19Z\ntektoninstallersets.operator.tekton.dev    2024-01-10T06:41:19Z\ntektonpipelines.operator.tekton.dev        2024-01-10T06:41:19Z\ntektonresults.operator.tekton.dev          2024-01-10T06:41:19Z\ntektontriggers.operator.tekton.dev         2024-01-10T06:41:19Z\n")),(0,r.kt)("p",null,"\u5982\u679c\u957f\u65f6\u95f4\u5b89\u88c5\u672a\u5b8c\u6210,\u53ef\u67e5\u770b\u5bf9\u5e94\u7684Componentplan\u8d44\u6e90\u7684\u72b6\u6001\u3002"),(0,r.kt)("h2",{id:"4-\u5b89\u88c5arcadia-ai\u7ec4\u4ef6"},"4. \u5b89\u88c5Arcadia AI\u7ec4\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Arcadia\u7ec4\u4ef6\u4f4d\u4e8e\u53e6\u5916\u7684\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeagi/arcadia/tree/main/charts"},"\u7ec4\u4ef6\u4ed3\u5e93"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubebb/components/blob/main/repos/repository_arcadia.yaml"},"arcadia\u7ec4\u4ef6\u4ed3\u5e93"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/repos/repository_arcadia.yaml\n")),(0,r.kt)("p",null,"\u6210\u529f\u540e\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u4ed3\u5e93\u4e2d\u7684\u7ec4\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get components -nkubebb-system -l kubebb.component.repository=arcadia\n")),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u8f93\u5165\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f kubectl get components -nkubebb-system -l kubebb.component.repository=arcadia\nNAME                 AGE\narcadia.arcadia      32s\narcadia.jupyterlab   32s\narcadia.llms         32s\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5Arcadia AI\u7ec4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# arcadia-sub.yaml\napiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: Subscription\nmetadata:\n  name: arcadia\n  namespace: kubebb-system\nspec:\n  component:\n    name: arcadia.arcadia\n    namespace: kubebb-system\n  componentPlanInstallMethod: auto\n  name: arcadia\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f arcadia-sub.yaml\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5b89\u88c5\u72b6\u6001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get po -nkubebb-system \n\nNAME                                   READY   STATUS              RESTARTS   AGE\narcadia-apiserver-559974c74b-r8jrp     0/1     ContainerCreating   0          5m5s\narcadia-chromadb-0                     0/1     Pending             0          5m4s\narcadia-controller-85cbddc8fd-bbh4q    1/1     Running             0          5m5s\narcadia-dataprocess-57b99c84bb-sgr9f   0/1     ContainerCreating   0          5m5s\narcadia-fastchat-6b4b454d69-mqjsl      0/2     ContainerCreating   0          5m5s\narcadia-minio-58d6b4885c-vdgzx         0/1     Pending             0          5m5s\narcadia-portal-64c5b7f986-5dc8x        1/1     Running             0          5m5s\narcadia-postgresql-0                   0/1     Pending             0          5m4s\nkubebb-core-679594d66f-r769g           1/1     Running             0          69m\n")),(0,r.kt)("h2",{id:"5-\u66f4\u65b0\u5185\u6838"},"5. \u66f4\u65b0\u5185\u6838"),(0,r.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.rating_enable=true"),"\u6765\u542f\u7528Rating"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade  -nkubebb-system kubebb-core kubebb/kubebb-core  --set deployment.rating_enable=true\n")),(0,r.kt)("p",null,"\u67e5\u770b\u5185\u6838Pod\u72b6\u6001:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f kubectl get pods -nkubebb-system --watch\nNAME                           READY   STATUS    RESTARTS   AGE\nkubebb-core-65ddc99994-25k49   0/1     Running   0          7s\nkubebb-core-6d78d7d8fd-vxbc6   1/1     Running   0          119s\nkubebb-core-65ddc99994-25k49   1/1     Running   0          10s\nkubebb-core-6d78d7d8fd-vxbc6   1/1     Terminating   0          2m2s\nkubebb-core-6d78d7d8fd-vxbc6   0/1     Terminating   0          2m3s\nkubebb-core-6d78d7d8fd-vxbc6   0/1     Terminating   0          2m3s\nkubebb-core-6d78d7d8fd-vxbc6   0/1     Terminating   0          2m3s\n")),(0,r.kt)("p",null,"\u5982\u679c\u5347\u7ea7\u6210\u529f,\u5219\u53ef\u5728\u5185\u6838Pod\u5185\u770b\u5230\u5982\u4e0b\u65e5\u5fd7:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'1.6935407235060694e+09 INFO Starting EventSource {"controller": "rating", "controllerGroup": "core.kubebb.k8s.com.cn", "controllerKind": "Rating", "source": "kind source: *v1alpha1.Rating"}\n1.6935407235063274e+09 INFO Starting EventSource {"controller": "rating", "controllerGroup": "core.kubebb.k8s.com.cn", "controllerKind": "Rating", "source": "kind source: *v1beta1.PipelineRun"}\n')),(0,r.kt)("h2",{id:"6-\u521b\u5efa\u7cfb\u7edf-llm"},"6 \u521b\u5efa\u7cfb\u7edf LLM"),(0,r.kt)("p",null,"\u56e0\u4e3a\u8981\u8fdb\u884c AI \u8bc4\u6d4b\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u8bc4\u6d4b\u7ed3\u679c\u7684\u516c\u5e73\uff0c\u9700\u8981\u5168\u5c40\u914d\u7f6e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"LLM"),", \u8fd9\u4e2a\u8d44\u6e90\u7684 yaml \u683c\u5f0f\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: arcadia.kubeagi.k8s.com.cn/v1alpha1\nkind: LLM\nmetadata:\n  name: zhipuai # LLM \u7684\u540d\u5b57\n  namespace: kubebb-system # LLM\u7684namespace\nspec:\n  provider:\n    endpoint:\n      authSecret: # authSecret \u662f\u5f53\u6211\u4eec\u9009\u62e9\u4e86\u4e00\u4e2a\u6a21\u578b\u670d\u52a1\u540e\uff0c\u4f8b\u5982 openai\uff0czhipuai \u7b49\uff0c\u4f1a\u7ed9\u7528\u6237\u4e00\u4e2a token \u8fdb\u884c api\u8c03\u7528\n        kind: secret\n        name: zhipuai\n      url: https://open.bigmodel.cn/api/paas/v3/model-api\n  type: zhipuai\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u5173\u6ce8\u7684\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.privider.endpoint"),", \u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"authSecret")," \u662f\u914d\u7f6e\u4e00\u4e2a secret \u7684\u540d\u5b57\uff0c\u8fd9\u4e2asecret\u4e2d\u4fdd\u5b58\u4e86\u8bbf\u95ee AI \u670d\u52a1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Token"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," \u5728 secret\u7684\u5b58\u50a8\u5b57\u6bb5\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"apiKey")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndata:\n  apiKey: YmFzZTY0Cg==\nkind: Secret\nmetadata:\n  name: zhipuai\n  namespace: kubebb-system\ntype: Opaque\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"url")," \u5b57\u6bb5\uff0c\u5c31\u662f\u6a21\u578b\u670d\u52a1\u63d0\u4f9b\u7684\u8c03\u7528\u63a5\u53e3\u7684\u5730\u5740\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u5e73\u53f0\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"openai")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"zhipuai"),"\uff0c\u6240\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.type")," \u5b57\u6bb5\u5c31\u662f\u8fd9\u4e24\u4e2a\u503c\u53ef\u9009\u3002\n\u56e0\u4e3a\u7cfb\u7edf\u4e2d\u53ef\u80fd\u5b58\u5728\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"LLM"),", \u6240\u4ee5\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u914d\u7f6e\u6307\u660e AI \u8981\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"LLM"),"\u3002\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5728\u521b\u5efa\u4e00\u4e2a configmap \u540d\u5b57\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"system-llm"),"\uff0c\u540d\u5b57\u662f\u56fa\u5b9a\u7684\u3002\n\u5305\u542b\u4e24\u4e2a\u5b57\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name \u4f7f\u7528\u7684LLM\u7684\u540d\u5b57"),(0,r.kt)("li",{parentName:"ul"},"namespace \u4f7f\u7528\u7684LLM\u6240\u5728\u7684namespace")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ConfigMap\nmetadata:\n  name: system-llm\n  namespace: kubebb-system\ndata:\n  name: "zhipuai"\n  namespace: "kubebb-system"\n')))}u.isMDXComponent=!0}}]);