"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2940],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(t),k=r,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return t?a.createElement(d,o(o({ref:n},i),{},{components:t})):a.createElement(d,o({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=k;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8160:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:5},o="\u79c1\u6709\u96c6\u7fa4\u90e8\u7f72\u65b9\u6848",s={unversionedId:"quick-start/privatecluster",id:"quick-start/privatecluster",title:"\u79c1\u6709\u96c6\u7fa4\u90e8\u7f72\u65b9\u6848",description:"\u5728\u4f7f\u7528 kubebb-core \u4e4b\u524d\u6211\u4eec\u9700\u8981\u6709\u4e00\u4e2a k8s \u96c6\u7fa4\uff0c\u7248\u672c\u662f 1.24+\u3002",source:"@site/docs/quick-start/privatecluster.md",sourceDirName:"quick-start",slug:"/quick-start/privatecluster",permalink:"/website/docs/quick-start/privatecluster",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u5e03 HelloWorld \u7ec4\u4ef6",permalink:"/website/docs/quick-start/quick-experience"},next:{title:"\u6dfb\u52a0\u96c6\u7fa4",permalink:"/website/docs/quick-start/add-cluster"}},p={},c=[{value:"1. \u51c6\u5907",id:"1-\u51c6\u5907",level:2},{value:"\u547d\u4ee4\u884c\u5de5\u5177",id:"\u547d\u4ee4\u884c\u5de5\u5177",level:3},{value:"\u955c\u50cf",id:"\u955c\u50cf",level:3},{value:"\u4ee3\u7801\u4ed3\u5e93",id:"\u4ee3\u7801\u4ed3\u5e93",level:3},{value:"2. \u521b\u5efa\u96c6\u7fa4",id:"2-\u521b\u5efa\u96c6\u7fa4",level:2},{value:"2.1 \u901a\u8fc7 kind \u521b\u5efa k8s \u96c6\u7fa4",id:"21-\u901a\u8fc7-kind-\u521b\u5efa-k8s-\u96c6\u7fa4",level:3},{value:"2.2 \u521b\u5efa\u5e26\u6709\u955c\u50cf Registry \u7684 kind \u96c6\u7fa4",id:"22-\u521b\u5efa\u5e26\u6709\u955c\u50cf-registry-\u7684-kind-\u96c6\u7fa4",level:3},{value:"3.\u5b89\u88c5 kubebb-core",id:"3\u5b89\u88c5-kubebb-core",level:2},{value:"4.\u90e8\u7f72 chartmuseum",id:"4\u90e8\u7f72-chartmuseum",level:2},{value:"5.\u4f7f\u7528 kubebb-core",id:"5\u4f7f\u7528-kubebb-core",level:2},{value:"5.1 \u90e8\u7f72\u4e00\u4e2a Repository",id:"51-\u90e8\u7f72\u4e00\u4e2a-repository",level:3},{value:"5.2 \u90e8\u7f72\u4e00\u4e2a Component",id:"52-\u90e8\u7f72\u4e00\u4e2a-component",level:3},{value:"5.3 Repository Image \u91cd\u5199",id:"53-repository-image-\u91cd\u5199",level:3}],i={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u79c1\u6709\u96c6\u7fa4\u90e8\u7f72\u65b9\u6848"},"\u79c1\u6709\u96c6\u7fa4\u90e8\u7f72\u65b9\u6848"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 kubebb-core \u4e4b\u524d\u6211\u4eec\u9700\u8981\u6709\u4e00\u4e2a k8s \u96c6\u7fa4\uff0c\u7248\u672c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"1.24+"),"\u3002"),(0,r.kt)("h2",{id:"1-\u51c6\u5907"},"1. \u51c6\u5907"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u56e0\u4e3a\u662f\u5728\u79c1\u6709\u73af\u5883\u90e8\u7f72\uff0c\u6240\u4ee5\u9700\u8981\u901a\u8fc7\u67d0\u4e2a\u53ef\u4ee5\u8054\u7f51\u96c6\u7fa4\uff0c\u83b7\u53d6\u4e0b\u9762\u6240\u5fc5\u987b\u7684 \u547d\u4ee4\uff0c\u955c\u50cf\u4e0a\u4f20\u5230\u76ee\u6807\u8282\u70b9\u3002")),(0,r.kt)("h3",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kind (",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"),")"),(0,r.kt)("li",{parentName:"ul"},"kubectl (",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"https://kubernetes.io/docs/tasks/tools/"),")"),(0,r.kt)("li",{parentName:"ul"},"docker"),(0,r.kt)("li",{parentName:"ul"},"helm (",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"https://helm.sh/docs/intro/install/"),")")),(0,r.kt)("h3",{id:"\u955c\u50cf"},"\u955c\u50cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kindest/node:v1.24.4 (\u521b\u5efak8s\u96c6\u7fa4\uff0ckind\u8981\u662f\u7528\u7684\u955c\u50cf)"),(0,r.kt)("li",{parentName:"ul"},"kubebb/core:v0.1.4 (kubebb-core \u7684\u955c\u50cf)"),(0,r.kt)("li",{parentName:"ul"},"alpine:3.15 (\u7528\u6765\u6d4b\u8bd5registry\u662f\u5426\u6b63\u5e38)"),(0,r.kt)("li",{parentName:"ul"},"ghcr.io/helm/chartmuseum:v0.16.0")),(0,r.kt)("h3",{id:"\u4ee3\u7801\u4ed3\u5e93"},"\u4ee3\u7801\u4ed3\u5e93"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubebb/components"},"kubebb/components")," (\u8fd9\u91cc\u5305\u542b\u4e86kubebb\u7684\u57fa\u7840chart\u5305, \u56e0\u4e3a\u662f\u79c1\u6709\u90e8\u7f72\uff0c\u6240\u4ee5\u9700\u8981\u5148clone\u4e0b\u6765)")),(0,r.kt)("h2",{id:"2-\u521b\u5efa\u96c6\u7fa4"},"2. \u521b\u5efa\u96c6\u7fa4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u5df2\u7ecf\u6709\u4e86\u955c\u50cf registry\uff0c\u6267\u884c\u6b65\u9aa4 ",(0,r.kt)("a",{parentName:"strong",href:"#21-%E9%80%9A%E8%BF%87-kind-%E5%88%9B%E5%BB%BA-k8s-%E9%9B%86%E7%BE%A4"},"2.1"),", \u6ca1\u6709\u955c\u50cf registry\uff0c\u6267\u884c\u6b65\u9aa4 ",(0,r.kt)("a",{parentName:"strong",href:"#22-%E5%88%9B%E5%BB%BA%E5%B8%A6%E6%9C%89%E9%95%9C%E5%83%8F-registry-%E7%9A%84-kind-%E9%9B%86%E7%BE%A4"},"2.2"))),(0,r.kt)("h3",{id:"21-\u901a\u8fc7-kind-\u521b\u5efa-k8s-\u96c6\u7fa4"},"2.1 \u901a\u8fc7 kind \u521b\u5efa k8s \u96c6\u7fa4"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u521b\u5efa\u4e00\u4e2a\u5355\u8282\u70b9\u96c6\u7fa4\u7684\u914d\u7f6e\u6587\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# conf.yaml\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nname: kubebb-core\nnodes:\n  - role: control-plane\n    image: kindest/node:v1.24.4\n    kubeadmConfigPatches:\n      - |\n        kind: InitConfiguration\n        nodeRegistration:\n          kubeletExtraArgs:\n            node-labels: "ingress-ready=true"\n    extraPortMappings:\n      - containerPort: 80\n        hostPort: 80\n        protocol: TCP\n      - containerPort: 443\n        hostPort: 443\n        protocol: TCP\n')),(0,r.kt)("p",null,"\u521b\u5efa\u96c6\u7fa4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kind create cluster --config=conf.yaml\n")),(0,r.kt)("p",null,"\u521b\u5efa\u6210\u529f\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Creating cluster "kubebb-core" ...\n \u2713 Ensuring node image (kindest/node:v1.24.4) \ud83d\uddbc\n \u2713 Preparing nodes \ud83d\udce6  \n \u2713 Writing configuration \ud83d\udcdc \n \u2713 Starting control-plane \ud83d\udd79\ufe0f \n \u2713 Installing CNI \ud83d\udd0c \n \u2713 Installing StorageClass \ud83d\udcbe \nSet kubectl context to "kind-kubebb-core"\nYou can now use your cluster with:\n\nkubectl cluster-info --context kind-kubebb-core\n\nNot sure what to do next? \ud83d\ude05  Check out https://kind.sigs.k8s.io/docs/user/quick-start/\n')),(0,r.kt)("p",null,"\u68c0\u67e5\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get node\n\nNAME                        STATUS   ROLES           AGE   VERSION\nkubebb-core-control-plane   Ready    control-plane   70s   v1.24.4\n")),(0,r.kt)("h3",{id:"22-\u521b\u5efa\u5e26\u6709\u955c\u50cf-registry-\u7684-kind-\u96c6\u7fa4"},"2.2 \u521b\u5efa\u5e26\u6709\u955c\u50cf Registry \u7684 kind \u96c6\u7fa4"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7kind\u90e8\u7f72\u96c6\u7fa4\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u5e26\u51fa\u6765\u4e00\u4e2a, \u53c2\u8003\u8fd9\u91cc\u90e8\u7f72\u76f4\u63a5\u5e26\u51fa\u6765\u4e00\u4e2aregistry\n",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/local-registry/"},"https://kind.sigs.k8s.io/docs/user/local-registry/")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8 registry")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# 1. \u521b\u5efa\u5bb9\u5668\ndocker run \\\n    -d --restart=always -p "127.0.0.1:5001:5000" --name kind-registry \\\n    registry:2\n\n# 2. \u68c0\u67e5\u5bb9\u5668\u662f\u5426\u6b63\u5e38\u8fd0\u884c\ndocker ps\n\nCONTAINER ID   IMAGE        COMMAND                  CREATED         STATUS         PORTS                      NAMES\n27c8049d53b9   registry:2   "/entrypoint.sh /etc\u2026"   4 seconds ago   Up 3 seconds   127.0.0.1:5001->5000/tcp   kind-registry\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u914d\u7f6e\uff0c\u5e76\u521b\u5efa\u96c6\u7fa4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# conf-with-registry.yaml\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nname: kubebb-core\ncontainerdConfigPatches:\n  - |-\n    [plugins."io.containerd.grpc.v1.cri".registry.mirrors."localhost:5001"]\n      endpoint = ["http://kind-registry:5000"]\nnodes:\n  - role: control-plane\n    image: kindest/node:v1.24.4\n    kubeadmConfigPatches:\n      - |\n        kind: InitConfiguration\n        nodeRegistration:\n          kubeletExtraArgs:\n            node-labels: "ingress-ready=true"\n    extraPortMappings:\n      - containerPort: 80\n        hostPort: 80\n        protocol: TCP\n      - containerPort: 443\n        hostPort: 443\n        protocol: TCP\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: local-registry-hosting\n  namespace: kube-public\ndata:\n  localRegistryHosting.v1: |\n    host: "localhost:5001"\n    help: "https://kind.sigs.k8s.io/docs/user/local-registry/"\n')),(0,r.kt)("p",null,"\u521b\u5efa\u96c6\u7fa4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# 1. create cluster\nkind create cluster --config=conf-with-registry.yaml\n")),(0,r.kt)("p",null,"\u521b\u5efa\u6210\u529f\uff0c\u8f93\u5165\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u8f93\u51fa\u5982\u4e0b\nCreating cluster "kubebb-core" ...\n \u2713 Ensuring node image (kindest/node:v1.24.4) \ud83d\uddbc\n \u2713 Preparing nodes \ud83d\udce6  \n \u2713 Writing configuration \ud83d\udcdc \n \u2713 Starting control-plane \ud83d\udd79\ufe0f \n \u2713 Installing CNI \ud83d\udd0c \n \u2713 Installing StorageClass \ud83d\udcbe \nSet kubectl context to "kind-kubebb-core"\nYou can now use your cluster with:\n\nkubectl cluster-info --context kind-kubebb-core\n\nNot sure what to do next? \ud83d\ude05  Check out https://kind.sigs.k8s.io/docs/user/quick-start/\n')),(0,r.kt)("p",null,"\u5c06 registry \u8fde\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," \u7f51\u7edc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'if [ "$(docker inspect -f=\'{{json .NetworkSettings.Networks.kind}}\' "kind-registry")" = \'null\' ]; then\n    docker network connect "kind" "kind-registry"\nfi\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u955c\u50cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker tag alpine:3.15 localhost:5001/alpine:3.15\ndocker push localhost:5001/alpine:3.15\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u955c\u50cf\u4f7f\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'#deploy.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: log\n  labels:\n    app: log\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: log\n  template:\n    metadata:\n      labels:\n        app: log\n    spec:\n      containers:\n      - name: log\n        image: localhost:5001/alpine:3.15\n        command:\n        - "/bin/sh"\n        args:\n        - "-c"\n        - "while true; do echo hello; sleep 10;done"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# 1. \u521b\u5efadeployment\nkubectl apply -f deploy.yaml \n\n# 2. \u68c0\u67e5pod\u662f\u5426\u8fd0\u884c\nkubectl get po\n\nNAME                   READY   STATUS    RESTARTS   AGE\nlog-847f844f96-wvb46   1/1     Running   0          1s\n\n# 3. \u67e5\u770bpod\u65e5\u5fd7\nkubectl logs -f log-847f844f96-wvb46\nhello\nhello\nhello\n^C\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3\u5b89\u88c5-kubebb-core"},"3.\u5b89\u88c5 kubebb-core"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06\u955c\u50cf ",(0,r.kt)("inlineCode",{parentName:"li"},"kubebb/core:v0.1.4")," \u63a8\u5230\u4f60\u7684\u955c\u50cf registry\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker tag kubebb/core:v0.1.4 localhost:5001/core:v0.1.4\ndocker push localhost:5001/core:v0.1.4\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns kubebb-system\ncd components/charts/kubebb-core\nhelm  -nkubebb-system install kubebb --set deployment.image=localhost:5001/core:v0.1.4\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u7ed3\u679c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get po -nkubebb-system\n\nNAME                      READY   STATUS    RESTARTS   AGE\nkubebb-799f9c474d-c9jnn   1/1     Running   0          17s\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"4\u90e8\u7f72-chartmuseum"},"4.\u90e8\u7f72 chartmuseum"),(0,r.kt)("p",null,"\u90e8\u7f72\u4e00\u4e2a\u79c1\u6709\u7684chart repo\uff0c\u7528\u6765\u5b58\u50a8chart\u5305\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06\u955c\u50cf ",(0,r.kt)("inlineCode",{parentName:"li"},"ghcr.io/helm/chartmuseum:v0.16.0")," \u63a8\u5230\u4f60\u7684 registry")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker tag ghcr.io/helm/chartmuseum:v0.16.0 localhost:5001/chartmuseum:v0.16.0\ndocker push localhost:5001/chartmuseum:v0.16.0\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5")),(0,r.kt)("p",null,"\u8fd9\u91cc\u6ce8\u610f\uff1a\u5982\u679c\u8981\u662f\u7528 chartmuseum \u7684 api \u5fc5\u987b\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"env.open.DISABLE_API=false")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd components/charts/chartmuseum\nhelm install chartmuseum --set image.repository=localhost:5001/chartmuseum --set env.open.DISABLE_API=false .\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u7ed3\u679c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get po\n\nNAME                           READY   STATUS    RESTARTS   AGE\nchartmuseum-6c4bc46898-6jj4b   1/1     Running   0          13s\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u5305\u4e0a\u4f20"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u53ef\u4ee5\u901a\u8fc7 nodePort\uff0cingress\u7b49\u65b9\u5f0f\u5c06 chartmuseum \u66b4\u9732\u51fa\u53bb\u3002\n\u76ee\u524d\u662f\u901a\u8fc7kind\u90e8\u7f72\u7684\u96c6\u7fa4\uff0c\u6ca1\u6709\u6620\u5c04\u66f4\u591a\u7684\u4e3b\u673a\u7aef\u53e3\uff0c\u6240\u4ee5\u8fd9\u91cc\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"port-forward")),(0,r.kt)("p",{parentName:"li"},"4.1 \u627e\u5230 chartmuseum \u7684\u670d\u52a1port\u4fe1\u606f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc\nNAME          TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE\nchartmuseum   ClusterIP   10.96.240.154   <none>        8080/TCP   2m59s\n")),(0,r.kt)("p",{parentName:"li"},"4.2 \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"port-froward")," \u8f6c\u53d1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/chartmuseum 8080:8080 --address=0.0.0.0\n")),(0,r.kt)("p",{parentName:"li"},"4.3 \u4e0a\u4f20chart\u5305\n\u8fd9\u91cc\u8fd8\u662f\u4ee5 chartmuseum \u6d4b\u8bd5"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd components/charts/chartmuseum\nhelm pacakge .\n\n# \u6210\u529f\u5c06\u4f1a\u8f93\u51fa {"saved":true}\ncurl --data-binary "@chartmuseum-3.10.1.tgz" http://localhost:8080/api/charts\n')),(0,r.kt)("p",{parentName:"li"},"4.4 \u7ed3\u679c\u67e5\u770b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b index.yaml\ncurl http://localhost:8080/index.yaml\n")),(0,r.kt)("p",{parentName:"li"},"4.4 \u4e0a\u4f20\u5176\u4ed6\u7684chart\u5305"),(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"components/charts")," \u4e0b\u9762\u7684\u5176\u4ed6\u7684chart\u5305\u7528\u5230\u54ea\u4e9b\uff0c\u6309\u7167 ",(0,r.kt)("inlineCode",{parentName:"p"},"4.3")," \u6b65\u9aa4\u5c31\u53ef\u4ee5\u5b8c\u6210\u4e0a\u4f20\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"5\u4f7f\u7528-kubebb-core"},"5.\u4f7f\u7528 kubebb-core"),(0,r.kt)("h3",{id:"51-\u90e8\u7f72\u4e00\u4e2a-repository"},"5.1 \u90e8\u7f72\u4e00\u4e2a Repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# repo.yaml\napiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: Repository\nmetadata:\n  name: kubebb\n  namespace: kubebb-system\nspec:\n  url: http://chartmuseum.default.svc.cluster.local:8080\n  pullStategy:\n    intervalSeconds: 120\n    retry: 5\n")),(0,r.kt)("p",null,"\u521b\u5efa repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# 1. \u521b\u5efa repository\nkubectl apply -f repo.yaml \n\n# 2. \u68c0\u67e5 components \u662f\u5426\u521b\u5efa\nkubectl get components.core.kubebb.k8s.com.cn -n kubebb-system\nNAME                 AGE\nkubebb.chartmuseum   2s\nkubebb.kubebb-core   2s\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u521b\u5efa\u4e86 repository \u540e\uff0c\u76f8\u5173\u7684 components \u5df2\u7ecf\u88ab\u521b\u5efa\u51fa\u6765\u4e86\u3002"),(0,r.kt)("h3",{id:"52-\u90e8\u7f72\u4e00\u4e2a-component"},"5.2 \u90e8\u7f72\u4e00\u4e2a Component"),(0,r.kt)("p",null,"\u90e8\u7f72 component \uff0c\u9700\u8981\u4f7f\u7528 componentplan \u8fd9\u4e2a\u8d44\u6e90\u3002\u8fd9\u91cc\u6211\u4eec\u9009\u62e9\u518d\u6b21\u90e8\u7f72\u4e00\u4e2a chartmuseum\u3002\u524d\u9762\u901a\u8fc7 helm \u90e8\u7f72\u7684 chartmuseum \u662f\u7ed9\u7cfb\u7edf\u5b58\u50a8chart\u7528\u7684\uff0c\u8fd9\u91cc\u90e8\u7f72\uff0c\u662f\u4e3a\u4e86\u6d4b\u8bd5\u529f\u80fd\u6b63\u5e38(\u6ca1\u641e\u5176\u4ed6\u7684chart\u5305)\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# componentplan.yaml\napiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: ComponentPlan\nmetadata:\n  name: chartmuseum-test\n  namespace: default\nspec:\n  approved: true\n  name: chartmuseum-test\n  version: 3.10.1\n  override:\n    set:\n    - image.repository=localhost:5001/chartmuseum \n    - env.open.DISABLE_API=false\n  component:\n    name: kubebb.chartmuseum\n    namespace: kubebb-system\n")),(0,r.kt)("p",null,"\u521b\u5efacompnentplan"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f componentplan.yaml\n")),(0,r.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"chartmuseum-test")," \u7684pod\u4e5f\u8d77\u6765\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get po\n\nNAME                                READY   STATUS    RESTARTS   AGE\nchartmuseum-6c4bc46898-msp7r        1/1     Running   0          107s\nchartmuseum-test-86d66fd5d7-lp2rn   1/1     Running   0          11s\n")),(0,r.kt)("h3",{id:"53-repository-image-\u91cd\u5199"},"5.3 Repository Image \u91cd\u5199"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u6b65\u9aa4\u662f\u4e3a\u4e86\u6d4b\u8bd5 image \u66f4\u65b0\u7b56\u7565\uff0c\u5982\u679c\u4e0d\u9700\u8981\u53ef\u4ee5\u4e0d\u7528\u64cd\u4f5c\u3002\n\u6211\u4eec\u8fd8\u662f\u7528\u4e4b\u524d\u7684helm\u90e8\u7f72\u7684 chartmuseum\uff0c\u91cc\u9762\u6709\u4e00\u4e2achartmuseum \u7684\u5305\uff0c \u8981\u7528\u5230\u955c\u50cf"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ghcr.io/helm/chartmuseum:v0.16.0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# repo-override-image.yaml\napiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: Repository\nmetadata:\n  name: repo-override-image\n  namespace: kubebb-system\nspec:\n  url: http://chartmuseum.default.svc.cluster.local:8080\n  pullStategy:\n    intervalSeconds: 120\n    retry: 5\n  imageOverride:\n    - registry: ghcr.io\n      newRegistry: localhost:5001\n      pathOverride:\n        path: helm\n        newPath: ""\n')),(0,r.kt)("p",null,"\u521b\u5efaRepository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f repo-override-image.yaml\n")),(0,r.kt)("p",null,"\u521b\u5efa repository \u540e\uff0c\u67e5\u770b components"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get components -A\nNAMESPACE       NAME                              AGE\nkubebb-system   kubebb.chartmuseum                18m\nkubebb-system   kubebb.kubebb-core                18m\nkubebb-system   repo-override-image.chartmuseum   5s\nkubebb-system   repo-override-image.kubebb-core   5s\n")),(0,r.kt)("p",null,"\u518d\u6b21\u5b89\u88c5 chartmuseum\n",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff0c\u8fd9\u91cc\u6211\u4eec\u4e0d\u518d\u8bbe\u7f6e chartmuseum \u6240\u4f7f\u7528\u7684\u955c\u50cf\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# componentplan-default-override.yaml\napiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: ComponentPlan\nmetadata:\n  name: chartmuseum-test233\n  namespace: default\nspec:\n  approved: true\n  name: chartmuseum-test233\n  version: 3.10.1\n  override:\n    set:\n    - env.open.DISABLE_API=false\n  component:\n    name: repo-override-image.chartmuseum\n    namespace: kubebb-system\n")),(0,r.kt)("p",null,"\u521b\u5efa componentplan"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f componentplan-default-override.yaml\n")),(0,r.kt)("p",null,"\u68c0\u67e5pod\u7684\u8fd0\u884c\u60c5\u51b5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get po\n\nNAME                                   READY   STATUS    RESTARTS   AGE\nchartmuseum-6c4bc46898-msp7r           1/1     Running   0          32m\nchartmuseum-test-86d66fd5d7-lp2rn      1/1     Running   0          31m\nchartmuseum-test233-544cbfb87c-b6pdd   1/1     Running   0          12s\n")),(0,r.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u2705!"))}m.isMDXComponent=!0}}]);