"use strict";(self.webpackChunkmor_site=self.webpackChunkmor_site||[]).push([[7360],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return n?o.createElement(k,i(i({ref:t},s),{},{components:n})):o.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[c]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var o=n(4778),a=(n(9496),n(9613));const l={title:"\u5fae\u4fe1 DSL"},i="\u5f00\u53d1\u4e00\u4e2a To-Do List (\u5fae\u4fe1 DSL)",r={unversionedId:"guides/introduction/how-to-develop-todo-list_wechat",id:"guides/introduction/how-to-develop-todo-list_wechat",title:"\u5fae\u4fe1 DSL",description:"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u5e26\u9886\u4f60\u4f7f\u7528 MorJS\uff0c\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684 To-Do List \u5c0f\u7a0b\u5e8f\uff0c\u5e76\u90e8\u7f72\u5230\u4e0d\u540c\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u3002",source:"@site/docs/guides/introduction/how-to-develop-todo-list_wechat.md",sourceDirName:"guides/introduction",slug:"/guides/introduction/how-to-develop-todo-list_wechat",permalink:"/guides/introduction/how-to-develop-todo-list_wechat",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5fae\u4fe1 DSL"},sidebar:"documentSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/guides/introduction/getting-started"},next:{title:"\u652f\u4ed8\u5b9d DSL",permalink:"/guides/introduction/how-to-develop-todo-list"}},d={},p=[{value:"\u6210\u679c\u5c55\u793a",id:"\u6210\u679c\u5c55\u793a",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u914d\u7f6e\u5c0f\u7a0b\u5e8f",id:"\u914d\u7f6e\u5c0f\u7a0b\u5e8f",level:2},{value:"\u5b9e\u4f5c\u9875\u9762\u7ec4\u4ef6",id:"\u5b9e\u4f5c\u9875\u9762\u7ec4\u4ef6",level:2},{value:"\u6dfb\u52a0\u9875\u9762",id:"\u6dfb\u52a0\u9875\u9762",level:3},{value:"\u9875\u9762\u914d\u7f6e",id:"\u9875\u9762\u914d\u7f6e",level:4},{value:"\u9875\u9762\u529f\u80fd",id:"\u9875\u9762\u529f\u80fd",level:4},{value:"\u6dfb\u52a0\u7ec4\u4ef6",id:"\u6dfb\u52a0\u7ec4\u4ef6",level:3},{value:"\u7ec4\u4ef6\u914d\u7f6e",id:"\u7ec4\u4ef6\u914d\u7f6e",level:4},{value:"\u7ec4\u4ef6\u529f\u80fd",id:"\u7ec4\u4ef6\u529f\u80fd",level:4}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5f00\u53d1\u4e00\u4e2a-to-do-list-\u5fae\u4fe1-dsl"},"\u5f00\u53d1\u4e00\u4e2a To-Do List (\u5fae\u4fe1 DSL)"),(0,a.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u5e26\u9886\u4f60\u4f7f\u7528 MorJS\uff0c\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684 To-Do List \u5c0f\u7a0b\u5e8f\uff0c\u5e76\u90e8\u7f72\u5230\u4e0d\u540c\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u3002"),(0,a.kt)("h2",{id:"\u6210\u679c\u5c55\u793a"},"\u6210\u679c\u5c55\u793a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN01Up9NI81bbGJFnVk7q_!!6000000003483-2-tps-2880-1800.png"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("img",{src:"https://img.alicdn.com/imgextra/i4/O1CN019WhvfV26YkDmGaClR_!!6000000007674-2-tps-2880-1800.png"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b57\u8282(\u6296\u97f3)\u5c0f\u7a0b\u5e8f"),(0,a.kt)("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN01N6wbYC1gGicgOgPyf_!!6000000004115-2-tps-2880-1800.png"}))),(0,a.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("p",null,"\u9996\u5148\u9700\u8981\u6709 node\uff0c\u5e76\u786e\u4fdd node \u7248\u672c\u4e3a 12.13.0 \u6216\u4ee5\u4e0a\uff0c\u8be5\u90e8\u5206\u7684\u5185\u5bb9\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/guides/introduction/getting-started"},"\u5feb\u901f\u4e0a\u624b")," \u4e2d\u5df2\u7ecf\u63d0\u5230\u4e86\uff0c\u6211\u4eec\u8fd9\u91cc\u5c31\u4e0d\u518d\u8d58\u8ff0\u4e86\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 node -v \u6765\u67e5\u770b\u5f53\u524d node \u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ myapp node -v\nv14.19.3\n")),(0,a.kt)("p",null,"\u5f85\u4f1a\u513f\u6211\u4eec\u9700\u8981\u90e8\u7f72\u5230\u4e0d\u540c\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\uff0c\u6240\u4ee5\u9700\u8981\u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u7684 IDE \u6a21\u62df\u5668\u8fdb\u884c\u8c03\u8bd5\uff0c\u4ee5\u4e0b\u662f\u5404\u5c0f\u7a0b\u5e8f IDE \u4e0b\u8f7d\u5730\u5740\uff0c\u60a8\u53ea\u9700\u8981\u4e0b\u8f7d\u9700\u8981\u7684\u5e73\u53f0\u7684\u5f00\u53d1\u8005\u5de5\u5177\u5373\u53ef\uff0c\u672c\u6587\u4ee5\u652f\u4ed8\u5b9d\u5f00\u53d1\u8005\u5de5\u5177\u4e3a\u4f8b\u3002"),(0,a.kt)("img",{src:"https://img.alicdn.com/imgextra/i4/O1CN01B5U2I023Vae3Lf8aI_!!6000000007261-0-tps-1600-1200.jpg"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opendocs.alipay.com/mini/ide/download"},"\u652f\u4ed8\u5b9d\u5f00\u53d1\u8005\u5de5\u5177")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/developer-instrument/download/developer-instrument-update-and-download"},"\u6296\u97f3\u5f00\u53d1\u8005\u5de5\u5177")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://smartprogram.baidu.com/docs/develop/devtools/history/"},"\u767e\u5ea6\u5f00\u53d1\u8005\u5de5\u5177")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://q.qq.com/wiki/tools/devtool/"},"QQ \u5f00\u53d1\u8005\u5de5\u5177")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mp.kuaishou.com/docs/develop/developerTools/downloadPath.html"},"\u5feb\u624b\u5f00\u53d1\u8005\u5de5\u5177"))),(0,a.kt)("h2",{id:"\u914d\u7f6e\u5c0f\u7a0b\u5e8f"},"\u914d\u7f6e\u5c0f\u7a0b\u5e8f"),(0,a.kt)("p",null,"\u6253\u5f00\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 mor.config.ts \u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u662f mor \u9879\u76ee\u7684\u4e3b\u8981\u914d\u7f6e\u6587\u4ef6\uff0c\u6839\u636e ",(0,a.kt)("a",{parentName:"p",href:"/guides/introduction/getting-started"},"\u5feb\u901f\u4e0a\u624b")," \u521d\u59cb\u5316\u751f\u6210\u7684\u914d\u7f6e\u6709\u4e24\u4efd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"target")," \u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"alipay")," \u7684\uff0c\u4ee3\u8868\u6211\u4eec\u7f16\u8bd1\u76ee\u6807\u662f\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\uff0c\u8fd9\u4e00\u4efd\u914d\u7f6e\u9ed8\u8ba4\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"ali")),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4efd ",(0,a.kt)("inlineCode",{parentName:"li"},"target")," \u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"wechat")," \u7684\uff0c\u4ee3\u8868\u6211\u4eec\u7f16\u8bd1\u76ee\u6807\u662f\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\uff0c\u8fd9\u4e00\u4efd\u914d\u7f6e\u9ed8\u8ba4\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"wechat"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { defineConfig } from '@morjs/cli'\n\nexport default defineConfig([\n  {\n    name: 'wechat',\n    sourceType: 'wechat',\n    target: 'wechat',\n    compileType: 'miniprogram',\n    compileMode: 'bundle'\n  },\n  {\n    name: 'ali',\n    sourceType: 'wechat',\n    target: 'alipay',\n    compileType: 'miniprogram',\n    compileMode: 'bundle'\n  }\n])\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u6dfb\u52a0\u4e00\u4efd\u5b57\u8282(\u6296\u97f3)\u5c0f\u7a0b\u5e8f\u7684\u914d\u7f6e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u660e\u786e\u6211\u4eec\u7f16\u8bd1\u76ee\u6807\u4e3a\u5b57\u8282\u5c0f\u7a0b\u5e8f\uff0c\u9700\u8981\u628a ",(0,a.kt)("inlineCode",{parentName:"li"},"target")," \u503c\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"bytedance")),(0,a.kt)("li",{parentName:"ol"},"\u7136\u540e\u518d\u7ed9\u8fd9\u4efd\u914d\u7f6e\u8d77\u4e00\u4e2a\u540d\u5b57\uff0c\u5c31\u53eb ",(0,a.kt)("inlineCode",{parentName:"li"},"douyin")," \uff0c\u628a ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"douyin")),(0,a.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u7684\u914d\u7f6e\u5c31\u5148\u590d\u5236\u4e00\u4efd\uff0c\u66f4\u591a\u5177\u4f53\u914d\u7f6e\u9879\u53ef\u67e5\u9605 ",(0,a.kt)("a",{parentName:"li",href:"/guides/basic/config"},"MorJS \u57fa\u7840 - \u914d\u7f6e"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { defineConfig } from '@morjs/cli'\n\nexport default defineConfig([\n  ...\n  {\n    name: 'douyin', // \u914d\u7f6e\u540d\u79f0\n    sourceType: 'wechat', // \u6e90\u7801 DSL \u7c7b\u578b\n    target: 'bytedance', // \u7f16\u8bd1\u76ee\u6807\u5e73\u53f0\n    compileType: 'miniprogram', // \u7f16\u8bd1\u7c7b\u578b\n    compileMode: 'bundle', // \u7f16\u8bd1\u6a21\u5f0f\n  }\n]\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," \u547d\u4ee4\u884c\u6ca1\u6709\u5173\u95ed\u7684\u8bdd\uff0c\u4f60\u4f1a\u53d1\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/")," \u4e0b\u591a\u51fa\u6765\u4e00\u4efd ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/bytedance")," \u7684\u6587\u4ef6\uff0c\u606d\u559c\u4f60\u5b8c\u6210\u4e86\u5b57\u8282(\u6296\u97f3)\u7aef\u7684\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u6784\u5efa\uff0c\u8fd9\u5c31\u662f\u7528\u4e8e\u6296\u97f3\u7aef\u7684\u5f00\u53d1\u4ea7\u7269\u5566~ \ud83c\udf89 \ud83c\udf89 \ud83c\udf89"),(0,a.kt)("h2",{id:"\u5b9e\u4f5c\u9875\u9762\u7ec4\u4ef6"},"\u5b9e\u4f5c\u9875\u9762\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u5bf9\u76ee\u524d\u7684\u521d\u59cb\u5316\u9879\u76ee\u6dfb\u52a0\u9875\u9762\u548c\u7ec4\u4ef6\u3002\u5982\u4f60\u6240\u89c1\uff0c\u521d\u59cb\u5316\u540e\u7684\u9875\u9762\u5df2\u7ecf\u5177\u5907\u4e86\u663e\u793a Tode List \u548c\u6dfb\u52a0 Todo \u529f\u80fd\uff0c\u4e0b\u9762\u6211\u4eec\u4f7f\u7528\u6dfb\u52a0\u9875\u9762\u6765\u5b9e\u73b0\u7f16\u8f91 Todo \u529f\u80fd\uff0c\u4f7f\u7528\u6dfb\u52a0\u7ec4\u4ef6\u6765\u5b9e\u73b0\u5220\u9664 Todo \u529f\u80fd\u3002"),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u9875\u9762"},"\u6dfb\u52a0\u9875\u9762"),(0,a.kt)("h4",{id:"\u9875\u9762\u914d\u7f6e"},"\u9875\u9762\u914d\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"src/pages")," \u4e0b\u521b\u5efa\u6587\u4ef6\u5939 ",(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/edits-todo")," \u7528\u4e8e\u5b58\u653e\u7f16\u8f91 Todo \u529f\u80fd\u76f8\u5173\u7684\u9875\u9762"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u8be5\u6587\u4ef6\u5939\u4e0b\u521b\u5efa\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u56db\u4e2a\u57fa\u7840\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"edits-todo.wxml")," ",(0,a.kt)("inlineCode",{parentName:"li"},"edits-todo.less")," ",(0,a.kt)("inlineCode",{parentName:"li"},"edits-todo.ts")," ",(0,a.kt)("inlineCode",{parentName:"li"},"edits-todo.json")),(0,a.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"li"},"edits-todo.json")," \u6587\u4ef6\u8fdb\u884c\u7f16\u8bd1\uff0c\u5148\u5199\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"{}")," \u4f5c\u4e3a\u7a7a\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u9875\u9762\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"src/app.json")," \u4e2d\u6dfb\u52a0\u8be5\u9875\u9762\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"pages")," \u4e2d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pages": [\n    "pages/todos/todos",\n    "pages/add-todo/add-todo",\n    "pages/edit-todo/edit-todo"\n  ]\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"xml")," \u6587\u4ef6\uff0c\u82e5\u9879\u76ee\u521d\u59cb\u5316\u65f6\u9009\u62e9\u7684\u662f\u652f\u4ed8\u5b9d DSL\uff0c\u9875\u9762\u7684\u57fa\u7840\u6587\u4ef6\u53ef\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"edits-todo.axml")),(0,a.kt)("li",{parentName:"ol"},"\u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"css")," \u6587\u4ef6\uff0cMorJS \u652f\u6301 wxss/acss/less/scss \u6587\u4ef6\u7c7b\u578b\uff0c\u5f00\u53d1\u8005\u53ef\u9009\u62e9\u9002\u5408\u7684\u6587\u4ef6\u683c\u5f0f\u8fdb\u884c\u7f16\u5199"))),(0,a.kt)("h4",{id:"\u9875\u9762\u529f\u80fd"},"\u9875\u9762\u529f\u80fd"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u5165\u53e3\uff1a\u9996\u9875 ",(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/todos")," \u9700\u8981\u6dfb\u52a0\u4e00\u4e0b\u7f16\u8f91\u7684\u5165\u53e3\uff0c\u4fee\u6539\u4e00\u4e0b\u9996\u9875\u7684\u6837\u5f0f\uff0cjs \u4e2d\u9700\u8981\u589e\u52a0\u70b9\u51fb\u8df3\u8f6c\u65b9\u6cd5\uff0c\u5e76\u628a\u8be5\u9879\u7684 index \u4f20\u7ed9\u9875\u9762\uff0c\u7528\u4e8e\u6807\u8bb0\u54ea\u4e00\u9879\u7684\u5185\u5bb9\u9700\u8981\u88ab\u7f16\u8f91\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- src/pages/todos/todos.wxml --\x3e\n<label wx:for="{{todos}}" wx:for-item="item" class="todo-item {{item.completed ? \'checked\' : \'\'}}" wx:key="{{index}}">\n  ...\n  <view class="todo-item-edit" bindtap="editTodo" data-index="{{index}}">\u7f16\u8f91</view>\n</label>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/pages/todos/todos.ts\nimport { wPage } from '@morjs/core'\n\nwPage({\n  ...,\n  editTodo(e) {\n    my.navigateTo({url: `../edit-todo/edit-todo?index=${e.target.targetDataset.index}`})\n  },\n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* src/pages/todos/todos.less */\n.todo-items {\n  padding: 50rpx 30rpx;\n}\n.todo-item {\n  display: flex;\n  align-items: center;\n}\n.todo-item-text {\n  width: 360rpx;\n}\n.todo-item-edit {\n  margin: 0 20rpx;\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u529f\u80fd\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"xml \u6587\u4ef6\u4e2d\u9700\u8981\u4e00\u4e2a input \u7528\u4e8e\u663e\u793a\u548c\u4fee\u6539\u88ab\u7f16\u8f91\u9879\u7684\u5185\u5bb9\u548c\u4e00\u4e2a\u6309\u94ae\u7528\u4e8e\u89e6\u53d1\u5b8c\u6210\u7f16\u8f91"),(0,a.kt)("li",{parentName:"ul"},"css \u6587\u4ef6\u7f16\u8f91\u9875\u9762\u6837\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"js \u6587\u4ef6\u4e2d\uff0c\u5bf9\u9875\u9762\u4f20\u5165\u7684 index \u5bf9\u5e94\u7684\u5185\u5bb9\u8fdb\u884c\u4fdd\u5b58\uff0c\u63d0\u4f9b\u7ed9 xml \u4e2d\u7684 input \u663e\u793a\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5\u7528\u4e8e\u6309\u94ae\u70b9\u51fb\u540e\u89e6\u53d1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- src/pages/todos/edit-todos.wxml --\x3e\n<view class="page-edit-todo">\n  <view class="edit-todo">\n    <input class="edit-todo-input" placeholder="What needs to be done?" bindblur="onBlur" value="{{inputValue}}" />\n  </view>\n  <view class="todo-footer">\n    <add-button text="Edit Todo" onClickMe="edit"></add-button>\n  </view>\n</view>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/pages/todos/edit-todos.ts\nimport { wPage } from '@morjs/core'\n\nconst app = getApp()\n\nwPage({\n  onLoad(query: any): void {\n    this.setData({\n      index: query.index,\n      inputValue: app.todos[query.index].text\n    })\n  },\n\n  data: {\n    index: '',\n    inputValue: ''\n  },\n\n  onBlur(e: any) {\n    this.setData({\n      inputValue: e.detail.value\n    })\n  },\n\n  edit() {\n    const { index, inputValue } = this.data\n    app.todos[index].text = inputValue\n    my.navigateBack()\n  }\n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* src/pages/todos/edit-todos.less */\n.page-edit-todo {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n.edit-todo {\n  padding: 40px;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.edit-todo-input {\n  display: block;\n  font-size: 50rpx;\n  font-weight: 100;\n  padding: 5px 5px;\n  background: none;\n  border: none;\n  border-bottom: 1px solid #dfdfdf;\n  color: #0effd6;\n  width: 100%;\n}\n\n.todo-footer {\n  padding: 50rpx 0 100rpx;\n  font-size: 48rpx;\n  font-weight: 200;\n  text-align: center;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// src/pages/todos/edit-todos.json\n{\n  "usingComponents": {\n    "add-button": "/components/add-button/add-button"\n  }\n}\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4e0a\u8ff0\u6d41\u7a0b\u540e\uff0c\u6211\u4eec\u5728 todo list \u7684\u6bcf\u4e00\u9879\u540e\u9762\u90fd\u4f1a\u6709\u4e00\u4e2a\u300c\u7f16\u8f91\u300d\u6309\u94ae\uff0c\u70b9\u51fb\u5c06\u4f1a\u8c03\u8f6c\u5230\u7f16\u8f91\u9875\uff0c\u4fee\u6539\u5b8c\u5185\u5bb9\u540e\u70b9\u51fb\u7f16\u8f91\u9875\u4e0b\u65b9\u7684\u6309\u94ae\u5373\u53ef\u62a5\u9519\u5e76\u56de\u5230 todo list \u9875\uff0c\u4ee5\u4e0a\uff0c\u606d\u559c\u4f60\u5b66\u4f1a\u4e86\u600e\u4e48\u6dfb\u52a0\u548c\u7f16\u8f91\u9875\u9762\u4ee3\u7801\uff01\ud83c\udf89 \ud83c\udf89 \ud83c\udf89")),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u7ec4\u4ef6"},"\u6dfb\u52a0\u7ec4\u4ef6"),(0,a.kt)("h4",{id:"\u7ec4\u4ef6\u914d\u7f6e"},"\u7ec4\u4ef6\u914d\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"src/components")," \u4e0b\u521b\u5efa\u6587\u4ef6\u5939 ",(0,a.kt)("inlineCode",{parentName:"li"},"delete-check")," \u7528\u4e8e\u5b58\u653e\u5220\u9664 Todo \u529f\u80fd\u76f8\u5173\u7684\u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u8be5\u6587\u4ef6\u5939\u4e0b\u521b\u5efa\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684\u56db\u4e2a\u57fa\u7840\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"delete-check.wxml")," ",(0,a.kt)("inlineCode",{parentName:"li"},"delete-check.less")," ",(0,a.kt)("inlineCode",{parentName:"li"},"delete-check.ts")," ",(0,a.kt)("inlineCode",{parentName:"li"},"delete-check.json")),(0,a.kt)("li",{parentName:"ol"},"\u5728\u9700\u8981\u4f7f\u7528\u5230\u8be5\u7ec4\u4ef6\u7684\u9875\u9762 ",(0,a.kt)("inlineCode",{parentName:"li"},"todos.json")," \u4e2d\u914d\u7f6e\u5f15\u5165\u8be5\u7ec4\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// src/pages/todos/todos.json\n{\n  "usingComponents": {\n    "add-button": "../../components/add-button/add-button",\n    "delete-check": "../../components/delete-check/delete-check"\n  }\n}\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5728\u9700\u8981\u4f7f\u7528\u5230\u8be5\u7ec4\u4ef6\u7684\u9875\u9762 ",(0,a.kt)("inlineCode",{parentName:"li"},"todos.wxml")," \u4e2d\u4f7f\u7528\u5f15\u5165\u7684\u7ec4\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- src/pages/todos/todos.wxml --\x3e\n<view class="page-todos">\n  ...\n  \x3c!-- \u5220\u9664\u786e\u8ba4\u5f39\u7a97 --\x3e\n  <delete-check wx:if="{{showDeleteCheck}}" checkIndex="{{checkIndex}}" onCancelDel="onCancelDel" />\n</view>\n')),(0,a.kt)("h4",{id:"\u7ec4\u4ef6\u529f\u80fd"},"\u7ec4\u4ef6\u529f\u80fd"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u5165\u53e3\uff1a\u9996\u9875 ",(0,a.kt)("inlineCode",{parentName:"li"},"src/pages/todos")," \u9700\u8981\u6dfb\u52a0\u4e00\u4e0b\u5220\u9664\u7684\u89e6\u53d1\u5165\u53e3\uff0c\u4fee\u6539\u4e00\u4e0b\u9996\u9875\u7684\u6837\u5f0f\uff0cjs \u4e2d\u9700\u8981\u589e\u52a0\u70b9\u51fb\u5220\u9664\u65b9\u6cd5\uff0c\u5e76\u628a\u8be5\u9879\u7684 index \u4f20\u7ed9\u7ec4\u4ef6\uff0c\u7528\u4e8e\u6807\u8bb0\u54ea\u4e00\u9879\u7684\u5185\u5bb9\u9700\u8981\u88ab\u5220\u9664\uff0c\u540c\u65f6\u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5 onCancelDel \u7528\u4e8e\u8bbe\u7f6e showDeleteCheck \u4e3a false \u5173\u95ed\u5220\u9664\u786e\u8ba4\u6846\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- src/pages/todos/todos.wxml --\x3e\n<label wx:for="{{todos}}" wx:for-item="item" class="todo-item {{item.completed ? \'checked\' : \'\'}}" wx:key="{{index}}">\n  ...\n  <view class="todo-item-del" bindtap="delTodo" data-index="{{index}}">\u5220\u9664</view>\n</label>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/pages/todos/todos.ts\nimport { wPage } from '@morjs/core'\n\nwPage({\n  data: {\n    checkIndex: '',\n    showDeleteCheck: false\n  },\n  // \u6253\u5f00\u5220\u9664\u6846\n  delTodo(e) {\n    const index = e.target?.targetDataset?.index || e.target?.dataset?.index\n    this.setData({\n      checkIndex: index,\n      showDeleteCheck: true\n    })\n  },\n  // \u5173\u95ed\u5220\u9664\u6846\n  onCancelDel(e) {\n    this.setData({\n      todos: app.todos,\n      checkIndex: '',\n      showDeleteCheck: false\n    })\n  }\n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* src/pages/todos/todos.less */\n.todo-item-del {\n  margin: 0 20rpx;\n  color: crimson;\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u529f\u80fd\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"xml \u6587\u4ef6\u7528\u4e8e\u663e\u793a\u5f39\u7a97\u7684\u6d6e\u5c42\uff0c\u5176\u4e2d\u4e00\u4e2a\u786e\u8ba4\u5220\u9664\u6309\u94ae\u7528\u4e8e\u89e6\u53d1\u5220\u9664\uff0c\u4e00\u4e2a\u53d6\u6d88\u6309\u94ae\u7528\u4e8e\u5173\u95ed\u5f39\u7a97"),(0,a.kt)("li",{parentName:"ul"},"css \u6587\u4ef6\u7f16\u8f91\u9875\u9762\u6837\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"js \u6587\u4ef6\u4e2d\uff0c\u5bf9\u9875\u9762\u4f20\u5165\u7684 index \u5bf9\u5e94\u7684\u5185\u5bb9\u8fdb\u884c\u4fdd\u5b58\uff0c\u63d0\u4f9b\u7ed9 xml \u4e2d\u663e\u793a\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a\u5220\u9664\u65b9\u6cd5\u548c\u4e00\u4e2a\u5173\u95ed\u5f39\u7a97\u65b9\u6cd5\u63d0\u4f9b\u7ed9 xml \u70b9\u51fb\u89e6\u53d1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- src/components/delete-check/delete-check.wxml --\x3e\n<view class="delete-check-bg">\n  <view class="delete-check">\n    <view class="delete-check__text">\u786e\u8ba4\u5220\u9664\u300c{{text}}\u300d</view>\n    <view class="delete-check__btn-box">\n      <view class="btn-del" bindtap="del">\u5220\u9664</view>\n      <view class="btn-cancel" bindtap="cancel">\u53d6\u6d88</view>\n    </view>\n  </view>\n</view>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/components/delete-check/delete-check.ts\nimport { wComponent } from '@morjs/core'\n\n// \u83b7\u53d6\u5168\u5c40 app \u5b9e\u4f8b\nconst app = getApp()\n\nwComponent({\n  props: {\n    checkIndex: '',\n    onCancelDel: () => {}\n  },\n  data: {\n    text: ''\n  },\n  created() {\n    const text = app.todos[this.props.checkIndex].text\n    this.setData({ text })\n  },\n  methods: {\n    del() {\n      app.todos.splice(this.props.checkIndex, 1)\n      this.cancel()\n    },\n    cancel() {\n      this.props.onCancelDel()\n    }\n  }\n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* src/components/delete-check/delete-check.less */\n.delete-check-bg {\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(#fff, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .delete-check {\n    width: 400rpx;\n    border: 1rpx solid #ccc;\n    background: #fff;\n    border-radius: 8rpx;\n  }\n  .delete-check__text {\n    padding: 50rpx 30rpx;\n    text-align: center;\n  }\n  .delete-check__btn-box {\n    display: flex;\n    align-items: center;\n    .btn-del {\n      width: 50%;\n      text-align: center;\n      color: crimson;\n      padding: 20rpx;\n      border: 1rpx solid #ccc;\n      border-right: none;\n    }\n    .btn-cancel {\n      width: 50%;\n      text-align: center;\n      padding: 20rpx;\n      border: 1rpx solid #ccc;\n    }\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// src/components/delete-check/delete-check.json\n{\n  "component": true\n}\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4e0a\u8ff0\u6d41\u7a0b\u540e\uff0c\u6211\u4eec\u5728 todo list \u7684\u6bcf\u4e00\u9879\u540e\u9762\u90fd\u4f1a\u6709\u4e00\u4e2a\u300c\u5220\u9664\u300d\u6309\u94ae\uff0c\u70b9\u51fb\u5c06\u4f1a\u6253\u5f00\u5220\u9664\u5f39\u7a97\uff0c\u70b9\u51fb\u5220\u9664\u540e\u5373\u53ef\u5220\u9664\u8be5\u9879\uff0c\u4ee5\u4e0a\uff0c\u606d\u559c\u4f60\u5b66\u4f1a\u4e86\u600e\u4e48\u6dfb\u52a0\u548c\u7f16\u8f91\u7ec4\u4ef6\u4ee3\u7801\uff01\ud83c\udf89 \ud83c\udf89 \ud83c\udf89")))}m.isMDXComponent=!0}}]);