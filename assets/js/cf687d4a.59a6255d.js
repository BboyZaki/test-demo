"use strict";(self.webpackChunkmor_site=self.webpackChunkmor_site||[]).push([[702],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(4778),a=(n(9496),n(9613));const i={},l="\u8def\u7531\u8bbe\u7f6e",o={unversionedId:"web/introduction/route",id:"web/introduction/route",title:"\u8def\u7531\u8bbe\u7f6e",description:"Mor \u5c06\u5c0f\u7a0b\u5e8f page/component \u8f6c\u5316\u6210 react component\uff0c\u9700\u8981\u4e00\u5957 SPA \u8def\u7531\u89e3\u51b3\u65b9\u6848\uff0c\u7ba1\u7406\u9875\u9762\u5207\u6362\uff0c\u9875\u9762\u7684\u5207\u6362\u5176\u5b9e\u5c31\u662f\u4e0d\u540c\u7ec4\u4ef6\u7684\u5207\u6362\u3002",source:"@site/docs/web/introduction/route.md",sourceDirName:"web/introduction",slug:"/web/introduction/route",permalink:"/web/introduction/route",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"\u57fa\u7840\u914d\u7f6e",permalink:"/web/introduction/basic"},next:{title:"\u81ea\u5b9a\u4e49 Api \u5168\u5c40\u53d8\u91cf\u540d\u79f0",permalink:"/web/support/custom-my"}},p={},u=[{value:"\u914d\u7f6e\u8def\u7531",id:"\u914d\u7f6e\u8def\u7531",level:2},{value:"\u53c2\u6570\u4ecb\u7ecd",id:"\u53c2\u6570\u4ecb\u7ecd",level:2},{value:"mode",id:"mode",level:3},{value:"baseName",id:"basename",level:3},{value:"customRoutes",id:"customroutes",level:3},{value:"\u8def\u7531 API",id:"\u8def\u7531-api",level:2}],m={toc:u},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8def\u7531\u8bbe\u7f6e"},"\u8def\u7531\u8bbe\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Mor")," \u5c06\u5c0f\u7a0b\u5e8f ",(0,a.kt)("inlineCode",{parentName:"p"},"page/component")," \u8f6c\u5316\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"react component"),"\uff0c\u9700\u8981\u4e00\u5957 ",(0,a.kt)("inlineCode",{parentName:"p"},"SPA")," \u8def\u7531\u89e3\u51b3\u65b9\u6848\uff0c\u7ba1\u7406\u9875\u9762\u5207\u6362\uff0c\u9875\u9762\u7684\u5207\u6362\u5176\u5b9e\u5c31\u662f\u4e0d\u540c\u7ec4\u4ef6\u7684\u5207\u6362\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u8def\u7531"},"\u914d\u7f6e\u8def\u7531"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u6309\u7167",(0,a.kt)("inlineCode",{parentName:"p"},"Mor"),"\u5feb\u901f\u4e0a\u624b \u63a5\u5165\u9879\u76ee\u540e\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.json")," \u4e2d\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"router")," \u5b57\u6bb5\u3002")),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"router": {\n   "mode": "browser",\n   "baseName": "/mor",\n    "customRoutes": {\n      "/pages/index/index": "/index"\n    }\n }\n')),(0,a.kt)("h2",{id:"\u53c2\u6570\u4ecb\u7ecd"},"\u53c2\u6570\u4ecb\u7ecd"),(0,a.kt)("h3",{id:"mode"},"mode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u9009\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"hash | browser")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"browser")),(0,a.kt)("li",{parentName:"ul"},"\u4ecb\u7ecd: \u8def\u7531\u6a21\u5f0f\u5207\u6362")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// app.json\n"router": {\n    "mode": "browser",\n    ....\n }\n')),(0,a.kt)("p",null,"\u5730\u5740\u680f\u5206\u522b\u5c55\u793a\u4e3a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://{{domain}}/#/pages/index/index"),"\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"hash")," \u6a21\u5f0f\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://{{domain}}/pages/index/index"),"\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"browser")," \u6a21\u5f0f\uff09")),(0,a.kt)("h3",{id:"basename"},"baseName"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a''"),(0,a.kt)("li",{parentName:"ul"},"\u4ecb\u7ecd\uff1a\u8def\u7531\u57fa\u7840\u8def\u5f84")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// app.json\n"router": {\n    "baseName": "/mor",\n    ....\n }\n')),(0,a.kt)("p",null,"\u5730\u5740\u680f\u5206\u522b\u5c55\u793a\u4e3a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://{{domain}}/#/mor/pages/index/index"),"\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"hash")," \u6a21\u5f0f\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://{{domain}}/mor/pages/index/index"),"\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"browser")," \u6a21\u5f0f\uff09")),(0,a.kt)("h3",{id:"customroutes"},"customRoutes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"{}")),(0,a.kt)("li",{parentName:"ul"},"\u4ecb\u7ecd\uff1a\u81ea\u5b9a\u4e49\u8def\u7531")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// app.json\n"router": {\n  "customRoutes": {\n    "/pages/index/index": "/index"\n  }\n }\n')),(0,a.kt)("p",null,"\u6839\u636e\u914d\u7f6e\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"my.navigateTo({ url: '/pages/index.index'})")," \u540e\uff0c"),(0,a.kt)("p",null,"\u5730\u5740\u680f\u5206\u522b\u5c55\u793a\u4e3a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://{{domain}}/#/index"),"\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"hash")," \u6a21\u5f0f\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://{{domain}}/index"),"\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"browser")," \u6a21\u5f0f\uff09")),(0,a.kt)("h2",{id:"\u8def\u7531-api"},"\u8def\u7531 API"),(0,a.kt)("p",null,"\u76ee\u524d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u9875\u9762\u8def\u7531\u76f8\u5173\u65b9\u6cd5\u5747\u5df2\u5b9e\u73b0\uff0c\u5305\u62ec:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"navigateTo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"redirectTo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"relaunch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"switchTab")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"navigateBack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getCurrentPages"))))}s.isMDXComponent=!0}}]);