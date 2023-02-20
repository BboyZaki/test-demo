# 复杂小程序集成

## 背景

从 2017 年微信小程序发布开始，随着小程序的逐步发展、迭代和大量功能的开发，小程序巨大化的问题越来越突出。虽然小程序平台方提供了分包、插件两种方式来帮助小程序开发者来实现代码和功能的解耦。然而在实际的实践中，随着同一个小程序中的不同的业务逐步拆分到不同的团队，以及分包、插件、NPM 包的大量使用，不同业务团队之间的接口调用问题、包大小的管理问题、最终的小程序产物合并问题等越来越突出，基于这个背景和需求，整合本地生活在大型小程序上的各类最佳实践和解决方案，从工程化的角度出发，我们推出了 **复杂小程序集成能力**。

相关功能主要由 `@morjs/plugin-composer` 插件提供。

## 动机

多个独立的构建可以组成一个独立的小程序，这些独立构建之间不应该存在强依赖关系，因此可以独立开发、调试和部署。

除宿主之外，分包、插件和模块并不要求一定要采用 `Mor` 来编写，只要符合接入方式的规范，理论上采用任何小程序框架的小程序或原生小程序均可以进行独立开发和集成。

_注：小程序、分包、插件的打包方式归属于编译，不在这里体现。_

## 目标

- 提供统一的集成研发方式和流程
- 提供标准、可复用的集成产物规范
- 为复杂小程序提供解耦工具和集成方法
- 标准化小程序宿主、小程序插件、小程序分包、小程序模块之间的通信及能力注入方式
- 提供统一的路由调用，方便多形态的小程序在多种环境下路由的一致性
- 转 Web 之后，可基于微应用的方式进行组合（未实现）

## 示意图

<img src="https://dev.g.alicdn.com/mor/mor-site/0.0.30/compose-sample.jpg" width="1200" />

## 概念

### 集成

将小程序宿主和相关子模块通过拉包、编译、构建、合并等一系列处理之后，合并为一个完整小程序的过程

### 模块类型

- **宿主**：小程序主体，拥有小程序完整的权限，有 `appId`，可使用插件和分包，并可为不同的插件和分包提供共享的数据和方法
- **主包**：小程序分包的一种，每个小程序只有一个主包，用于放置默认启动页面/TabBar 页面，以及一些所有分包都需用到公共资源/JS 脚本
- **分包**：小程序分包，分为普通分包和独立分包，可申请小程序权限，使用体感接近于小程序宿主
- **插件**：小程序插件，独立发布，嵌套在小程序宿主中使用，可被订阅使用，不可单独申请小程序权限

### 集成模式

- **组合模式**： 集成时的模块通过自定义的脚本完成编译，不经过 `Mor` 编译处理，`Mor` 仅会执行脚本以及操作模块产物
- **编译模式**： 集成时的模块相关页面或组件会合并进入到 `Mor` 的编译流程中，并与宿主产物一同输出

### 集成状态

集成过程中模块在不同阶段所处的状态，用于判断模块是否需要执行当前操作，初始状态为 **0**，最终状态为 **6**，详细状态及含义如下：

- **0**：初始状态
- **1**：模块已下载
- **2**：模块前置脚本已执行
- **3**：模块配置已载入
- **4**：模块已完成编译或拷贝
- **5**：模块后置脚本已执行
- **6**：模块已集成

### 下载类型

集成过程中，用于将模块下载到指定位置的方式，可分为如下 5 种下载类型：

- **npm**：通过 `NPM` 的方式下载，即模块以 `NPM` 包的方式发布和管理
- **git**：通过 `Git` 的方式下载，即模块以 `Git` 仓库的方式发布和管理
- **tar**：通过 `Tar` 压缩包的方式下载，即模块以某个存放在网络或 `CDN` 上的 `Tar` 资源形式存在
- **link**：通过本地软链的方式下载，即模块存储在本地某个目录中，通过软链的形式，将模块链接到指定位置
- **file**：通过本地目录拷贝的方式下载，即模块存储在本地某个目录中，通过拷贝整个目录的方式，将模块复制到指定位置

### 集成脚本

集成过程中，模块需要自定义执行的脚本命令，通常用于生成模块实际用于集成的产物：

