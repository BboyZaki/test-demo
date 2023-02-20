# 如何贡献代码?

MorJS 使用 `monorepo` 的方式来管理仓库。

- [开源版仓库地址](https://github.com/eleme/mor)

- [lerna@3 文档](https://github.com/lerna/lerna/tree/v3.22.1)

## 安装依赖

首选需要安装构建相关依赖

```shell
tnpm install
```

## 启动

请不要在`packages`中的库当中执行`tnpm install`，请在项目跟目录中执行以下命令。

```shell
npx lerna bootstrap
```

## 构建

构建全部库请直接用

```shell
tnpm run build
```

想构建特定的库请用，然后根据列表来选择

```shell
tnpm run build-interactive
```

由于目前 package 比较多，也可以通过直接指定 package 名字来执行

package 名字就是目录名

```shell
tnpm run build -- core
```

## 开发

想实时 watch 对应的库的构建，请使用以下命令，并根据列表来选择

```shell
tnpm run dev-interactive
```

由于目前 package 比较多，也可以通过直接指定 package 名字来执行

package 名字就是目录名

```shell
tnpm run dev -- core
```

如果需要测试 `cli` 相关的功能，可以在 `cli` 目录中 `tnpm link` 一下，采用本地版本的 cli

`example` 涵盖了 `mor` 的绝大数功能的配置，可以在 `example` 中执行对应的命令 `mor ${command}` 即可

## 测试

```shell
tnpm run test
```

## 如何向 `mor` 提交代码

`mor` 需要通过 MR 的方式来提交代码，开发前可咨询一下 `@羽境` 基于哪个分支，通常可按下述情况自行选择分支：

1. 如果是新功能或针对 `beta` 版本的 `bugfix`，基于 `beta` 分支开发
2. 如果是针对正式版的 `bugfix`，基于 `master` 分支开发

分支名称要求：

- **特性（feature）**: feature/日期\_英文描述，例：feature/20210820_add_analyzer_support
- **修复（bugfix）**: bugfix/日期\_英文描述，例：bugfix/20210727_fix_less_import_bug
- **测试（test）**: test/日期\_英文描述，例：test/20210727_add_test_cases_for_mor_compiler

其余未列出情况，可参考上述命名方式。

完成代码提交后，需要在 <https://code.aone.alibaba-inc.com/mor/ali-mor> 中提交代码评审，评审的目标分支为评审分支创建时基于的分支。

### Commit 规范

`mor` 的 `commit` 规范基于 [代码提交和审查规范](/specifications/git-commit-and-review)

有以下原则必须遵守：

- 必须写 `type(scope)`，`mor` 自身项目的配置如 `eslint` 配置修改之类不需要写 `scope`
  - `type` 支持的值：
    - build
    - ci
    - chore
    - docs
    - feat
    - fix
    - perf
    - refactor
    - revert
    - style
    - test
  - `scope` 为 `packages` 里面的目录名
    - 比如修复了 `packages/util/src/index.ts` 里面的 bug
    - `commit` 的 `scope` 为 `fix(util): 修复xxx`
- `commit` 内容请使用中文，请简要明确的说明该修改点
  - 严禁提交类似 `update` 之类的 `commit` 信息
- 单个 `commit` 只能包含 `packages` 里面一个 `package` 的代码修改，**不允许跨 package**
  - 比如修改了 `mor compile` 的功能，涉及了 `packages/cli` 和 `packages/compiler` 两个 `package` 的代码。
  - 但是 `commit` 需要区分两个 `cli` 的和 `compiler` 分别各一个，并各自描述修改点

基于以上原则，可以使用 `commitizen` 来帮助填写 git commit 信息，使用方法如下：

1. 全局安装 commitizen => `npm install -g commitizen`
2. 在项目根目录使用 `git cz` 命令代替 `git commit -m "your commit message"`
3. 根据提示和上述原则输入 commit 信息

### Commit 示例

`feat(plugin-pack): 增加 pack 命令的 minify 代码压缩参数`

## 发布方式

### 分支管理

正式版分支: `master`
Beta 版分支: `beta`
开发协作方式参见： [《MorJS 应急响应的保障机制和流程》](https://yuque.antfin.com/docs/share/ac325fbb-30a6-4b7e-b115-f16a74d92e1c?#)

### 开源版（`@morjs/*`）

#### 初始化

目录结构：

```
.
├── CHANGELOG.md
├── README.md
├── jest.config.ts
├── lerna.json
├── node_modules
├── package.json
├── packages
│   ├── api
│   ├── cli
│   ├── core
│   ├── create-mor
│   ├── plugin-analyzer
│   ├── plugin-compiler
│   ├── plugin-compiler-alipay
│   ├── plugin-compiler-baidu
│   ├── plugin-compiler-bytedance
│   ├── plugin-compiler-dingding
│   ├── plugin-compiler-qq
│   ├── plugin-compiler-taobao
│   ├── plugin-compiler-web
│   ├── plugin-compiler-wechat
│   ├── plugin-composer
│   ├── plugin-generator
│   ├── runtime-mini
│   ├── runtime-web
│   └── utils
├── pnpm-lock.yaml
├── publish.sh
├── scripts
│   ├── build.js
│   ├── clean.js
│   ├── dev.js
│   ├── install.js
│   └── util.js
├── tsconfig.base.json
└── tsconfig.test.json
```

开源版采用 `pnpm` 管理 `node_modules`，所有模块中**均不包含任何域内依赖，也请勿引入任何域内的依赖**
仓库拉下来之后，通过如下命令初始化仓库：

1. 安装 `pnpm`： `tnpm i pnpm -g` 如全局已有 `pnpm` 则可跳过该步骤
2. 安装 `node_modules`： `pnpm i`
3. 安装所有 `packages` 中的依赖并建立引用关系： `pnpm lerna bootstrap`
4. 构建所有的 `packages`： `pnpm build`

以上四个步骤之后，即可完成所有模块的构建。

#### 开发 & 调试

开发模式编译全部或部分 `package`
编译全部： `pnpm dev`
编译一个或多个（逗号分隔）： `pnpm dev -- cli,plugin-compiler`
可在 `packages/cli` 中将 `@morjs/cli` 直接 link 到全局以测试功能

#### 发布

发布时请选择正确的分支，并确保相关的功能已完成测试和 CR
正式版分支: `master`
Beta 版分支: `beta`

##### 发布 beta 版示例

以下命令均运行在 `beta` 分支中

1. 构建所有模块： `pnpm build`
2. 生成需要发布的版本： `pnpm lerna version prerelease --preid beta`
3. 基于步骤二中列出的版本调用发布命令发布
   1. 发布部分包（空格分隔），如： `./publish.sh cli plugin-compiler`
   2. 发布全部包： `./publish.sh all`

##### 发布正式版示例

以下命令均运行在 `master` 分支中

1. 构建所有模块： `pnpm build`
2. 生成需要发布的版本： `pnpm lerna version patch`
3. 基于步骤二中列出的版本调用发布命令发布
   1. 发布部分包（空格分隔），如： `./publish.sh cli plugin-compiler`
   2. 发布全部包： `./publish.sh all`

### 其他

#### 1. 如何添加 `mor` 相关 `tnpm` 发布权限

执行下方命令，并将 `new_npm_owner` 替换为真实的 `tnpm` 用户名

```bash
npm owner add new_npm_owner takin && \
npm owner add new_npm_owner @morjs/api && \
npm owner add new_npm_owner @morjs/plugin-compiler-baidu && \
npm owner add new_npm_owner @morjs/plugin-composer && \
npm owner add new_npm_owner @morjs/plugin-mocker && \
npm owner add new_npm_owner @morjs/cli && \
npm owner add new_npm_owner @morjs/plugin-compiler-bytedance && \
npm owner add new_npm_owner @morjs/plugin-generator && \
npm owner add new_npm_owner @morjs/core && \
npm owner add new_npm_owner @morjs/plugin-compiler-dingding && \
npm owner add new_npm_owner @morjs/runtime-mini && \
npm owner add new_npm_owner @morjs/plugin-compiler-qq && \
npm owner add new_npm_owner @morjs/runtime-web && \
npm owner add new_npm_owner @morjs/plugin-analyzer && \
npm owner add new_npm_owner @morjs/plugin-compiler-taobao && \
npm owner add new_npm_owner @morjs/utils && \
npm owner add new_npm_owner @morjs/plugin-compiler && \
npm owner add new_npm_owner @morjs/plugin-compiler-web && \
npm owner add new_npm_owner @morjs/plugin-compiler-alipay && \
npm owner add new_npm_owner @morjs/plugin-compiler-wechat
```
