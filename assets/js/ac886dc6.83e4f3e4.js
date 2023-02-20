"use strict";(self.webpackChunkmor_site=self.webpackChunkmor_site||[]).push([[7378],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=s(n),u=i,d=k["".concat(o,".").concat(u)]||k[u]||m[u]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(4778),i=(n(9496),n(9613));const a={},l="MorJS API",p={unversionedId:"api/engineering-mor",id:"api/engineering-mor",title:"MorJS API",description:"tsTransformerFactory(visitor)",source:"@site/docs/api/engineering-mor.md",sourceDirName:"api",slug:"/api/engineering-mor",permalink:"/api/engineering-mor",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Takin API",permalink:"/api/engineering-takin"},next:{title:"Runtime Core",permalink:"/api/runtime-core"}},o={},s=[{value:"tsTransformerFactory(visitor)",id:"tstransformerfactoryvisitor",level:2},{value:"cssProcessorFactory(name, processor)",id:"cssprocessorfactoryname-processor",level:2},{value:"validKeysMessage(keys)",id:"validkeysmessagekeys",level:2},{value:"hexToRgb(hex)",id:"hextorgbhex",level:2},{value:"isLightColor(r, g, b)",id:"islightcolorr-g-b",level:2},{value:"setNPMBinPATH(projectPath, env)",id:"setnpmbinpathprojectpath-env",level:2},{value:"generateQrcodeForTerminal(input)",id:"generateqrcodeforterminalinput",level:2},{value:"expandExtsWithConditionalExt(exts, conditionalExts)",id:"expandextswithconditionalextexts-conditionalexts",level:2},{value:"WebpackWrapper",id:"webpackwrapper",level:2},{value:"WebpackChain",id:"webpackchain",level:2},{value:"webpack",id:"webpack",level:2},{value:"glob",id:"glob",level:2},{value:"posthtml",id:"posthtml",level:2},{value:"typescript",id:"typescript",level:2},{value:"micromatch",id:"micromatch",level:2},{value:"postcss",id:"postcss",level:2},{value:"slash",id:"slash",level:2},{value:"takin",id:"takin",level:2},{value:"pRetry",id:"pretry",level:2},{value:"pQueue",id:"pqueue",level:2},{value:"cjsToEsmTransformer",id:"cjstoesmtransformer",level:2}],c={toc:s},k="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"morjs-api"},"MorJS API"),(0,i.kt)("h2",{id:"tstransformerfactoryvisitor"},"tsTransformerFactory(visitor)"),(0,i.kt)("p",null,"\u751f\u6210 ts \u7684 transformer \u63d2\u4ef6\uff0c\u63d0\u4f9b visitor \u4f5c\u4e3a\u53c2\u6570\uff0c\u904d\u5386\u6240\u6709 Node \u8282\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"visitor"),": \u81ea\u5b9a\u4e49\u8282\u70b9 visitor")),(0,i.kt)("h2",{id:"cssprocessorfactoryname-processor"},"cssProcessorFactory(name, processor)"),(0,i.kt)("p",null,"postcss \u63d2\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": css \u5904\u7406\u5668\u4f5c\u4e3a postcss \u63d2\u4ef6\u7684\u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"processor"),": \u81ea\u5b9a\u4e49 css \u5904\u7406\u5668")),(0,i.kt)("h2",{id:"validkeysmessagekeys"},"validKeysMessage(keys)"),(0,i.kt)("p",null,"\u57fa\u4e8e\u53ef\u9009\u503c\u751f\u6210\u63cf\u8ff0\u4fe1\u606f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keys"),": \u53ef\u9009\u503c")),(0,i.kt)("h2",{id:"hextorgbhex"},"hexToRgb(hex)"),(0,i.kt)("p",null,"\u5c06 16 \u8fdb\u5236\u7684\u989c\u8272\u503c\u8f6c\u6362\u6210 rgb \u683c\u5f0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hex"),": 16 \u8fdb\u5236\u7684\u989c\u8272\u503c")),(0,i.kt)("h2",{id:"islightcolorr-g-b"},"isLightColor(r, g, b)"),(0,i.kt)("p",null,"\u662f\u5426\u662f\u6d45\u8272"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"r"),": rgb \u8272\u503c\u533a\u57df\u4e2d\u7684 red"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"g"),": rgb \u8272\u503c\u533a\u57df\u4e2d\u7684 green"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"b"),": rgb \u8272\u503c\u533a\u57df\u4e2d\u7684 blue")),(0,i.kt)("h2",{id:"setnpmbinpathprojectpath-env"},"setNPMBinPATH(projectPath, env)"),(0,i.kt)("p",null,"\u8bbe\u7f6e NPM .bin \u8def\u5f84\u4ee5\u590d\u7528 npm bin \u6587\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"projectPath"),": \u9879\u76ee\u8def\u5f84"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"env"),": \u73af\u5883\u53d8\u91cf")),(0,i.kt)("h2",{id:"generateqrcodeforterminalinput"},"generateQrcodeForTerminal(input)"),(0,i.kt)("p",null,"\u751f\u6210\u4e8c\u7ef4\u7801\u5b57\u7b26\u4e32"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input"),": \u7528\u4e8e\u751f\u6210\u4e8c\u7ef4\u7801\u7684\u5b57\u7b26\u4e32")),(0,i.kt)("h2",{id:"expandextswithconditionalextexts-conditionalexts"},"expandExtsWithConditionalExt(exts, conditionalExts)"),(0,i.kt)("p",null,"\u5c06\u666e\u901a\u540e\u7f00\u6269\u5c55\u4e3a\u666e\u901a\u540e\u7f00\u548c\u5e26\u6761\u4ef6\u540e\u7f00\u7684\u96c6\u5408\uff0c\u6761\u4ef6\u540e\u7f00\u4f18\u5148\u7ea7\u9ad8\u4e8e\u666e\u901a\u540e\u7f00"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exts"),": \u540e\u7f00\u5217\u8868"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"conditionalExts"),": \u6761\u4ef6\u540e\u7f00")),(0,i.kt)("h2",{id:"webpackwrapper"},"WebpackWrapper"),(0,i.kt)("p",null,"webpack \u5c01\u88c5\uff0c\u4e3b\u8981\u76ee\u7684\u662f \u5171\u7528 webpack \u7684\u80fd\u529b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WebpackWrapper } from '@morjs/cli'\n\nconst webpack = new WebpackWrapper()\n")),(0,i.kt)("h2",{id:"webpackchain"},"WebpackChain"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-chain-5")," \u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"),(0,i.kt)("h2",{id:"webpack"},"webpack"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack")," \u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"),(0,i.kt)("h2",{id:"glob"},"glob"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"takin")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"fastGlob")," \u5bf9\u8c61\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"),(0,i.kt)("h2",{id:"posthtml"},"posthtml"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"posthtml")," \u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"),(0,i.kt)("h2",{id:"typescript"},"typescript"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript")," \u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"),(0,i.kt)("h2",{id:"micromatch"},"micromatch"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"micromatch")," \u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"),(0,i.kt)("h2",{id:"postcss"},"postcss"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"postcss")," \u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"),(0,i.kt)("h2",{id:"slash"},"slash"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"slash")," \u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"),(0,i.kt)("h2",{id:"takin"},"takin"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"takin")," \u7684\u4f9d\u8d56\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"),(0,i.kt)("h2",{id:"pretry"},"pRetry"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"p-retry")," \u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"),(0,i.kt)("h2",{id:"pqueue"},"pQueue"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"p-queue")," \u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"),(0,i.kt)("h2",{id:"cjstoesmtransformer"},"cjsToEsmTransformer"),(0,i.kt)("p",null,"\u5f15\u7528\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"cjstoesm")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"cjsToEsmTransformer")," \u5bf9\u8c61\uff0c\u76f4\u63a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," \u7ed9\u5f00\u53d1\u8005\u5f15\u7528"))}m.isMDXComponent=!0}}]);