"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||k[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="\u9884\u5148\u51c6\u5907",l={unversionedId:"quick-start/prerequisite",id:"quick-start/prerequisite",title:"\u9884\u5148\u51c6\u5907",description:"\u57fa\u7840\u73af\u5883",source:"@site/docs/quick-start/prerequisite.md",sourceDirName:"quick-start",slug:"/quick-start/prerequisite",permalink:"/website/en/docs/quick-start/prerequisite",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/website/en/docs/category/\u5feb\u901f\u5f00\u59cb"},next:{title:"\u5b89\u88c5\u5185\u6838",permalink:"/website/en/docs/quick-start/core_quickstart"}},s={},p=[{value:"\u57fa\u7840\u73af\u5883",id:"\u57fa\u7840\u73af\u5883",level:2},{value:"Kubernetes\u96c6\u7fa4",id:"kubernetes\u96c6\u7fa4",level:2},{value:"Kind\u5f00\u53d1\u96c6\u7fa4",id:"kind\u5f00\u53d1\u96c6\u7fa4",level:3}],u={toc:p},c="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9884\u5148\u51c6\u5907"},"\u9884\u5148\u51c6\u5907"),(0,a.kt)("h2",{id:"\u57fa\u7840\u73af\u5883"},"\u57fa\u7840\u73af\u5883"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")," +3.0 \u5ba2\u6237\u7aef"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Kubectl")," \u5ba2\u6237\u7aef")),(0,a.kt)("h2",{id:"kubernetes\u96c6\u7fa4"},"Kubernetes\u96c6\u7fa4"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6ca1\u6709kubernets\u96c6\u7fa4\uff0c\u53ef\u6309\u7167\u4e0b\u8ff0\u6559\u7a0b\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"kind"),"\u90e8\u7f72\u4e00\u4e2a\u5f00\u53d1\u96c6\u7fa4\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e3a\u9002\u914d",(0,a.kt)("inlineCode",{parentName:"p"},"building base"),",\u96c6\u7fa4\u81f3\u5c11\u6709\u4e00\u4e2a\u8282\u70b9\u9700\u8981\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Ingress Controller"),"\u670d\u52a1\u8282\u70b9\uff0c\u5e76\u66b4\u9732",(0,a.kt)("inlineCode",{parentName:"p"},"80"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"443"),"\u7aef\u53e3\u3002")),(0,a.kt)("h3",{id:"kind\u5f00\u53d1\u96c6\u7fa4"},"Kind\u5f00\u53d1\u96c6\u7fa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5kind")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53c2\u8003: ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"))),(0,a.kt)("p",null,"Linux\u73af\u5883\u4e3a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# For AMD64 / x86_64\n[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-amd64\n# For ARM64\n[ $(uname -m) = aarch64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-arm64\nchmod +x ./kind\nsudo mv ./kind /usr/local/bin/kind\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u51c6\u5907\u5355\u8282\u70b9\u96c6\u7fa4",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubebb/core/blob/main/tests/kind-config.yaml"},"\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("inlineCode",{parentName:"li"},"kind-config.yaml"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u6b64\u5904\u91c7\u7528v1.24.13\u7248\u672c\uff0c\u5176\u4ed6\u7248\u672c\u8bf7\u81ea\u884c\u66ff\u6362. ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/kindest/node/tags?page=1&ordering=last_updated"},"\u7248\u672c\u5217\u8868"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u9700\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4\uff0c\u53ef\u53c2\u8003",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubebb/core/blob/main/tests/kind-config-3nodes.yaml"},"3\u8282\u70b9\u914d\u7f6e\u6587\u4ef6")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nname: kubebb-core\nnodes:\n  - role: control-plane\n    image: kindest/node:v1.24.13\n    kubeadmConfigPatches:\n      - |\n        kind: InitConfiguration\n        nodeRegistration:\n          kubeletExtraArgs:\n            node-labels: "ingress-ready=true"\n    extraPortMappings:\n      - containerPort: 80\n        hostPort: 80\n        protocol: TCP\n      - containerPort: 443\n        hostPort: 443\n        protocol: TCP\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u96c6\u7fa4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kind create cluster --config=kind-config.yaml\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info --context kind-kubebb-core\n")),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u8f93\u51fa\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Kubernetes control plane is running at https://127.0.0.1:42607\nCoreDNS is running at https://127.0.0.1:42607/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u67e5\u770b\u96c6\u7fa4\u8282\u70b9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes\n")),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u8f93\u51fa\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"NAME                              STATUS   ROLES           AGE   VERSION\nkubebb-core-control-plane         Ready    control-plane   21m   v1.24.13\n")),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps"),"\u53ef\u53d1\u73b0\u8be5\u8282\u70b9\u5df2\u7ecf\u66b4\u9732\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"80"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"443"),"\u7aef\u53e3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'(base) \u279c  building-base git:(azure) docker ps\nCONTAINER ID   IMAGE                   COMMAND                  CREATED          STATUS          PORTS                                                                 NAMES\ne4e3820cdb5a   kindest/node:v1.24.13   "/usr/local/bin/entr\u2026"   22 minutes ago   Up 22 minutes   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp, 127.0.0.1:33611->6443/tcp   kubebb-core-control-plane\n')))}k.isMDXComponent=!0}}]);