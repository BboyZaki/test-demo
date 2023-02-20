# 插件

## 插件类型介绍

- 工程插件：一般用于定制命令行、介入编译阶段或集成阶段
- 运行时插件：一般用于介入小程序运行时的各阶段
- 运行时解决方案：简单来说就是运行时插件集

业务可基于自身业务诉求来定制或使用 工程插件 或 运行时插件/解决方案。

## 如何使用插件？

### 使用工程插件

- 工程插件需要先安装依赖 `npm install @morjs/cli-plugin-xxx -D`
- 在 `mor.config.ts` 配置文件中进行引入，并加入到配置项 `plugins` 中即可
- 原 `MorJS 1` 相关工程插件，在引入后需要加入到配置项 `compatible` 中，详情可参考 [MorJS 基础- 配置 - compatible](/guides/basic/config#compatible)

```typescript
import { defineConfig } from '@morjs/cli'
import PluginXXX from '@morjs/cli-plugin-xxx'

export default defineConfig([
  {
    // name: 'ali',
    // sourceType: 'alipay' ,
    // target: 'alipay',
    // compileMode: 'bundle',
    plugins: [new PluginXXX()]
  }
])
```

### 使用运行时插件/解决放哪

- 运行时插件/解决方案需要在 `app.ts` 文件中进行引入，加入到对应配置项中即可

```typescript
import { aApp } from '@morjs/core'
import RuntimePluginXXX from '@ali/mor-runtime-plugin-xxx'
import RuntimeSolutionXXX from '@ali/mor-runtime-solution-xxx'

aApp(
  {
    onLaunch() {
      console.log('app onlaunch')
    }
  },
  [
    RuntimeSolutionXXX(),
    () => {
      return {
        plugins: [new RuntimePluginXXX()]
      }
    }
  ]
)
```

## 如何开发插件？

### 开发工程插件

开发工程插件有两种方法，推荐使用第一种：

- 方法一：使用官方提供的脚手架 `@ali/mor-boilerplate-cli-plugin` 初始化工程插件项目，在需要使用的项目中进行引入；
- 方法二：直接在业务项目的 `mor.config.ts` 配置文件中进行编写；

#### 通过脚手架编写 `mor` 工程插件

1. 全局安装 mor cli 工具

```bash
npm i @morjs/cli -g
```

2. 通过 mor cli 工具创建项目

```bash
mor init
```

3. 选择`MorJS 工程插件`回车

```bash
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
请选择工程类型 › - Use arrow-keys. Return to submit.
    小程序
    小程序插件
    小程序分包
❯   Mor 工程插件
    Mor 运行时插件
    Mor 运行时解决方案
    Mor 多端组件库
    Mor 自定义脚手架
```

4. 根据提示完成操作后，即可完成插件项目创建，随后按照 [如何使用工程插件](#使用工程插件) 配置到`mor.config.ts`配置文件中进行使用即可

```bash
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
✔ 请选择工程类型 › MorJS 工程插件
✔ 请输入项目名称 … myapp
✔ 请输入项目描述 … my first plugin
✔ 用户名 … 致康
✔ 邮箱 … zhikangliu.lzk@github.com
✔ 请输入 Git 仓库地址 …
```

#### mor.config.\* 的工程插件开发(不推荐)

- 直接在项目的`mor.config.ts`配置文件中进行编写

```typescript
import { defineConfig } from '@morjs/cli'

export default defineConfig([
  {
    // name: 'ali',
    // sourceType: 'alipay' ,
    // target: 'alipay',
    // compileMode: 'bundle',
    plugins: [
      {
        name: 'MorPluginXXX',
        apply(runner) {
          // TODO: 引入编译时相关 hooks 进行操作介入，如:
          runner.hooks.addEntry.tap(this.name, (entryInfo) => {
            // addEntry: 添加 entry 时触发, 可用于修改 entry 相关信息
            return entryInfo
          })
        }
      }
    ]
  }
])
```

### 开发运行时插件

开发运行时插件有两种方法，推荐使用第一种方案：

- 方法一：使用官方提供的脚手架 `@ali/mor-boilerplate-runtime-plugin` 初始化运行时插件项目，在需要使用的项目中进行引入；
- 方法二：直接在业务项目的 `app.ts` 配置文件中进行编写。

#### 脚手架 @ali/mor-boilerplate-runtime-plugin

1. 全局安装 mor cli 工具

```bash
npm i @morjs/cli -g
```

2. 通过 mor cli 工具创建项目

```bash
mor init
```

3. 选择`MorJS 运行时插件`回车

```bash
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
请选择工程类型 › - Use arrow-keys. Return to submit.
    小程序
    小程序插件
    小程序分包
    Mor 工程插件
❯   Mor 运行时插件
    Mor 运行时解决方案
    Mor 多端组件库
    Mor 自定义脚手架
```

4. 根据提示完成操作后，即可完成插件项目创建，随后按照 [如何使用运行时插件](#使用运行时插件) 配置到`app.ts`文件进行使用即可

```bash
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
✔ 请选择工程类型 › MorJS 运行时插件
✔ 请输入项目名称 … myapp
✔ 请输入项目描述 … my first runtime plugin
✔ 用户名 … 致康
✔ 邮箱 … zhikangliu.lzk@github.com
✔ 请输入 Git 仓库地址 …
```

#### app.ts 的运行时插件开发(不推荐)

- 直接在项目的`app.ts`文件中进行编写

```typescript
import { aApp } from '@morjs/core'

aApp(
  {
    onLaunch() {
      console.log('app onlaunch')
    }
  },
  [
    () => {
      return {
        plugins: [
          {
            pluginName: 'RuntimePluginXXX',
            apply(morHooks) {
              // TODO: 引入运行时相关 hooks 进行操作介入，如:
              morHooks.appOnShow.tap(
                this.pluginName,
                function (this, options) {}
              )
            }
          }
        ]
      }
    }
  ]
)
```

### 开发运行时 Solution

开发运行时 Solution 可使用官方提供的脚手架 `@ali/mor-boilerplate-runtime-solution` 初始化运行时 Solution ，在需要使用的项目中进行引入

1. 全局安装 mor cli 工具

```bash
npm i @morjs/cli -g
```

2. 通过 mor cli 工具创建项目

```bash
mor init
```

3. 选择`MorJS 运行时解决方案`回车

```bash
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
? 请选择工程类型 › - Use arrow-keys. Return to submit.
    小程序
    小程序插件
    小程序分包
    Mor 工程插件
    Mor 运行时插件
❯   Mor 运行时解决方案
    Mor 多端组件库
    Mor 自定义脚手架
```

4. 根据提示完成操作后，即可完成插件项目创建，随后按照 [如何使用运行时插件/Solution](#使用运行时插件solution) 配置到`app.ts`文件进行使用即可

```bash
[mor] ⚑ 当前 MorJS 为开源版本: @morjs/cli@1.0.0
✔ 请选择工程类型 › MorJS 运行时解决方案
✔ 请输入项目名称 … myapp
✔ 请输入项目描述 … my first runtime solution
✔ 用户名 … 致康
✔ 邮箱 … zhikangliu.lzk@github.com
✔ 请输入 Git 仓库地址 …
```
