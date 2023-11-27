"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||p;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<p;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const p={sidebar_position:3},l="BFF \u5c42 API \u5f00\u53d1",o={unversionedId:"develop-guid/lowcode-development/development/bff-apis",id:"develop-guid/lowcode-development/development/bff-apis",title:"BFF \u5c42 API \u5f00\u53d1",description:"\u672c\u7ae0\u8282\u5bf9 Kubebb \u7684 BFF \u5c42\u8fdb\u884c\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u5305\u62ec\u5982\u4f55\u4f7f\u7528 GraphQL \u5feb\u901f\u5f00\u53d1 BFF \u5c42\u7684 API",source:"@site/docs/develop-guid/lowcode-development/development/bff-apis.md",sourceDirName:"develop-guid/lowcode-development/development",slug:"/develop-guid/lowcode-development/development/bff-apis",permalink:"/website/docs/develop-guid/lowcode-development/development/bff-apis",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u5c42\u57fa\u4e8e\u4f4e\u7801 Kit \u7684\u5f00\u53d1",permalink:"/website/docs/develop-guid/lowcode-development/development/frontend-low-code"},next:{title:"\u53d1\u5e03\u7ec4\u4ef6",permalink:"/website/docs/develop-guid/lowcode-development/development/develop-hello-world"}},i={},s=[{value:"\u67b6\u6784\u6982\u8ff0",id:"\u67b6\u6784\u6982\u8ff0",level:3},{value:"\u5982\u4f55\u5de5\u4f5c\u7684",id:"\u5982\u4f55\u5de5\u4f5c\u7684",level:3},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:3},{value:"\u63a8\u8350\u5de5\u5177",id:"\u63a8\u8350\u5de5\u5177",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...p}=e;return(0,a.kt)(d,(0,r.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bff-\u5c42-api-\u5f00\u53d1"},"BFF \u5c42 API \u5f00\u53d1"),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u5bf9 Kubebb \u7684 BFF \u5c42\u8fdb\u884c\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u5305\u62ec\u5982\u4f55\u4f7f\u7528 GraphQL \u5feb\u901f\u5f00\u53d1 BFF \u5c42\u7684 API"),(0,a.kt)("h3",{id:"\u67b6\u6784\u6982\u8ff0"},"\u67b6\u6784\u6982\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BFF\u67b6\u6784\u56fe",src:n(8407).Z,width:"601",height:"531"})),(0,a.kt)("p",null,"BFF \u5c42\u662f\u91c7\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/"},"NestJS")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.cn/"},"GraphQL"),"\u6784\u5efa\u7684\u4e00\u4e2a\u72ec\u7acb\u7684",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about"},"NodeJs"),"\u670d\u52a1\uff0c\u4e3b\u8981\u529f\u80fd\u4e3a\u805a\u5408K8S API\u540e\uff0c\u5bf9\u5916\u63d0\u4f9b\u4e00\u7cfb\u5217OpenAPI\uff0c\u6ee1\u8db3\u524d\u7aef\u9700\u8981\u7684\u3001\u65e0\u5197\u4f59\u3001\u53ef\u9884\u6d4b\u7684\u6570\u636e\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u5de5\u4f5c\u7684"},"\u5982\u4f55\u5de5\u4f5c\u7684"),(0,a.kt)("p",null,"\u5176\u901a\u8fc7 NestJS \u642d\u5efa\u4e86\u4e00\u4e2aNodeJs\u670d\u52a1\uff0c\u4ee5\u63d2\u4ef6\u7684\u5f62\u5f0f\u63a5\u5165 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/"},"Apollo Server")," \u4f5c\u4e3a GraphQL server\uff0c\u63d0\u4f9b\u5ba2\u6237\u7aef\u4f7f\u7528\u7684 GraphQL API\u3002BFF\u4f5c\u4e3a\u627f\u63a5\u524d\u540e\u7aef\u7684\u6865\u6881\uff0c\u901a\u8fc7\u7edf\u4e00\u767b\u5f55\u9875\u9762\uff0c\u4ece\u540e\u7aef\u83b7\u53d6id-token\uff0c\u7528\u6b64token\u8fde\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"K8s")," APIServer\uff0c\u4ece\u800c\u64cd\u4f5cK8s\u8d44\u6e90\uff08CRUD\uff09\uff1b\u53e6\u5916\u4e5f\u53ef\u6269\u5c55\u63a5\u5165\u5176\u4ed6\u670d\u52a1\uff08\u5982",(0,a.kt)("a",{parentName:"p",href:"https://minio.org.cn/"},"MinIO"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://chartmuseum.com/"},"ChartMuseum"),"\u7b49\uff09\u3002"),(0,a.kt)("h3",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u65b0\u5efa NestJS \u9879\u76ee\uff08TypeScript & GraphQL\uff09"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g @nestjs/cli\n\nnest new hello-world --strict\n\npnpm add @nestjs/graphql @nestjs/apollo @apollo/server graphql\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u63a5\u5165 GraphQL"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\x3c!-- src/app.module.ts --\x3e\n...\n@Module({\n  imports: [\n    GraphQLModule.forRoot<ApolloDriverConfig>({\n      path: '/bff',\n      introspection: true,\n      driver: ApolloDriver,\n      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),\n      sortSchema: true,\n      playground: {\n        settings: {\n          'request.credentials': 'same-origin',\n          'tracing.hideTracingResponse': true,\n          'queryPlan.hideQueryPlanResponse': true,\n          'schema.polling.interval': 1000 * 60,\n        },\n      },\n      subscriptions: {\n        'graphql-ws': {\n          path: '/bff',\n        },\n      },\n    }),\n    ExampleModule,\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\n...\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5f00\u53d1\u4e00\u4e2a\u65b0\u7684GraphQL (code first)\u529f\u80fd\u6a21\u5757"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"nest g res example\n")),(0,a.kt)("p",{parentName:"li"},"\u7565\u5fae\u4fee\u6539\u540e\u8fd0\u884c\u670d\u52a1\uff1ahttp://localhost:3000/bff"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u8fd0\u884c\u540e\u53ef\u67e5\u770b\u8c03\u8bd5",src:n(805).Z,width:"3018",height:"1730"})))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u751f\u6210SDK"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://the-guild.dev/blog/graphql-codegen-plugin-typescript-swr"},"graphql-codegen-plugin-typescript-swr")," \u751f\u6210\u53ef\u4f9bReact Hook\u76f4\u63a5\u8c03\u7528API\u7684SDK\u3002\u6b64\u5de5\u5177\u6574\u5408\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/codegen"},"GraphQL Code Generator")," (\u5c06 GraphQL schema \u81ea\u52a8\u751f\u6210 GraphQL operations\uff08Typed Queries, Mutations and, Subscriptions\uff09)\u548c ",(0,a.kt)("a",{parentName:"p",href:"https://swr.vercel.app/"},"SWR"),"\u3002")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-graphql-request graphql-codegen-plugin-typescript-swr\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"codegen.yml")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\x3c!-- codegen.yml --\x3e\noverwrite: true\ngenerates:\n  static/client-sdk/sdk.ts:\n    schema: 'http://localhost:3000/bff'\n    documents: 'src/**/*.gql'\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-graphql-request\n      - plugin-typescript-swr\nconfig:\n  autogenSWRKey: true\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u5199",(0,a.kt)("inlineCode",{parentName:"p"},".gql"),"\uff0c\u5b9a\u4e49\u524d\u7aef\u53ef\u76f4\u63a5\u8c03\u7528"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// src/example/example.gql\n# \u83b7\u53d6\u6837\u4f8b\u8be6\u60c5\nquery getExample($id:Int!) {\n  example(id: $id) {\n    id\n  }\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6267\u884c"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx graphql-codegen\n")))))),(0,a.kt)("h3",{id:"\u63a8\u8350\u5de5\u5177"},"\u63a8\u8350\u5de5\u5177"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/dayuy/ast-auto-generate"},"generate-nest-module")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u53ef\u5feb\u901f\u751f\u6210\u4e00\u4e2aK8s \u8d44\u6e90\u7684 CRUD \u6a21\u5757\u4ee3\u7801\u3002\u5df2\u88ab\u5e94\u7528\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubebb/component-store/tree/main/packages/bff-server/src/subscription"},"component-store"),"\u7684\u5f00\u53d1\u4e2d\u3002")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5\nnpm install -g generate-nest-module\n\n# \u4f7f\u7528\ngennest g res subscription\n")))))}m.isMDXComponent=!0},8407:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bff_lowcode-77e024bcaba385acbdd2199cdde51a3d.png"},805:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/playground_graphql-8d597629c7d99fd04d027528b00d343a.jpg"}}]);