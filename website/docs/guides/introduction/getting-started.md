# 快速上手

## 环境准备

首先需要有 [node](https://nodejs.org/zh-cn/), 并确保 `node` 版本为 `12.13.0` 或以上。（推荐用 [nvm](https://github.com/nvm-sh/nvm) 来管理 `node` 版本，windows 下推荐用 [nvm-windows](https://github.com/coreybutler/nvm-windows)）

mac 或 linux 下安装 nvm。

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
$ nvm -v
0.39.1
```

安装 `node`。

```
$ nvm install 14
$ nvm use 14
$ node -v
v14.19.0
```

然后需要包管理工具。`node` 默认包含 `npm`，域内统一使用 `tnpm`。

安装 `tnpm`

```
npm i tnpm -g --registry=https://registry.npm.alibaba-inc.com
```

## 创建项目

先找个地方建个空目录。

```
mkdir myapp && cd myapp
```

全局安装 mor cli 工具。

```
tnpm i @morjs/cli -g
```

通过 mor cli 工具创建项目：

```
mor init
```

然后你会看到如下界面：

```
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
请选择工程类型 › - Use arrow-keys. Return to submit.
❯   小程序
    小程序插件
    小程序分包
    Mor 工程插件
    Mor 运行时插件
    Mor 运行时解决方案
    Mor 多端组件库
    Mor 自定义脚手架
```

选择 `MorJS 标准小程序工程` 回车并根据提示完成操作后，即可完成项目创建

```
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
✔ 请选择工程类型 › 小程序
✔ 请输入项目名称 … myapp
✔ 请输入项目描述 … my first app
✔ 用户名 … ly321100
✔ 邮箱 … ly321100@alibaba-inc.com
✔ 请输入 Git 仓库地址 … https://code.alibaba-inc.com/ly321100/myapp
✔ 请选择投放渠道 › 阿里经济体（支付宝、淘宝、口碑、饿了么、高德、钉钉等）, 微信
✔ 支付宝小程序 AppID …
✔ 微信小程序 AppID …
[mor] ✔ 拷贝: .commitlintrc.js
[mor] ✔ 拷贝: .editorconfig
[mor] ✔ 拷贝: .eslintignore
[mor] ✔ 写入: .eslintrc
[mor] ✔ 拷贝: .gitignore
[mor] ✔ 拷贝: .prettierignore
[mor] ✔ 拷贝: .prettierrc
[mor] ✔ 拷贝: .stylelintrc
[mor] ✔ 写入: README.md
[mor] ✔ 拷贝: mor.config.ts
[mor] ✔ 写入: package.json
[mor] ✔ 拷贝: tsconfig.json
[mor] ✔ 拷贝: .husky/commit-msg
[mor] ✔ 拷贝: .husky/pre-commit
[mor] ✔ 拷贝: src/app.json
[mor] ✔ 拷贝: src/app.less
[mor] ✔ 拷贝: src/app.ts
[mor] ✔ 拷贝: src/mini.project.json
[mor] ✔ 写入: src/project.config.json
[mor] ✔ 拷贝: src/assets/logo.png
[mor] ✔ 拷贝: src/components/add-button/add-button.axml
[mor] ✔ 拷贝: src/components/add-button/add-button.json
[mor] ✔ 拷贝: src/components/add-button/add-button.less
[mor] ✔ 拷贝: src/components/add-button/add-button.ts
[mor] ✔ 拷贝: src/pages/add-todo/add-todo.axml
[mor] ✔ 拷贝: src/pages/add-todo/add-todo.json
[mor] ✔ 拷贝: src/pages/add-todo/add-todo.less
[mor] ✔ 拷贝: src/pages/add-todo/add-todo.ts
[mor] ✔ 拷贝: src/pages/todos/todos.axml
[mor] ✔ 拷贝: src/pages/todos/todos.json
[mor] ✔ 拷贝: src/pages/todos/todos.less
[mor] ✔ 拷贝: src/pages/todos/todos.ts
[mor] ℹ 安装 node_modules 中...
[mor] ✔ 安装 node_modules 完成!
[mor] ✔ 小程序项目初始化完成 ^_^ 在终端运行命令 👇🏻

        tnpm run dev

        即可启动项目。
```

## 启动项目

执行 `tnpm run dev` 命令，

```
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
[mor] ℹ 发现配置文件: mor.config.ts
[mor] ✔ 配置文件加载成功: mor.config.ts
[mor] ℹ 准备配置中, 即将开始编译 👇
        配置名称: ali
        编译目标: 支付宝小程序
        编译类型: 小程序
        编译模式: bundle
        源码目录: src
        输出目录: dist/alipay
[mor] ℹ 已开启缓存, 可通过 --no-cache 关闭
[mor] ℹ 启动文件监听模式
[mor] ℹ 开始编译 ...
[mor] ℹ 依赖分析中 ...
[mor] ℹ 依赖分析完成: 耗时: 15.520708 ms
[mor] ✔ 编译完成, 耗时: 581.601542 ms

[mor] ℹ 准备配置中, 即将开始编译 👇
        配置名称: wechat
        编译目标: 微信小程序
        编译类型: 小程序
        编译模式: bundle
        源码目录: src
        输出目录: dist/wechat
[mor] ℹ 已开启缓存, 可通过 --no-cache 关闭
[mor] ℹ 启动文件监听模式
[mor] ℹ 开始编译 ...
[mor] ℹ 依赖分析中 ...
[mor] ℹ 依赖分析完成: 耗时: 10.393 ms
[mor] ✔ 编译完成, 耗时: 464.704167 ms
```

在 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) 中打开 `dist/wechat` 目录即可开始微信小程序开发预览

在 [支付宝小程序开发者工具](https://opendocs.alipay.com/mini/ide/download) 中打开 `dist/alipay` 目录即可开始微信小程序开发预览
