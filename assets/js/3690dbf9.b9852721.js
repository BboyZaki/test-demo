"use strict";(self.webpackChunkmor_site=self.webpackChunkmor_site||[]).push([[6455],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(4778),o=(t(9496),t(9613));const i={},s="\u4ee3\u7801\u6837\u5f0f\u89c4\u8303",l={unversionedId:"specifications/code-styles",id:"specifications/code-styles",title:"\u4ee3\u7801\u6837\u5f0f\u89c4\u8303",description:"Mor \u4ed3\u5e93\u5df2\u914d\u7f6e\u4e86 eslint\u3001tsconfig.json\u3001prettier\u3001husky\u3001lint-staged \u7b49 lint \u5de5\u5177\u548c\u683c\u5f0f\u5316\u5de5\u5177\uff0c\u7528\u4e8e\u786e\u4fdd\u591a\u4eba\u534f\u4f5c\u4e0b\u7684\u4ee3\u7801\u6837\u5f0f\u548c\u7f16\u7801\u4e60\u60ef\u4fdd\u6301\u57fa\u672c\u4e00\u81f4\u3002",source:"@site/docs/specifications/code-styles.md",sourceDirName:"specifications",slug:"/specifications/code-styles",permalink:"/specifications/code-styles",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"\u591a\u7aef\u7814\u53d1\u89c4\u8303",permalink:"/specifications/development"},next:{title:"\u4ee3\u7801\u63d0\u4ea4\u548c\u5ba1\u67e5\u89c4\u8303",permalink:"/specifications/git-commit-and-review"}},a={},p=[{value:"<code>eslint</code> \u914d\u7f6e",id:"eslint-\u914d\u7f6e",level:2},{value:"<code>tsconfig.json</code> \u914d\u7f6e",id:"tsconfigjson-\u914d\u7f6e",level:2},{value:"<code>prettier</code> \u914d\u7f6e",id:"prettier-\u914d\u7f6e",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4ee3\u7801\u6837\u5f0f\u89c4\u8303"},"\u4ee3\u7801\u6837\u5f0f\u89c4\u8303"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Mor")," \u4ed3\u5e93\u5df2\u914d\u7f6e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"prettier"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"husky"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"lint-staged")," \u7b49 ",(0,o.kt)("inlineCode",{parentName:"p"},"lint")," \u5de5\u5177\u548c\u683c\u5f0f\u5316\u5de5\u5177\uff0c\u7528\u4e8e\u786e\u4fdd\u591a\u4eba\u534f\u4f5c\u4e0b\u7684\u4ee3\u7801\u6837\u5f0f\u548c\u7f16\u7801\u4e60\u60ef\u4fdd\u6301\u57fa\u672c\u4e00\u81f4\u3002"),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\u6211\u4eec\u7684\u4ee3\u7801\u6837\u5f0f\u5e76\u4e0d\u8ddf\u968f ",(0,o.kt)("a",{parentName:"p",href:"https://f2e.alibaba-inc.com/markdown"},"\u963f\u91cc\u5df4\u5df4\u524d\u7aef\u7f16\u7801\u89c4\u7ea6"),"\uff0c\u800c\u662f\u57fa\u4e8e\u9879\u76ee\u81ea\u8eab\u8bc9\u6c42\u800c\u5b9a\u5236\u7684\uff0c\u4f46\u6211\u4eec\u4e5f\u4f9d\u7136\u5efa\u8bae\u5f00\u59cb\u7f16\u7801\u524d\u4ed4\u7ec6\u9605\u8bfb\u300a\u963f\u91cc\u5df4\u5df4\u524d\u7aef\u7f16\u7801\u89c4\u7ea6\u300b\uff0c\u5176\u4e2d\u5927\u90e8\u5206\u5185\u5bb9\u90fd\u662f\u901a\u7528\u7684\uff0c\u5c24\u5176\u662f\u90a3\u4e9b\u9700\u8981\u89c4\u907f\u7684\u9519\u8bef\u7684\u7f16\u7801\u4e60\u60ef\u793a\u4f8b\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u9879\u76ee\u4e2d\u5404\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"lint")," \u7684\u914d\u7f6e\uff0c\u5982\u65e0\u5fc5\u8981\uff0c\u8bf7\u52ff\u4fee\u6539\u3002"),(0,o.kt)("h2",{id:"eslint-\u914d\u7f6e"},(0,o.kt)("inlineCode",{parentName:"h2"},"eslint")," \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// @ts-check\nconst { defineConfig } = require('eslint-define-config')\n\nmodule.exports = defineConfig({\n  root: true,\n  extends: [\n    'eslint:recommended',\n    'plugin:node/recommended',\n    'plugin:@typescript-eslint/recommended'\n  ],\n  parser: '@typescript-eslint/parser',\n  parserOptions: {\n    sourceType: 'module',\n    ecmaVersion: 2020\n  },\n  globals: {\n    my: true,\n    wx: true,\n    tt: true,\n    qq: true,\n    swan: true,\n    dd: true,\n    Swiper: true\n  },\n  env: {\n    node: true,\n    browser: true,\n    es6: true\n  },\n  rules: {\n    eqeqeq: ['warn', 'always', { null: 'never' }],\n    'no-debugger': ['error'],\n    'no-empty': ['warn', { allowEmptyCatch: true }],\n    'no-process-exit': 'off',\n    'no-useless-escape': 'off',\n    'prefer-const': [\n      'warn',\n      {\n        destructuring: 'all'\n      }\n    ],\n\n    'node/no-missing-import': [\n      'error',\n      {\n        allowModules: ['types', 'estree', 'testUtils', 'stylus'],\n        tryExtensions: ['.ts', '.js', '.d.ts']\n      }\n    ],\n    'node/no-missing-require': [\n      'error',\n      {\n        // for try-catching yarn pnp\n        allowModules: ['pnpapi'],\n        tryExtensions: ['.ts', '.js', '.d.ts']\n      }\n    ],\n    'node/no-deprecated-api': 'off',\n    'node/no-unpublished-import': 'off',\n    'node/no-unpublished-require': 'off',\n    'node/no-unsupported-features/es-syntax': 'off',\n    '@typescript-eslint/no-empty-function': [\n      'error',\n      { allow: ['arrowFunctions'] }\n    ],\n    '@typescript-eslint/no-empty-interface': 'off',\n    '@typescript-eslint/no-explicit-any': 'off',\n    '@typescript-eslint/no-extra-semi': 'off', // conflicts with prettier\n    '@typescript-eslint/no-inferrable-types': 'off',\n    '@typescript-eslint/no-var-requires': 'off'\n  },\n  overrides: [\n    {\n      files: ['*.js'],\n      rules: {\n        '@typescript-eslint/explicit-module-boundary-types': 'off'\n      }\n    },\n    {\n      files: ['*.d.ts'],\n      rules: {\n        '@typescript-eslint/triple-slash-reference': 'off'\n      }\n    }\n  ]\n})\n")),(0,o.kt)("h2",{id:"tsconfigjson-\u914d\u7f6e"},(0,o.kt)("inlineCode",{parentName:"h2"},"tsconfig.json")," \u914d\u7f6e"),(0,o.kt)("p",null,"\u57fa\u7840 ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.base.json")," \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "declaration": true,\n    "target": "ES2019",\n    "importHelpers": true,\n    "moduleResolution": "Node",\n    "sourceMap": true,\n    "noImplicitOverride": true,\n    "noUnusedLocals": true,\n    "esModuleInterop": true,\n    "lib": ["ES6", "ESNext", "DOM"]\n  }\n}\n')),(0,o.kt)("p",null,"\u8fd0\u884c\u65f6 ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "../../tsconfig.base.json",\n  "compilerOptions": {\n    "target": "ES5",\n    "rootDir": "./src",\n    "outDir": "./lib",\n    "module": "CommonJS",\n    "skipLibCheck": true,\n    "typeRoots": ["./node_modules/@types/"]\n  },\n  "include": ["./src"]\n}\n')),(0,o.kt)("p",null,"\u7f16\u8bd1\u65f6 ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "../../tsconfig.base.json",\n  "compilerOptions": {\n    "rootDir": "./src",\n    "outDir": "./lib",\n    "module": "CommonJS",\n    "typeRoots": ["./node_modules/@types/"]\n  },\n  "include": ["src"]\n}\n')),(0,o.kt)("h2",{id:"prettier-\u914d\u7f6e"},(0,o.kt)("inlineCode",{parentName:"h2"},"prettier")," \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "semi": false,\n  "tabWidth": 2,\n  "singleQuote": true,\n  "printWidth": 80,\n  "trailingComma": "none",\n  "overrides": [\n    {\n      "files": ["*.json5"],\n      "options": {\n        "singleQuote": false,\n        "quoteProps": "preserve"\n      }\n    },\n    {\n      "files": ["*.yml"],\n      "options": {\n        "singleQuote": false\n      }\n    }\n  ],\n  "plugins": ["prettier-plugin-organize-imports"]\n}\n')))}d.isMDXComponent=!0}}]);