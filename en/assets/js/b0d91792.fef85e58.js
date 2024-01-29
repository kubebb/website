"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3222],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(t),k=l,b=c["".concat(s,".").concat(k)]||c[k]||m[k]||r;return t?a.createElement(b,o(o({ref:n},u),{},{components:t})):a.createElement(b,o({ref:n},u))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=k;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:l,o[1]=p;for(var i=2;i<r;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:1},o="\u5b89\u88c5 Kubebb",p={unversionedId:"quick-start/quick-install",id:"quick-start/quick-install",title:"\u5b89\u88c5 Kubebb",description:"\u51c6\u5907\u73af\u5883",source:"@site/docs/quick-start/quick-install.md",sourceDirName:"quick-start",slug:"/quick-start/quick-install",permalink:"/website/en/docs/quick-start/quick-install",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/website/en/docs/category/\u5feb\u901f\u5f00\u59cb"},next:{title:"\u53d1\u5e03 HelloWorld \u7ec4\u4ef6",permalink:"/website/en/docs/quick-start/quick-experience"}},s={},i=[{value:"\u51c6\u5907\u73af\u5883",id:"\u51c6\u5907\u73af\u5883",level:2},{value:"\u5b89\u88c5\u5185\u6838",id:"\u5b89\u88c5\u5185\u6838",level:2},{value:"\u5b89\u88c5\u5e95\u5ea7",id:"\u5b89\u88c5\u5e95\u5ea7",level:2},{value:"1. \u521b\u5efa\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93",id:"1-\u521b\u5efa\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93",level:3},{value:"2. \u521b\u5efa\u5e95\u5ea7\u7ec4\u4ef6\u7a7a\u95f4",id:"2-\u521b\u5efa\u5e95\u5ea7\u7ec4\u4ef6\u7a7a\u95f4",level:3},{value:"3. \u90e8\u7f72Cluster Component",id:"3-\u90e8\u7f72cluster-component",level:3},{value:"4. \u90e8\u7f72U4A Component",id:"4-\u90e8\u7f72u4a-component",level:3},{value:"5. \u8bbf\u95ee\u5e95\u5ea7\u670d\u52a1\u95e8\u6237",id:"5-\u8bbf\u95ee\u5e95\u5ea7\u670d\u52a1\u95e8\u6237",level:3},{value:"6. \u5b89\u88c5\u7ec4\u4ef6\u5e02\u573a",id:"6-\u5b89\u88c5\u7ec4\u4ef6\u5e02\u573a",level:3},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:2},{value:"1. \u5378\u8f7dU4A Component",id:"1-\u5378\u8f7du4a-component",level:3},{value:"2. \u5378\u8f7dCluster Component",id:"2-\u5378\u8f7dcluster-component",level:3}],u={toc:i},c="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5b89\u88c5-kubebb"},"\u5b89\u88c5 Kubebb"),(0,l.kt)("h2",{id:"\u51c6\u5907\u73af\u5883"},"\u51c6\u5907\u73af\u5883"),(0,l.kt)("p",null,"\u51c6\u5907\u57fa\u7840\u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")," +3.0 \u5ba2\u6237\u7aef"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Kubectl")," \u5ba2\u6237\u7aef")),(0,l.kt)("p",null,"\u51c6\u5907Kubernetes\u96c6\u7fa4"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6ca1\u6709kubernets\u96c6\u7fa4\uff0c\u53ef\u6309\u7167\u4e0b\u8ff0\u6559\u7a0b\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"kind"),"\u90e8\u7f72\u4e00\u4e2a\u5f00\u53d1\u96c6\u7fa4\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e3a\u9002\u914d",(0,l.kt)("inlineCode",{parentName:"p"},"building base"),",\u96c6\u7fa4\u81f3\u5c11\u6709\u4e00\u4e2a\u8282\u70b9\u9700\u8981\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Ingress Controller"),"\u670d\u52a1\u8282\u70b9\uff0c\u5e76\u66b4\u9732",(0,l.kt)("inlineCode",{parentName:"p"},"80"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"443"),"\u7aef\u53e3\u3002")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5kind")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53c2\u8003: ",(0,l.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"))),(0,l.kt)("p",null,"Linux\u73af\u5883\u4e3a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# For AMD64 / x86_64\n[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-amd64\n# For ARM64\n[ $(uname -m) = aarch64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-arm64\nchmod +x ./kind\nsudo mv ./kind /usr/local/bin/kind\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u51c6\u5907\u5355\u8282\u70b9\u96c6\u7fa4",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubebb/core/blob/main/tests/kind-config.yaml"},"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("inlineCode",{parentName:"li"},"kind-config.yaml"))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u6b64\u5904\u91c7\u7528v1.24.13\u7248\u672c\uff0c\u5176\u4ed6\u7248\u672c\u8bf7\u81ea\u884c\u66ff\u6362. ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/kindest/node/tags?page=1&ordering=last_updated"},"\u7248\u672c\u5217\u8868"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u9700\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4\uff0c\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubebb/core/blob/main/tests/kind-config-3nodes.yaml"},"3\u8282\u70b9\u914d\u7f6e\u6587\u4ef6")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nname: kubebb-core\nnodes:\n  - role: control-plane\n    image: kindest/node:v1.24.13\n    kubeadmConfigPatches:\n      - |\n        kind: InitConfiguration\n        nodeRegistration:\n          kubeletExtraArgs:\n            node-labels: "ingress-ready=true"\n    extraPortMappings:\n      - containerPort: 80\n        hostPort: 80\n        protocol: TCP\n      - containerPort: 443\n        hostPort: 443\n        protocol: TCP\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u96c6\u7fa4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kind create cluster --config=kind-config.yaml\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info --context kind-kubebb-core\n")),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u8f93\u51fa\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Kubernetes control plane is running at https://127.0.0.1:42607\nCoreDNS is running at https://127.0.0.1:42607/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u96c6\u7fa4\u8282\u70b9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes\n")),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u8f93\u51fa\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"NAME                              STATUS   ROLES           AGE   VERSION\nkubebb-core-control-plane         Ready    control-plane   21m   v1.24.13\n")),(0,l.kt)("p",null,"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"docker ps"),"\u53ef\u53d1\u73b0\u8be5\u8282\u70b9\u5df2\u7ecf\u66b4\u9732\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"80"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"443"),"\u7aef\u53e3:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'(base) \u279c  building-base git:(azure) docker ps\nCONTAINER ID   IMAGE                   COMMAND                  CREATED          STATUS          PORTS                                                                 NAMES\ne4e3820cdb5a   kindest/node:v1.24.13   "/usr/local/bin/entr\u2026"   22 minutes ago   Up 22 minutes   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp, 127.0.0.1:33611->6443/tcp   kubebb-core-control-plane\n')),(0,l.kt)("h2",{id:"\u5b89\u88c5\u5185\u6838"},"\u5b89\u88c5\u5185\u6838"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Kubebb\u5b98\u65b9\u63d0\u4f9b\u4e86helm\u4ed3\u5e93\uff0c\u65b9\u4fbf\u7528\u6237\u5b89\u88c5: ",(0,l.kt)("a",{parentName:"p",href:"https://kubebb.github.io/components/"},"https://kubebb.github.io/components/"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0helm\u4ed3\u5e93")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add kubebb https://kubebb.github.io/components/\nhelm repo update\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u547d\u540d\u7a7a\u95f4")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8bf7\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\u547d\u540d\u7a7a\u95f4\u540d\u79f0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace kubebb-system\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm install -nkubebb-system kubebb-core kubebb/kubebb-core\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5b89\u88c5\u72b6\u6001")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -nkubebb-system \n")),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u8f93\u5165\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"NAME                           READY   STATUS    RESTARTS   AGE\nkubebb-core-6bd7c5f679-742mq   1/1     Running   0          21h\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5\u5e95\u5ea7"},"\u5b89\u88c5\u5e95\u5ea7"),(0,l.kt)("h3",{id:"1-\u521b\u5efa\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93"},"1. \u521b\u5efa\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"#%E5%AE%89%E8%A3%85%E5%86%85%E6%A0%B8"},"\u4f7f\u7528\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93"))),(0,l.kt)("h3",{id:"2-\u521b\u5efa\u5e95\u5ea7\u7ec4\u4ef6\u7a7a\u95f4"},"2. \u521b\u5efa\u5e95\u5ea7\u7ec4\u4ef6\u7a7a\u95f4"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u4ec5\u652f\u6301\u4f7f\u7528\u547d\u540d\u7a7a\u95f4",(0,l.kt)("inlineCode",{parentName:"p"},"u4a-system"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl create namespace u4a-system\n")),(0,l.kt)("h3",{id:"3-\u90e8\u7f72cluster-component"},"3. \u90e8\u7f72Cluster Component"),(0,l.kt)("p",null,"\u7ec4\u4ef6\u90e8\u7f72\u4fe1\u606f",(0,l.kt)("inlineCode",{parentName:"p"},"cluster_componentplan.yaml"),"\u5982\u4e0b:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8be6\u7ec6\u53ef",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubebb/components/tree/main/examples/cluster-component"},"\u53c2\u8003"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: ComponentPlan\nmetadata:\n  name: cluster-component\n  namespace: u4a-system\nspec:\n  approved: true\n  name: cluster-component\n  version: 0.1.4\n  override:\n    set:\n    - ingress-nginx.controller.nodeSelector.kubernetes\\.io/hostname=kubebb-core-control-plane\n  component:\n    name: kubebb.cluster-component\n    namespace: kubebb-system\n")),(0,l.kt)("p",null,"\u9700\u8c03\u6574\u53c2\u6570:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"override.set.ingress-nginx.controller.nodeSelector.kubernetes\\.io/hostname")," \u5c06\u4f5c\u4e3a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubebb/components/tree/main/charts/cluster-component/charts/ingress-nginx"},"ingress-nginx"),"\u670d\u52a1\u8282\u70b9")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6b64\u5904\u57fa\u4e8e",(0,l.kt)("a",{parentName:"p",href:"#%E5%87%86%E5%A4%87%E7%8E%AF%E5%A2%83"},"kind\u5f00\u53d1\u96c6\u7fa4"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"kubebb-core-control-plane"),"\u8282\u70b9\u3002")),(0,l.kt)("p",null,"\u901a\u8fc7\u4e00\u4e0b\u547d\u4ee4\u90e8\u7f72:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl apply -nu4a-system -f cluster_componentplan.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Cluster Component"),"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u7ec4\u4ef6\u90e8\u7f72\u72b6\u6001:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl get componentplan -nu4a-system cluster-component -oyaml\n")),(0,l.kt)("p",null,"\u5f53\u7ec4\u4ef6\u90e8\u7f72\u72b6\u6001\u5982\u4e0b\u65f6\uff0c\u8868\u793a\u7ec4\u4ef6\u90e8\u7f72\u6210\u529f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'status:\n  conditions:\n  - lastTransitionTime: "2023-07-25T08:15:41Z"\n    reason: ""\n    status: "True"\n    type: Approved\n  - lastTransitionTime: "2023-07-25T08:15:44Z"\n    reason: InstallSuccess\n    status: "True"\n    type: Actioned\n  - lastTransitionTime: "2023-07-25T08:15:44Z"\n    reason: ""\n    status: "True"\n    type: Succeeded\n')),(0,l.kt)("h3",{id:"4-\u90e8\u7f72u4a-component"},"4. \u90e8\u7f72U4A Component"),(0,l.kt)("p",null,"\u7ec4\u4ef6\u90e8\u7f72\u4fe1\u606f",(0,l.kt)("inlineCode",{parentName:"p"},"u4a_componentplan.yaml"),"\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: ComponentPlan\nmetadata:\n  name: u4a-component\n  namespace: u4a-system\nspec:\n  approved: true\n  name: u4a-component\n  version: 0.1.10\n  wait: true\n  override:\n    valuesFrom:\n    - kind: ConfigMap\n      name: u4acm\n      valuesKey: "values.yaml"\n  component:\n    name: kubebb.u4a-component\n    namespace: kubebb-system\n')),(0,l.kt)("p",null,"\u5176\u4e2d,\u7ec4\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"U4A-Component"),"\u7684\u53c2\u6570\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"ConfigMap"),"\u65b9\u5f0f\u6ce8\u5165\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ConfigMap"),"\u7684\u521b\u5efa\u6d41\u7a0b\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubebb/components/tree/main/examples/u4a-component#install-u4a-component"},"U4A\u7ec4\u4ef6\u90e8\u7f72\u6d41\u7a0b")),(0,l.kt)("p",null,"\u901a\u8fc7\u4e00\u4e0b\u547d\u4ee4\u90e8\u7f72:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl apply -nu4a-system -f u4a_componentplan.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"U4A Component"),"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u7ec4\u4ef6\u90e8\u7f72\u72b6\u6001:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl get componentplan -nu4a-system u4a-component -oyaml\n")),(0,l.kt)("h3",{id:"5-\u8bbf\u95ee\u5e95\u5ea7\u670d\u52a1\u95e8\u6237"},"5. \u8bbf\u95ee\u5e95\u5ea7\u670d\u52a1\u95e8\u6237"),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\u95e8\u6237\u670d\u52a1\u7684\u8bbf\u95ee\u5730\u5740:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(base) \u279c  ~ kubectl get ingress -nu4a-system\nNAME                             CLASS    HOSTS                          ADDRESS   PORTS     AGE\nbff-server-ingress               <none>   portal.172.18.0.2.nip.io             80, 443   4h55m\nbff-server-ingress-socket        <none>   portal.172.18.0.2.nip.io             80, 443   4h55m\nkube-oidc-proxy-server-ingress   <none>   k8s.172.18.0.2.nip.io                80, 443   4h55m\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,l.kt)("inlineCode",{parentName:"p"},"https://portal.172.18.0.2.nip.io"),"\u5373\u53ef\u8fdb\u5165\u670d\u52a1\u95e8\u6237\u3002\u9ed8\u8ba4\u7684\u7528\u6237\u540d\u5bc6\u7801\u4e3a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d: ",(0,l.kt)("inlineCode",{parentName:"li"},"admin")),(0,l.kt)("li",{parentName:"ul"},"\u5bc6\u7801: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubebb-admin"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u7531\u4e8e\u4f7f\u7528\u4e86",(0,l.kt)("a",{parentName:"p",href:"https://nip.io/"},"nip.io"),"\u4f5c\u4e3a\u57df\u540d\u89e3\u6790\u670d\u52a1\uff0c\u56e0\u6b64\u9700\u8981\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"HOSTS"),"\u4e2d\u7684\u57df\u540d\u89e3\u6790\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"ADDRESS"),"\u5bf9\u5e94\u7684IP\u5730\u5740\u4e0a\u3002")),(0,l.kt)("h3",{id:"6-\u5b89\u88c5\u7ec4\u4ef6\u5e02\u573a"},"6. \u5b89\u88c5\u7ec4\u4ef6\u5e02\u573a"),(0,l.kt)("p",null,"\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubebb/components/tree/main/charts/component-store"},"\u7ec4\u4ef6\u5e02\u573a")," \u7684\u90e8\u7f72\u6587\u6863\u8fdb\u884c\u5b89\u88c5\uff0c\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/website/en/docs/user-guide/component_market"},"\u7528\u6237\u624b\u518c")," \u8fdb\u884c\u7ec4\u4ef6\u7684\u6d4f\u89c8\u548c\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,l.kt)("h3",{id:"1-\u5378\u8f7du4a-component"},"1. \u5378\u8f7dU4A Component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl delete componentplan -nu4a-system u4a-component\n")),(0,l.kt)("h3",{id:"2-\u5378\u8f7dcluster-component"},"2. \u5378\u8f7dCluster Component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl delete componentplan -nu4a-system cluster-component\n")))}m.isMDXComponent=!0}}]);