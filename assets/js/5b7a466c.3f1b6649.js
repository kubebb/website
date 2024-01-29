"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=o,y=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:5},a="\u751f\u6210 oidc-proxy \u7684\u8bc1\u4e66",s={unversionedId:"develop-guide/building-base/configuration/issue-oidc-proxy-certs",id:"develop-guide/building-base/configuration/issue-oidc-proxy-certs",title:"\u751f\u6210 oidc-proxy \u7684\u8bc1\u4e66",description:"\u4f7f\u7528\u573a\u666f\uff1a",source:"@site/docs/develop-guide/building-base/configuration/issue-oidc-proxy-certs.md",sourceDirName:"develop-guide/building-base/configuration",slug:"/develop-guide/building-base/configuration/issue-oidc-proxy-certs",permalink:"/website/docs/develop-guide/building-base/configuration/issue-oidc-proxy-certs",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u6210\u5355\u70b9\u767b\u5f55",permalink:"/website/docs/develop-guide/building-base/configuration/oidc-integration"},next:{title:"\u4f4e\u7801 Kit",permalink:"/website/docs/category/\u4f4e\u7801-kit"}},c={},l=[{value:"\u4f7f\u7528\u573a\u666f\uff1a",id:"\u4f7f\u7528\u573a\u666f",level:4},{value:"\u524d\u63d0\u6761\u4ef6\uff1a",id:"\u524d\u63d0\u6761\u4ef6",level:4},{value:"\u5177\u4f53\u6b65\u9aa4",id:"\u5177\u4f53\u6b65\u9aa4",level:4}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u751f\u6210-oidc-proxy-\u7684\u8bc1\u4e66"},"\u751f\u6210 oidc-proxy \u7684\u8bc1\u4e66"),(0,o.kt)("h4",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f\uff1a"),(0,o.kt)("p",null,"\u5982\u679c\u65e0\u6cd5\u83b7\u53d6\u5230 Kubernetes \u7684 ca \u8bc1\u4e66\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u9881\u53d1 kube-oidc-proxy \u7684\u8bc1\u4e66"),(0,o.kt)("h4",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6\uff1a"),(0,o.kt)("p",null,"OpenSSL tools\nKubernetes cluster"),(0,o.kt)("h4",{id:"\u5177\u4f53\u6b65\u9aa4"},"\u5177\u4f53\u6b65\u9aa4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"save the openssl.cnf")),(0,o.kt)("p",null,"[ req ]","\ndistinguished_name = dn\n","[ dn ]","\nCN = kube-oidc-proxy\n","[ req_ext ]","\nsubjectAltName = @alt_names\n","[ alt_names ]","\nDNS.2 = kube-oidc-proxy\nDNS.3 = kube-oidc-proxy.addon-system\nDNS.4 = kube-oidc-proxy.addon-system.svc\nIP.1 = 172.22.99.227  # need update"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"generate the private key of oidc-proxy")),(0,o.kt)("p",null,"openssl genrsa -out server.key 2048"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"generate the sever.csr of oidc-proxy")),(0,o.kt)("p",null,"openssl req -new \\",(0,o.kt)("br",{parentName:"p"}),"\n",'-sha256 \\\n-key server.key \\\n-subj "/CN=kube-oidc-proxy" \\\n-reqexts req_ext \\\n-config openssl.cnf \\\n-out server.csr'),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"generate the base64 content of server.csr")),(0,o.kt)("p",null,'cat server.csr | base64 | tr -d "\\n"'),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"create certificateSigningRequest in kubernetes cluster for oidc-proxy")),(0,o.kt)("p",null,"the request value need to replace the output content generated by Step 4 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat <<EOF | kubectl apply -f -\napiVersion: certificates.k8s.io/v1\nkind: CertificateSigningRequest\nmetadata:\n  name: myuser\nspec:\n  request: <need replace by the content generated by step 4>\n  signerName: kubernetes.io/kube-apiserver-client\n  usages:\n  - client auth\nEOF\n")),(0,o.kt)("p",null,"6 approval the certificatesigningRequest"),(0,o.kt)("p",null,"kubectl certificate approve myuser"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"get the certifcate of oidc-proxy issuer by kubernetes cluster")),(0,o.kt)("p",null,"kubectl get csr myuser -oyaml | grep certificate: | awk '{print $2}' |base64 -d > ./server.cert"),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"after the step above, you get the server.key and server.cert and can rename the server.key and server.cert that you want. you can create secret for oidc-proxy by command:")),(0,o.kt)("p",null,"kubectl create secret"))}d.isMDXComponent=!0}}]);