- **before**：前置脚本，单一模块成功下载后执行的脚本
- **after**：后置脚本，单一模块已完成产物的拷贝或编译之后执行的脚本
- **composed**：已集成脚本，所有模块完成集成后，集成流程结束前执行的脚本

## 集成配置

### 集成开启方式

`mor` 的集成可在两种方式下使用，一种是**直接集成**，一种是**编译时自动集成**

#### 直接集成

通过 `mor compose` 命令控制，不涉及到编译流程，不处理 `mode` 为 `compile` 的模块，主要的功能是将宿主和各个分包合并在一起组合成一个完整的小程序。

#### 编译时自动集成

通过 `mor compile` 命令控制，涉及到编译流程，通常用于配合当前宿主或分包的线下研发。

编译时 `mor` 支持通过两种方式开启集成，使用任何一种均可：

1. 通过命令 `mor compile --compose` 中的 `--compose` 在编译时自动开启集成
2. 通过在 `mor` 配置文件中添加 `{ compose: true }` 来自动开启集成

#### 两者的主要区别

`mor compile --compose` 可以认为是相当于先执行项目的编译 `mor compile`, 然后将当前项目作为宿主（`host`）或其中一个模块（`module`）进行集成 `mor compose`

### 集成模块配置

在 `mor.config.ts` 通过设置 `host: {}` 或 `modules: [{}]` 来配置宿主或子模块，如：

