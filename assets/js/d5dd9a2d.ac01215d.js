"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5011],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:3},o="\u76d1\u63a7\u7ec4\u4ef6",i={unversionedId:"develop-guid/component-market/monitoring",id:"develop-guid/component-market/monitoring",title:"\u76d1\u63a7\u7ec4\u4ef6",description:"\u7b80\u4ecb",source:"@site/docs/develop-guid/component-market/monitoring.md",sourceDirName:"develop-guid/component-market",slug:"/develop-guid/component-market/monitoring",permalink:"/website/docs/develop-guid/component-market/monitoring",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u5fd7\u7ec4\u4ef6",permalink:"/website/docs/develop-guid/component-market/logging"},next:{title:"\u533a\u5757\u94fe - \u8054\u76df\u94fe",permalink:"/website/docs/develop-guid/component-market/blockchain"}},c={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u5b89\u88c5\u6b65\u9aa4",id:"\u5b89\u88c5\u6b65\u9aa4",level:3},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:4},{value:"1.\u51c6\u5907\u955c\u50cf,push \u5230\u5bf9\u5e94\u73af\u5883\u7684 harbor \u4ed3\u5e93",id:"1\u51c6\u5907\u955c\u50cfpush-\u5230\u5bf9\u5e94\u73af\u5883\u7684-harbor-\u4ed3\u5e93",level:4},{value:"2.\u83b7\u53d6 helm \u5305\uff0c\u5e76\u89e3\u538b",id:"2\u83b7\u53d6-helm-\u5305\u5e76\u89e3\u538b",level:4},{value:"3.\u4fee\u6539 charts \u5305\u7684 values.yaml",id:"3\u4fee\u6539-charts-\u5305\u7684-valuesyaml",level:4},{value:"4.\u521b\u5efa namesapce",id:"4\u521b\u5efa-namesapce",level:4},{value:"5.\u751f\u6210 ca \u8bc1\u4e66(\u53ea\u6709 vmselect \u5f00\u542f\u4e86 sidecar\uff0c\u652f\u6301 oidc \u53c2\u6570\u65f6\u9700\u8981)",id:"5\u751f\u6210-ca-\u8bc1\u4e66\u53ea\u6709-vmselect-\u5f00\u542f\u4e86-sidecar\u652f\u6301-oidc-\u53c2\u6570\u65f6\u9700\u8981",level:4},{value:"6.helm install",id:"6helm-install",level:4},{value:"7.\u68c0\u67e5\u7ec4\u4ef6\u662f\u5426\u8fd0\u884c\u6210\u529f",id:"7\u68c0\u67e5\u7ec4\u4ef6\u662f\u5426\u8fd0\u884c\u6210\u529f",level:4},{value:"8.\u529f\u80fd\u9a8c\u8bc1",id:"8\u529f\u80fd\u9a8c\u8bc1",level:4}],s={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u76d1\u63a7\u7ec4\u4ef6"},"\u76d1\u63a7\u7ec4\u4ef6"),(0,a.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u8be5\u76d1\u63a7\u90e8\u7f72\u5305\u7528\u4e8e\u5b89\u88c5\u76d1\u63a7\u7cfb\u7edf\u7cfb\u7edf\u7684\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u5b89\u88c5 monitoring-operator\u3001victoriametrics,\u9009\u88c5 node-exporter\u3001metrics-server\u3001kube-state-metrics\u3001grafana,\u96c6\u7fa4\u5df2\u6709\u7684\u7ec4\u4ef6\u4e0d\u9700\u8981\u5b89\u88c5;\n\u5404\u4e2a\u7ec4\u4ef6\u7684\u4f5c\u7528\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"node-exporter\uff1a\u91c7\u96c6\u5230\u4e3b\u673a\u7684\u8fd0\u884c\u6307\u6807\u5982 CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8\u7b49\u4fe1\u606f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"victoriametrics\uff1a\u4e00\u4e2a\u5feb\u901f\u9ad8\u6548\u3001\u7ecf\u6d4e\u5e76\u4e14\u53ef\u6269\u5c55\u7684\u76d1\u63a7\u89e3\u51b3\u65b9\u6848\u548c\u65f6\u5e8f\u6570\u636e\u5e93,\u8d1f\u8d23\u76d1\u63a7\u6570\u636e\u7684\u6293\u53d6\u3001\u5b58\u50a8\u3001\u67e5\u8be2\uff0c\u5e76\u53ef\u4ee5\u6839\u636e\u544a\u8b66\u89c4\u5219\u89e6\u53d1\u544a\u8b66\uff1b"),(0,a.kt)("li",{parentName:"ul"},"metrics-server\uff1a Kubernetes \u96c6\u7fa4\u6838\u5fc3\u76d1\u63a7\u6570\u636e\u7684\u805a\u5408\u5668\uff0c\u5b9a\u65f6\u4ece Kubelet \u7684 Summary API \u91c7\u96c6\u6307\u6807\u4fe1\u606f\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7 Metrics API \u7684\u5f62\u5f0f\u83b7\u53d6 Metrics \u6570\u636e\uff1b"),(0,a.kt)("li",{parentName:"ul"},"kube-state-metrics\uff1a\u91c7\u96c6 deployment\uff0cPod\u3001daemonset\u3001cronjob \u7b49 k8s \u8d44\u6e90\u5bf9\u8c61\u7684\u76d1\u63a7\u6570\u636e\uff0c\u63d0\u4f9b\u76d1\u63a7\u6307\u6807\uff1b"),(0,a.kt)("li",{parentName:"ul"},"grafana:\u4e00\u4e2a\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u5b83\u63d0\u4f9b\u4e86\u5f3a\u5927\u548c\u4f18\u96c5\u7684\u65b9\u5f0f\u53bb\u521b\u5efa\u3001\u5171\u4eab\u3001\u6d4f\u89c8\u6570\u636e\uff0c\u5e76\u63d0\u4f9b\u4e86\u5f88\u591a\u6f02\u4eae\u7684\u6a21\u677f\uff0c\u5f53\u9700\u8981\u76f4\u63a5\u67e5\u770b\u76d1\u63a7\u6570\u636e\u65f6\u5019\uff0c\u53ef\u4ee5\u88c5\u4e0a\uff1b"),(0,a.kt)("li",{parentName:"ul"},"monitoring-operator: \u8d1f\u8d23\u7ba1\u7406\u4e0a\u8ff0\u76d1\u63a7\u7ec4\u4ef6.")),(0,a.kt)("h3",{id:"\u5b89\u88c5\u6b65\u9aa4"},"\u5b89\u88c5\u6b65\u9aa4"),(0,a.kt)("h4",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u76d1\u63a7\u7ec4\u4ef6 vmselect \u5982\u679c\u5f00\u542f\u4e86 sidecar\uff0ckube-rbac-proxy \u652f\u6301 OIDC\uff0c\u5219\u9700\u8981\u63d0\u524d\u90e8\u7f72\u597d OIDC \u76f8\u5173\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"kubectl  get pod -n u4a-system\n")),(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b\u662f\u5426\u6709 oidc-server\uff0c\u68c0\u67e5\u76f8\u5173\u7ec4\u4ef6\u662f\u5426\u5df2\u7ecf\u5b89\u88c5\u597d\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u9700\u8981\u4f7f\u7528 ingress\uff0c\u5219\u9700\u8981\u63d0\u524d\u90e8\u7f72\u597d ingress-controller\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"vmstorage \u9700\u8981\u8fdb\u884c\u6570\u636e\u6301\u4e45\u5316\uff0c\u9700\u8981\u63d0\u524d\u51c6\u5907\u597d StorageClass\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u597d Group observability\uff0c\u8be5\u7ec4\u5177\u6709\u8bbf\u95ee\u76d1\u63a7\u6570\u636e\u7684\u6743\u9650\uff1b"))),(0,a.kt)("h4",{id:"1\u51c6\u5907\u955c\u50cfpush-\u5230\u5bf9\u5e94\u73af\u5883\u7684-harbor-\u4ed3\u5e93"},"1.\u51c6\u5907\u955c\u50cf,push \u5230\u5bf9\u5e94\u73af\u5883\u7684 harbor \u4ed3\u5e93"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u4ee5\u4e0b\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u4e3b\u8981\u5165\u53e3 operator\nhub.tenxcloud.com/kubebb/monitoring-operator:v0.1.2\n\n# vm \u793e\u533a\u76f8\u5173\u955c\u50cf\nhub.tenxcloud.com/kubebb/vm-operator:v0.35.1\nhub.tenxcloud.com/kubebb/vminsert:v1.91.3-cluster\nhub.tenxcloud.com/kubebb/vmstorage:v1.91.3-cluster\nhub.tenxcloud.com/kubebb/vmselect:v1.91.3-cluster\nhub.tenxcloud.com/kubebb/vmagent:v1.91.3\nhub.tenxcloud.com/kubebb/vmalert:v1.91.3\n\n# \u5176\u4ed6\u4f9d\u8d56\u955c\u50cf\nhub.tenxcloud.com/kubebb/kube-rbac-proxy:v0.13.0-32f11472\nhub.tenxcloud.com/kubebb/node-exporter:v2.5.0\nhub.tenxcloud.com/kubebb/configmap-reload:v0.3.0\nhub.tenxcloud.com/kubebb/prometheus-config-reloader:v0.58.0\nhub.tenxcloud.com/kubebb/prom-rule-reloader:v0.1.2\nhub.tenxcloud.com/kubebb/alertmanager:v0.20.0\nhub.tenxcloud.com/kubebb/kube-state-metrics:v1.9.7 (\u9009\u88c5)\nhub.tenxcloud.com/kubebb/metrics-server:v0.4.1 (\u9009\u88c5)\nhub.tenxcloud.com/kubebb/grafana:10.0.2\uff08\u9009\u88c5\uff09\n")),(0,a.kt)("h4",{id:"2\u83b7\u53d6-helm-\u5305\u5e76\u89e3\u538b"},"2.\u83b7\u53d6 helm \u5305\uff0c\u5e76\u89e3\u538b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar zxvf monitoring-operator-0.1.0.tgz\ncd monitoring-operator\n")),(0,a.kt)("h4",{id:"3\u4fee\u6539-charts-\u5305\u7684-valuesyaml"},"3.\u4fee\u6539 charts \u5305\u7684 values.yaml"),(0,a.kt)("p",null,"\u53c2\u7167 values.yaml \u91cc\u9762\u7684\u6ce8\u91ca\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u5185\u5bb9\u9700\u8981\u4fee\u6539\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u5b9e\u9645\u73af\u5883\uff0c\u4fee\u6539\u955c\u50cf\u5730\u5740\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5e26\u6709 enabled \u7684\u662f\u53ef\u4ee5\u63a7\u5236\u6539\u7ec4\u4ef6\u662f\u5426\u53ef\u4ee5\u542f\u7528\uff0cfalse \u5219\u4e0d\u5b89\u88c5\uff0ctrue \u4f1a\u5b89\u88c5\uff0c\u6ca1\u6709 enabled \u53c2\u6570\u4f1a\u9ed8\u8ba4\u88c5\u4e0a\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5f00\u542f nodePort\uff0c\u5148\u68c0\u67e5\u7aef\u53e3\u662f\u5426\u88ab\u5360\u7528\uff0c\u4e0d\u4f7f\u7528\u8bbe\u7f6e\u4e3a 0 \u5373\u53ef\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5f00\u542f ingress\uff0c\u9700\u8981\u4fee\u6539 ingress \u8d44\u6e90\u7684\u6ce8\u89e3\uff0c\u6ce8\u89e3 key \u662f kubernetes.io/ingress.class\u3002\u6ce8\u89e3\u7684\u503c\u53ef\u4ee5\u67e5\u770b ingress-controller \u7684 deploy \u91cc\u9762\u7684 args \u53c2\u6570\uff0c\u5982",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"kubeclt  edit  deploy -n kube-system ingress-urygcdmyts\n")),"\u53d6 args \u91cc\u9762\u7684\u503c- --ingress-class=nginx-ingress-urygcdmyts\uff0cnginx-ingress-urygcdmyts \u5c31\u662f\u8981\u586b\u5165\u6ce8\u89e3\u7684\u503c\uff1b ")),(0,a.kt)("h4",{id:"4\u521b\u5efa-namesapce"},"4.\u521b\u5efa namesapce"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl --as=admin  --as-group=iam.tenxcloud.com create -f - <<EOF \napiVersion: v1\nkind: Namespace\nmetadata:\n  labels:\n     capsule.clastix.io/tenant: system-tenant\n  name: addon-system\nEOF \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u521b\u5efa ns \u524d\u5c31\u5b58\u5728\uff0c\u53ef\u4ee5\u4e4b\u524d\u90e8\u7f72\u8fc7\u76d1\u63a7\uff0c\u4e3a\u4e86\u786e\u4fdd\u540e\u7eed\u4e0d\u4f1a\u62a5\u9519\uff0c\u5148\u6e05\u9664\u65e7\u7684 addon-system \u4e0b\u7684\u8d44\u6e90\uff0c\u5e76\u5220\u9664 vm \u76f8\u5173\u7684 crd\uff0c\u67e5\u627e vm \u7684 crd \u547d\u4ee4\u662f\n",(0,a.kt)("inlineCode",{parentName:"li"},"  kubectl  get  crd | grep victoriametrics.com"))),(0,a.kt)("h4",{id:"5\u751f\u6210-ca-\u8bc1\u4e66\u53ea\u6709-vmselect-\u5f00\u542f\u4e86-sidecar\u652f\u6301-oidc-\u53c2\u6570\u65f6\u9700\u8981"},"5.\u751f\u6210 ca \u8bc1\u4e66(\u53ea\u6709 vmselect \u5f00\u542f\u4e86 sidecar\uff0c\u652f\u6301 oidc \u53c2\u6570\u65f6\u9700\u8981)"),(0,a.kt)("p",null,"kube-rbac-proxy \u652f\u6301 OIDC\uff0cargs \u9700\u8981\u8bbe\u7f6e\u53c2\u6570 oidc-issuer\u3001oidc-clientID\u3001oidc-ca-file\uff0c\u82e5 oidc-server \u90e8\u7f72\u5728 u4a-system \u4e0b\uff0c\u53ef\u4ee5\u8fd9\u6837\u53bb\u83b7\u53d6\u76f8\u5173\u7684\u53c2\u6570\uff0c\u4f9b\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210\u8bc1\u4e66\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get secret -n u4a-system  oidc-server-root-secret  -oyaml > oidc-sidecar-secret.yaml\n\n\u4fee\u6539 yaml \u7684 namesapce \u4e3a addon-system\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 secret\n\nkubectl create -f oidc-sidecar-secret.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"oidcIssuer,oidcClientID \u53c2\u6570\u7684\u83b7\u53d6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl  get cm -n u4a-system   oidc-server -o yaml\n")),(0,a.kt)("p",null,"oidcIssuer \u53d6\u5176\u4e2d\u7684 issuer \u7684\u5185\u5bb9\u5373\u53ef\uff0c\u6bd4\u5982\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://oidc.192.168.90.217.nip.io"},"https://oidc.192.168.90.217.nip.io")),(0,a.kt)("p",null,"oidcClientID \u53d6\u5176\u4e2d\u7684 staticClients \u4e0b\u7684 id \u5185\u5bb9\u5373\u53ef\uff0c\u6bd4\u5982 bff-client"),(0,a.kt)("h4",{id:"6helm-install"},"6.helm install"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c helm \u547d\u4ee4\uff0cmonitoring-operator \u662f\u5e94\u7528\u7684\u540d\u79f0\uff0c\u6839\u636e\u5b9e\u9645\u9700\u8981\u4fee\u6539")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm install monitoring-operator -n addon-system ./\n")),(0,a.kt)("h4",{id:"7\u68c0\u67e5\u7ec4\u4ef6\u662f\u5426\u8fd0\u884c\u6210\u529f"},"7.\u68c0\u67e5\u7ec4\u4ef6\u662f\u5426\u8fd0\u884c\u6210\u529f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get po -n addon-system\n")),(0,a.kt)("p",null,"\u68c0\u67e5\u7684 Pod \u662f\u5426\u6b63\u5e38\u8fd0\u884c\uff1b"),(0,a.kt)("h4",{id:"8\u529f\u80fd\u9a8c\u8bc1"},"8.\u529f\u80fd\u9a8c\u8bc1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u90e8\u7f72\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ingress \u5730\u5740\u53bb\u65b9\u5f0f\u8bbf\u95ee\u6570\u636e,\u67e5\u770b ingress \u7684 hosts \u5730\u5740\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"kubectl  -n addon-system get ingress\n")),(0,a.kt)("p",{parentName:"li"}," \u5982\u679c vmselect \u5f00\u542f\u4e86 nodePort\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e3b\u673a IP\uff1anodePort \u7684\u65b9\u5f0f\u53bb\u8bbf\u95ee\u76d1\u63a7\u6570\u636e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u7528\u6237\u52a0\u5165\u7ec4 observability\uff0c\u8be5\u7ec4\u5177\u6709\u8bbf\u95ee\u76d1\u63a7\u6570\u636e\u7684\u6743\u9650\uff0c\u83b7\u53d6\u7528\u6237 token\uff0c\u8bbf\u95ee\u76d1\u63a7\u6570\u636e\u5e26\u4e0a token\uff0c\u9a8c\u8bc1\u6743\u9650\uff0c\u6ca1\u6709\u6743\u9650\u5219\u51fa\u73b0 Unauthorized;\n\u8bf7\u6c42\u547d\u4ee4\u53c2\u8003\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'curl -k "monitoring.192.168.90.217.nip.io/select/0/prometheus/api/v1/query" -d "query=up" -H"Authorization: bearer eyJhbGciOi..."\n')))))}p.isMDXComponent=!0}}]);