> 有关 `mor` 配置的详细信息，参见：[配置说明](/guides/basic/config#%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E)

```typescript
export default defineConfig([
  {
    // 宿主配置
    host: {}

    // 子模块（如：分包等）
    modules: [{}]
  }
])
```

上述示例中的 `host` 和 `modules` 的配置方式基本一致，其中 `host` 只能配置一个，`modules` 可以配置多个，详细的配置方式如下：

```typescript
{
  /**
   * 模块名称, 可选值, 默认会基于 `npm` 或 `git` 或 `tar` 或 `link` 或 `file` 配置自动生成
   */
  name: '',

  /**
   * 模块集成模式, 默认为 `compose`
   *  - compose: 通过 compose 方式集成, 通过拷贝的方式复制到产物目录
   *  - compile: 通过 compile 方式集成, 需要通过 mor 编译流程
   */
  mode: 'compose',

  /**
   * 模块类型, 默认为 `subpackage`
   *  - 声明为 宿主（host） 的模块，模块中包含 app.json 并作为其他模块集成的目标，配置在 `host` 中的模块，该类型固定为 `host `
   *  - 声明为 主包（main） 的模块，会将页面插入到小程序 app.json 的 pages 中
   *  - 声明为 分包（subpackage） 的模块，会将页面插入到小程序 app.json 的 subPackages 中
   *  - 声明为 插件（plugin） 的模块: 功能研发中
   */
  type: 'subpackage',

  /**
   * 下载配置
   *
   * npm / git / tar / link / file 均用于下载模块, 只需要配置一个即可
   *
   * 如果同时配置了多个，则只会有一个下载配置生效，优先级为：npm > git > tar > link > file
   */
  /* 通过 npm 配置模块下载 */
  // 字符串方式配置，如:
  npm: '@ali/your_package@1.2.0',
  // 对象方式配置，如：
  npm: {
    // npm 名称
    name: '@ali/your_package',
    // npm 版本, 默认为 `latest`
    version: '1.2.0'
  },

  /* 通过 git 仓库配置模块下载 */
  // 字符串方式配置，如:
  git: 'git@github.com:abc/cde.git#master'
  // 对象方式配置，如：
  // 注意: branch/tag/commit 的优先级为 commit > tag > branch, 相关字段均配置后，会按照优先级取用
  git: {
    // 仓库地址, 支持 git/http/https/ssh 协议链接
    url: 'git@github.com:abc/cde.git',
    // 分支配置, 默认为 HEAD
    branch: 'develop',
    // 标签配置
    tag: 'v1.1.0',
    // Git 提交 commit id
    commit: '98cbe4098c624837051a81f2fdf63d85f70e29bb',
  },

  /* 通过 tar 配置模块下载 */
  // 字符串方式配置，如:
  tar: 'https://your_domain.com/abc.tar.gz',
  // 对象方式配置，如：
  tar: {
    url: 'https://your_domain.com/abc.tar.gz',
    // 支持增加扩展参数, 参见 got 配置
  },

  /* 通过 link 配置（软链）模块下载 */
  // 字符串方式配置，如:
  link: '/Users/yourHomeDir/Workspace/yourCustomHostPath',
  // 对象方式配置，如：
  link: {
    path: '/Users/yourHomeDir/Workspace/yourCustomHostPath'
  },

  /* 通过 file 配置（复制）模块下载 */
  // 字符串方式配置，如:
  file: '/Users/yourHomeDir/Workspace/yourCustomHostPath',
  // 对象方式配置，如：
  file: {
    path: '/Users/yourHomeDir/Workspace/yourCustomHostPath'
  },

  // 构建产物目录配置, 默认为 `dist`
  // dist 配置的作用是告知 mor 当前模块的产物所存放的目录位置
  dist: 'dist',

  /**
   * 集成构建过程中可执行的脚本, 可选配置
   */
  scripts: {
    // 执行脚本时的公共环境变量, 可选配置
    // mor 默认会注入如下环境变量:
    //   MOR_COMPOSER_MODULE_CWD: 当前模块工作目录
    //   MOR_COMPOSER_MODULE_TYPE: 当前模块类型
    //   MOR_COMPOSER_MODULE_HASH: 当前模块 hash 信息, 用于 mor 内部判断是否需要重新下载模块
    //   MOR_COMPOSER_MODULE_ROOT: 当前模块根目录
    //   MOR_COMPOSER_MODULE_SOURCE: 当前模块源码目录
    //   MOR_COMPOSER_MODULE_OUTPUT_FROM: 当前模块原始产物目录
    //   MOR_COMPOSER_MODULE_OUTPUT_TO: 当前模块集成产物目录
    env: {},

    // 模块编译或拷贝前执行脚本, 可选配置
    before: [
      // 可以直接以字符串的方式配置命令
      'npm i',

      // 也可以以对象的方式配置
      {
        // 需要执行的命令
        command: 'cd some_dir && mor compile',
        // 该命令的自定义环境变量
        env: {
          CUSTOM_ENV: 'CUSTOM_ENV_VALUE'
        },
        // 该命令的选项, 参见 execa.command 的 options 配置
        options: {
          shell: true
        }
      },
    ],

    // 模块编译完成后或拷贝后执行脚本，配置方式同 before，可选配置
    after: [],

    // 所有模块完成集成之后执行脚本，配置方式同 before，可选配置
    composed: [],

    // 脚本执行公共选项, 参见 execa.command 的 options 配置
    options: {}
  },

  /**
   * 模块配置内容，参见下方集成产物规范的 [config].json 描述
   */
  config: undefined
}
```

## 集成产物规范

集成产物是指可用于参与到小程序集成的标准模块产物，具备以下特点：

- 框架无关
- 可复用
- 自描述

模块文件目录结构：

```bash
[module name]                 - 以模块名称命名的模块根目录，可以由模块配置的 `name` 指定或基于下载配置自动生成
├── [hash]                    - 模块源码或产物所在目录, `hash` 是由模块配置中的 `git`/`npm`/`tar`/`dist`/`mode` 字段生成的 MD5 值，用于辅助判断是否需要重新下载模块
│   ├── [dist?]               - 模块产物所在目录，以 mor.compose.json 中的 output.from 指向目录为准
│   │   └── [config].json     - 模块产物配置文件，不同的模块类型的配置文件均不相同，与 mor.compose.json 文件的 config 字段作用相同
└── mor.compose.json          - 模块描述文件
```

### 集成产物临时目录

MorJS 会将集成产物统一存放到项目根目录的 `.mor/composer` 临时目录中，其中宿主模块会统一放在 `.mor/composer/hosts` 目录中，子模块会统一放在 `.mor/composer/modules` 目录中。

集成的宿主模块和各个子模块的状态都是独立维护的，比如某次执行集成命令：

```bash
[mor] ℹ ┌──────────────────────────────────────────────┬────────────────┬──────┬──────┬──────┐
        │ 模块 (共 6 个, 集成终态: 已集成)                 │ 版本           │ 类型  │ 模式  │ 结果 │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ miniprogram_host                             │ *              │ 宿主  │ 编译 │  ✔   │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ miniapp-entry                                │ dev/dy_10.12.5 │ 分包  │ 组合 │  ✖   │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ eleme-ad_eleme-miniapp-plugin-search         │ feat/upgrade-… │ 分包  │ 组合 │  ✔   │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ mini-foundation_vouchers                     │ feature/dy     │ 分包  │ 组合 │  ✔   │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ eleme_miniapp-plugin-orderlist               │ dev/dy/10.12.5 │ 分包  │ 组合 │  ✔   │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ alsc-mini-app_king-home-alipay               │ feature/dy     │ 分包  │ 组合 │  ✔   │
        └──────────────────────────────────────────────┴────────────────┴──────┴──────┴──────┘
```

上方集成的模块中，`mini-foundation_vouchers` 模块集成失败，可直接通过删除目录 `.mor/composer/modules/mini-foundation_vouchers` 后重新运行命令，也可以通过命令行

```bash
npx mor clean all
```

来清理 `mor` 的缓存目录 `node_modules/.cache/mor` 和临时文件目录 `.mor` 后，重新运行之前的集成命令。

通常情况下，推荐只删除出问题的模块，这样当再次运行集成命令时，已完成集成的模块，会被跳过，可大大节约集成时间。

### 模块描述文件 —— mor.compose.json

模块描述文件的主要作用是：描述一个名为 `name` 状态为 `state` 的模块需要将自身的产物通过集成模式 `mode` 的方式从目录 `output.from` 集成到目录 `output.to` 中，并将配置 `config` 合并到小程序的 `app.json` 文件中。

```javascript
{
  // 模块名称，该名称和模块所在目录名称一致
  "name": "miniapp-orderlist-subpackage",
  // 模块类型
  "type": "subpackage",
  // 集成模式
  "mode": "compose",
  // 模块 hash 目录，基于模块配置生成，用于确保当前模块内容的唯一性
  "hash": "dc66928b089d5e14b77bdbdb09f4b60a",
  // 模块所在目录
  "root": ".mor/composer/modules/miniapp-orderlist-subpackage",
  // 模块源代码所在目录，通常用于结合脚本生成最终产物
  "source": ".mor/composer/modules/miniapp-orderlist-subpackage/dc66928b089d5e14b77bdbdb09f4b60a",
  // 模块集成状态
  "state": 2,
  // 模块产物输出配置
  "output": {
    // 当前模块的产物所在目录
    "from": ".mor/composer/modules/miniapp-orderlist-subpackage/dc66928b089d5e14b77bdbdb09f4b60a",
    // 需要将当前模块产物复制到的目标目录
    "to": "dist/orderlist"
  },
  // 模块配置文件，作用同 app.json/plugin.json/subpackage.json
  "config": {
    "type": "main",
    "root": "orderlist",
    "pages": [
      "pages/index/index",
      "pages/search/index"
    ]
  }
}
```

### 模块产物配置文件 —— [config].json

模块配置文件，不同类型的模块配置文件按照如下规则配置：

- 宿主（`host`）：使用 `app.json` 配置文件，该文件和小程序的 `app.json` 配置方式一致
- 主包（`main`）：使用 `subpackage.json` 配置文件，该文件和小程序的 `app.json` 的 `subpackages` 字段条目配置方式一致，区别在于扩展了 `"type": "main"` 用于标记当前模块为主包模块
- 分包（`subpackage`）：使用 `subpackage.json` 配置文件，该文件和小程序的 `app.json` 的 `subpackages` 字段条目配置方式一致
- 插件（`plugin`）：使用 `plugin.json` 配置文件，该文件和小程序插件的 `plugin.json` 配置方式一致

模块配置示例

```javascript
/* 配置示例 */

// 小程序 app.json 配置示例
// 详细配置可参见微信小程序或支付宝小程序 app.json 配置
{
  "pages": [
    "pages/todos/todos",
    "pages/add-todo/add-todo"
  ],
  // subpackages 或 subPackages 均可
  "subPackages": [
    {
      "root": "my",
      "pages": [
        "pages/profile/profile"
      ]
    }
  ]
}

// 小程序插件 plugin.json 配置示例
// 详细配置可参见微信小程序或支付宝小程序 plugin.json 配置
{
  "publicComponents": {
    "list": "components/list/list"
  },
  "publicPages": {
    "hello-page": "pages/index/index"
  },
  "pages": [
    "pages/index/index",
    "pages/another/index"
  ],
  // 插件导出的模块文件
  "main": "index.js"
}

// 小程序分包 subpackage.json 配置示例
// 配置方式同 app.json 中的 subpackages 的单个分包配置方式一致
{
  // type 字段为 mor 独有, 用于标识该分包为 "subpackage" 或 "main"
  // 区别是: 集成时 "subpackage" 类型的分包会被自动合并到 app.json 的 subpackages 字段中
  //              "main" 类型的分包会被自动合并到 app.json 的 pages 字段中 (即: 合并至主包)
  "type": "subpackage",
  // root 字段将影响集成时分包产物合并至宿主小程序时的根目录
  "root": "my",
  // 注意: 编译分包以 pages 作为实际路径进行解析
  "pages": [
    "pages/profile/profile"
  ]
}
```

### 实际模块示例

```bash
miniapp-orderlist-subpackage
├── dc66928b089d5e14b77bdbdb09f4b60a
│   ├── dist
│   │   ├── components
│   │   ├── pages
│   │   │   ├── index
│   │   │   │   ├── index.js
│   │   │   │   ├── index.json
│   │   │   │   ├── index.wxml
│   │   │   │   └── index.wxss
│   │   │   └── search
│   │   │       ├── index.js
│   │   │       ├── index.json
│   │   │       ├── index.wxml
│   │   │       └── index.wxss
│   │   └── subpackage.json
└── mor.compose.json
```

## 用法举例

这里会简单列举三种集成研发模式，来帮助大家理解集成的具体作用和使用方法。

### 主/子分包研发模式

业务可基于业务对小程序中的分包进行拆分，以达到各个业务相互解耦，独立迭代的目的，参见下方分包配置示例：

```typescript
import { defineConfig, takin } from '@morjs/cli'

export default defineConfig([
  {
    name: 'tt',
    sourceType: 'alipay',
    target: 'bytedance',
    modules: [
      // 主入口包
      {
        name: 'miniapp-entry',
        git: {
          url: 'git@github.com:abc/miniapp-plugin-entry.git',
          branch: 'dev/dy_10.12.5'
        },
        scripts: {
          before: ['npm i', 'npm run build:dy']
        },
        dist: 'dist/dy'
      },

      // 搜索分包
      {
        git: {
          url: 'git@github.com:abc/eleme-miniapp-plugin-search.git',
          branch: 'feat/upgrade-to-mor-2'
        },
        scripts: {
          before: ['npm i', 'cd plugin && npm i', 'mor compile --name dy']
        },
        dist: 'miniprogram_tt/dist'
      },

      // 红包分包
      {
        git: {
          url: 'git@github.com:abc/vouchers.git',
          branch: 'feature/dy'
        },
        scripts: {
          before: ['npm i', 'cd plugin && npm i', 'mor compile --name dy']
        },
        dist: 'dist/bytedance'
      },

      // 订单列表
      {
        git: {
          url: 'git@github.com:abc/miniapp-plugin-orderlist.git',
          branch: 'dev/dy/10.12.5'
        },
        scripts: {
          before: ['npm i', 'npm run build:dy']
        },
        dist: 'build/_bytedance'
      },

      // 平台(地址管理)
      {
        git: {
          url: 'git@github.com:abc/king-home-alipay.git',
          branch: 'feature/dy'
        },
        scripts: {
          before: ['npm i', 'mor compile --name douyin_subpackage']
        },
        dist: 'dist'
      }
    ]
  }
])
```

通过 `Mor` 命令：`mor compile --compose` 即可集成上述配置中宿主和相关的分包。

运行结果示例：

```bash
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
[mor] ℹ 发现配置文件: mor.config.ts
[mor] ✔ 配置文件加载成功: mor.config.ts
[mor] ℹ 小程序集成功能已开启
[mor] ℹ 即将开始集成以下模块(最大并发数: 4):
[mor] ℹ ┌──────────────────────────────────────────────┬────────────────┬──────┬──────┐
        │ 模块 (共 6 个, 集成终态: 已集成)                 │ 版本           │ 类型  │ 模式  │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┤
        │ miniprogram_host                             │ *              │ 宿主  │ 编译 │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┤
        │ miniapp-entry                                │ dev/dy_10.12.5 │ 分包  │ 组合 │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┤
        │ eleme-ad_eleme-miniapp-plugin-search         │ feat/upgrade-… │ 分包  │ 组合 │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┤
        │ mini-foundation_vouchers                     │ feature/dy     │ 分包  │ 组合 │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┤
        │ eleme_miniapp-plugin-orderlist               │ dev/dy/10.12.5 │ 分包  │ 组合 │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┤
        │ alsc-mini-app_king-home-alipay               │ feature/dy     │ 分包  │ 组合 │
        └──────────────────────────────────────────────┴────────────────┴──────┴──────┘
[mor] ℹ 模块 eleme_miniapp-plugin-orderlist 前置脚本开始执行...
[mor] ℹ 模块 eleme_miniapp-plugin-orderlist 执行命令: npm i
[mor] ℹ 模块 alsc-mini-app_king-home-alipay 开始下载...
[mor] ℹ 模块 eleme-ad_eleme-miniapp-plugin-search 前置脚本开始执行...
[mor] ℹ 模块 eleme-ad_eleme-miniapp-plugin-search 执行命令: npm i
[mor] ℹ 模块 mini-foundation_vouchers 前置脚本开始执行...
[mor] ℹ 模块 mini-foundation_vouchers 执行命令: npm i
[mor] ✔ 模块 alsc-mini-app_king-home-alipay 下载成功
[mor] ℹ 模块 alsc-mini-app_king-home-alipay 前置脚本开始执行...
[mor] ℹ 模块 alsc-mini-app_king-home-alipay 执行命令: npm i
[mor] ℹ 模块 eleme_miniapp-plugin-orderlist 执行命令: npm run build:dy
[mor] ✔ 模块 eleme_miniapp-plugin-orderlist 前置脚本执行成功, 耗时: 27.440s
[mor] ℹ 模块 alsc-mini-app_king-home-alipay 执行命令: mor compile --name douyin_subpackage
[mor] ✔ 模块 alsc-mini-app_king-home-alipay 前置脚本执行成功, 耗时: 70.623s
[mor] ℹ 模块 mini-foundation_vouchers 执行命令: cd plugin && npm i
[mor] ℹ 模块 mini-foundation_vouchers 执行命令: mor compile --name dy
[mor] ℹ 模块 eleme-ad_eleme-miniapp-plugin-search 执行命令: cd plugin && npm i
[mor] ✔ 模块 mini-foundation_vouchers 前置脚本执行成功, 耗时: 93.399s
[mor] ℹ 模块 eleme-ad_eleme-miniapp-plugin-search 执行命令: mor compile --name dy
[mor] ✔ 模块 eleme-ad_eleme-miniapp-plugin-search 前置脚本执行成功, 耗时: 115.475s
[mor] ℹ 准备配置中, 即将开始编译 👇
        配置名称: tt
        编译目标: 字节小程序
        编译环境: development
        编译类型: 小程序
        编译模式: bundle
        源码类型: alipay
        源码目录: src
        输出目录: dist/bytedance
[mor] ℹ 已开启缓存, 可通过 --no-cache 关闭
[mor] ℹ 已开启 node_modules 组件处理
[mor] ℹ 开始编译 ...
[mor] ℹ 依赖分析中 ...
[mor] ℹ 依赖分析完成: 耗时: 86.012583 ms
[mor] ℹ 模块集成结果:
[mor] ℹ ┌──────────────────────────────────────────────┬────────────────┬──────┬──────┬──────┐
        │ 模块 (共 6 个, 集成终态: 已集成)                 │ 版本           │ 类型  │ 模式  │ 结果 │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ miniprogram_host                             │ *              │ 宿主  │ 编译 │  ✔   │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ miniapp-entry                                │ dev/dy_10.12.5 │ 分包  │ 组合 │  ✔   │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ eleme-ad_eleme-miniapp-plugin-search         │ feat/upgrade-… │ 分包  │ 组合 │  ✔   │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ mini-foundation_vouchers                     │ feature/dy     │ 分包  │ 组合 │  ✔   │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ eleme_miniapp-plugin-orderlist               │ dev/dy/10.12.5 │ 分包  │ 组合 │  ✔   │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ alsc-mini-app_king-home-alipay               │ feature/dy     │ 分包  │ 组合 │  ✔   │
        └──────────────────────────────────────────────┴────────────────┴──────┴──────┴──────┘
[mor] ✔ 集成产物目录: dist/bytedance
[mor] ✔ 编译完成, 耗时: 127941.680666 ms
```

用小程序 IDE 打开 dist/bytedance 目录即可预览集成后的完整小程序。

### SDK 研发模式

业务可将通用页面封装置某个 `NPM` 包中作为通用功能，如统一宿主的 `Solution` 配置，参见下方示例：

```typescript
import { defineConfig } from '@morjs/cli'
export default defineConfig([
  {
    name: 'tt',
    target: 'bytedance',
    // 配置需要的 SDK
    modules: [
      {
        // 指定 npm 名称和版本
        npm: {
          name: '@ali/mor-runtime-solution-standard-eleme',
          version: '1.0.4'
        },
        // 通过编译的模式参与集成
        mode: 'compile',
        // 作为主包模块进行集成
        type: 'main',
        // @ali/mor-runtime-solution-standard-eleme 包中的产物地址
        dist: './src',
        // 通过配置注入的页面内容：涉及 webview 和登录的页面和组件，由当前 solution 统一收口维护
        // 集成编译后，配置中的页面将会合并至 app.json 的 pages 字段中
        config: {
          pages: {
            'pages/container/index': 'pages/container/index',
            'pages/container-transnavbar/index':
              'pages/container-transnavbar/index',
            'pages/auth/index': 'pages/auth/index',
            'pages/havana/index': 'pages/havana/index'
          }
        }
      }
    ]
  }
])
```

通过 `Mor` 命令：`mor compile --compose` 即可集成上述配置中的页面。

运行结果示例：

```bash
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
[mor] ℹ 发现配置文件: mor.config.ts
[mor] ✔ 配置文件加载成功: mor.config.ts
[mor] ℹ 小程序集成功能已开启
[mor] ℹ 即将开始集成以下模块(最大并发数: 4):
[mor] ℹ ┌──────────────────────────────────────────────┬────────────────┬──────┬──────┐
        │ 模块 (共 2 个, 集成终态: 已集成)                 │ 版本           │ 类型  │ 模式  │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┤
        │ miniprogram_host                             │ *              │ 宿主  │ 编译 │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┤
        │ ali_mor-runtime-solution-standard-eleme_1_0… │ 1.0.4........  │ 主包  │ 编译 │
        └──────────────────────────────────────────────┴────────────────┴──────┴──────┘
[mor] ℹ 准备配置中, 即将开始编译 👇
        配置名称: tt
        编译目标: 字节小程序
        编译环境: development
        编译类型: 小程序
        编译模式: bundle
        源码类型: alipay
        源码目录: src
        输出目录: dist/bytedance
[mor] ℹ 已开启缓存, 可通过 --no-cache 关闭
[mor] ℹ 已开启 node_modules 组件处理
[mor] ℹ 开始编译 ...
[mor] ℹ 依赖分析中 ...
[mor] ℹ 依赖分析完成: 耗时: 1639.405709 ms
[mor] ℹ 模块集成结果:
[mor] ℹ ┌──────────────────────────────────────────────┬────────────────┬──────┬──────┬──────┐
        │ 模块 (共 2 个, 集成终态: 已集成)                 │ 版本           │ 类型  │ 模式  │ 结果 │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ miniprogram_host                             │ *              │ 宿主  │ 编译  │  ✔   │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ ali_mor-runtime-solution-standard-eleme_1_0… │ 1.0.4........  │ 主包  │ 编译 │  ✔   │
        └──────────────────────────────────────────────┴────────────────┴──────┴──────┴──────┘
[mor] ✔ 集成产物目录: dist/bytedance
[mor] ✔ 编译完成, 耗时: 14175.584625 ms
```

### 小程序插件研发模式

由于小程序插件无法独立运行，且对产物目录结构有特殊的要求，如：

```bash
dist
├── miniprogram
├── plugin
└── mini.project.json
```

基于这种情况，我们可以利用 `Mor` 的集成功能，来实现插件研发，参考配置如下：

```typescript
import { defineConfig } from '@morjs/cli'

export default defineConfig([
  {
    name: 'alipay_plugin',
    sourceType: 'alipay',
    target: 'alipay',
    // 编译类型为 插件
    compileType: 'plugin',
    compileMode: 'bundle',
    // 配置插件宿主
    host: {
      git: {
        url: 'git@github.com:abc/king-home-alipay.git',
        branch: 'master'
      },
      scripts: {
        before: ['npm i', 'npm run compile:ali']
      },
      dist: '_ali'
    },
    outputPath: 'dist',
    // 插件源码目录
    srcPath: 'plugin',
    autoClean: true
  }
])
```

通过 `Mor` 命令：`mor compile --name alipay_plugin --compose` 即可集成上述配置中的小程序插件及其宿主。

运行结果示例：

```bash
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
[mor] ℹ 发现配置文件: mor.config.ts
[mor] ✔ 配置文件加载成功: mor.config.ts
[mor] ℹ 小程序集成功能已开启
[mor] ℹ 即将开始集成以下模块(最大并发数: 4):
[mor] ℹ ┌──────────────────────────────────────────────┬────────────────┬──────┬──────┐
        │ 模块 (共 1 个, 集成终态: 已集成)                 │ 版本           │ 类型  │ 模式  │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┤
        │ alsc-mini-app_king-home-alipay               │ master         │ 宿主  │ 组合 │
        └──────────────────────────────────────────────┴────────────────┴──────┴──────┘
[mor] ℹ 准备配置中, 即将开始编译 👇
        配置名称: alipay_plugin
        编译目标: 支付宝小程序
        编译环境: development
        编译类型: 插件
        编译模式: bundle
        源码类型: alipay
        源码目录: plugin
        编译产物: dist/plugin
        输出目录: dist
[mor] ℹ 已开启缓存, 可通过 --no-cache 关闭
[mor] ℹ 启动文件监听模式
[mor] ℹ 开始编译 ...
[mor] ℹ 依赖分析中 ...
[mor] ℹ 依赖分析完成: 耗时: 12.790667 ms
[mor] ⠼ 正在编译, 进度: 99.00%
[mor] ℹ 模块集成结果:
[mor] ℹ ┌──────────────────────────────────────────────┬────────────────┬──────┬──────┬──────┐
        │ 模块 (共 1 个, 集成终态: 已集成)                 │ 版本           │ 类型  │ 模式  │ 结果 │
        ├──────────────────────────────────────────────┼────────────────┼──────┼──────┼──────┤
        │ alsc-mini-app_king-home-alipay               │ master         │ 宿主  │ 组合 │  ✔   │
        └──────────────────────────────────────────────┴────────────────┴──────┴──────┴──────┘
[mor] ✔ 集成产物目录: dist/miniprogram
[mor] ✔ 编译完成, 耗时: 1544.04675 ms
```

用小程序 IDE 打开 dist 目录即可预览小程序插件。

## 命令行说明

除了通过 [配置](/guides/basic/config#集成相关配置) 的方式来使用集成能力之外，部分功能也可以结合命令行来使用，命令行的优先级高于用户配置，具体参见下方说明：

```bash
集成相关命令行用法:
  $ mor compose 或 mor compile --compose

集成相关命令行选项:
  --with-modules <moduleName>     指定需要参与集成的模块, 基于模块的名称筛选, 支持 glob 模式，如需指定多个，可用逗号（,）分割，示例： --with-modules '*eleme-solution,*plugin-entry' 或 --with-modules '*eleme-solution,*plugin-entry'
  --without-modules <moduleName>  排除不需要集成的模块, 基于模块的名称筛选, 支持 glob 模式，用法和 --with-modules 类似
  --from-state <state>            控制模块集成时的初始状态, 可选值: 0-6，每个状态码对应的含义参见文档内 `集成状态` 的描述
  --to-state <state>              控制模块集成时的最终状态, 可选值: 0-6，每个状态码对应的含义参见文档内 `集成状态` 的描述
  --concurrency <number>          控制模块集成时的并发数量，默认会基于本机 CPU 核数和内存 GB 数生成一个并发数量
  --combine-modules               合并模块配置（主要用于合并分包配置的页面到主包中），用于适配抖音小程序的流加载
```

## 集成流程定制

`Mor` 提供了若干 `Hooks` 用于支持工程插件定制集成流程。

有关集成 `Hooks` 可参见文档：[工程 API - Hooks - 集成 Hooks](/api/engineering-hooks#集成-hooks)

关于如何编写工程插件，可参见文档：[插件 - 如何开发插件 - 开发工程插件](/guides/basic/plugin#%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E6%8F%92%E4%BB%B6)
