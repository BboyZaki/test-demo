# 整体架构

关于小程序转 `Web`，`Mor` 的思路是将已有的小程序工程直接转成 `react` 代码。

借助 `Webpack` ，`Mor` 提供了一整套的 `loader`，包含 `axml-loader`(负责编译 `axml` 文件)、`acss-loader` (负责编译 `acss` 文件)、`js-loader` (负责编译小程序中的 `js` 文件)。

## 介绍

<img src="https://img.alicdn.com/imgextra/i4/O1CN01LUpIOy1Y2VP3TXF7u_!!6000000003001-2-tps-1211-699.png" width="700" />

上图是小程序转 `Web` 的整体架构。最上面的四个部分属于内核部分，分别由 编译器、`dsl runtime`、`api(my)`、全局公共组件 四个模块组成，每一个模块都是独立可替换的。

### Compiler（编译器）

编译器模块比较特殊，主要负责将 `axml` 、`acss` 、`js` 、`json` 等文件编译成模块化的 `js` 文件，完全是静态编译。至于详细的编译流程下面会细说。

### Runtime（运行时）

`runtime` 提供了小程序在 h5 中的运行时功能，比如：`Page` 、`Component` 、`App` 等全局函数，并且提供完整的生命周期实现，事件的注册、分发(非 `react` 事件)，`slot`、`block` 等全局 `DSL` 层面组件实现，等等。

### API (my.\*)

`api` 模块提供了类似支付宝小程序中 `my` 一系列 `api` 的实现，事实上，目前 `api` 的实现其实相对来说比较分散，在 `api` 模块并没有提供全部的支付宝小程序 `api` 的实现，有些 `api` 在全局公共组件来实现(比如：`UI` 相关的 `api`，下拉刷新等)，甚至有些 `api` 需要开发者自己来实现(比如：登录态的获取等等)。

### Components(全局公共组件)

全局公共组件指的是 `view`、`button`、`scroll-view` 等支付宝小程序原生提供的组件，在 `Mor` 中，这些组件是基于 `web-components` 来实现的，之所以使用`web-components` 来实现而不是 `react` ，是基于以下几个原因:

1. `web-components` 组件支持标签选择器。这样就能跟小程序的组件在样式的写法上抹平。
2. `web-components` 组件天生具备样式隔离的能力，不用担心公共组件的样式会污染全局。
3. `web-components` 组件支持路由事件，因此小程序中的 `tap、touch` 等事件可以直接自定义抛出。
4. `web-components` 组件注册以后，可以像原生 `html` 组件一样使用，无需单独引入组件文件。支持原生 `html` 组件的所有方法和功能。

以上几个优势，如果用 `react` 来实现，虽然在技术上是可以有类似的实现，但是成本就比较高了，远不如 `web-components` 来的简单直接。

### 其它

除了以上四个核心模块以外，由于公共组件、`api` 的实现都是模块化的，尤其是 `api` 部分，可以轻易的扩展自己的 `api` 设置重写部分 `api` ，因此对于接入方来说，可以扩展自己的公共组件、`api`。

以上四个模块，除了编译器模块，剩余的三个模块整体才算一个完整的小程序运行时。

## 运行流程

![image](https://gw.alicdn.com/imgextra/i2/O1CN01NXWnRg1JjoVOn5yIv_!!6000000001065-2-tps-588-585.png)

上图中的运行流程其实跟普通的 `react` 工程运行流程差不多，仅仅是多了一个针对 `axml` 文件、`acss` 文件、`js` 文件进行额外编译转码的流程，最终还是通过 `webpack` 进行打包运行。

进一步可以分析出，这样的流程，不管是整个工程级别的转码，还是组件库级别转码，甚至是已有 `react` 项目直接引入小程序代码，都可以通过上图中的方式直接(`loader` 方式)或者间接(命令行)运行。

## 编译流程

> 不同的文件，编译的方式是不一样的，编译处理的内容也是不一样的。

### AXML

![image](https://gw.alicdn.com/imgextra/i4/O1CN01bVHbLn27FKwASkBxP_!!6000000007767-2-tps-763-136.png)

整个小程序编译器，就数 `axml` 文件编译最复杂。整个编译流程如上图所示。

1. 将 `axml` 文件转换成 `xml` 文档树。
2. 将 `xml` 文档树，转换成小程序的 `ast`。针对不同的节点类型、属性类型做针对性的转换。
   3, 将小程序 `ast` 进一步转换成 `jsx` 代码。事实上，有了 `ast` 以后，不仅能转换成 `react` 代码，也可以转换成 `vue` 的代码，甚至也可以转换成基于 `web-component` 的代码，只需要提供不同的 `dsl runtime` 即可。这也是为何上面将 `dsl runtime` 单独作为一个模块的原因。

`axml` 编译复杂的部分，不在 `ast`，而是在 `generate` 中，各种小程序 `dsl` 的特性都需要在这里进行转换。

### ACSS

`acss` 编译，其实很简单，目前只是做了三件事:

1. `rpx` 支持—— 将 `rpx` 编译成 `rem` 。
2. 标签样式的支持—— 这是这里仅仅是做了一个标签样式的重命名。之所以这样，是因为在实际 `axml` 中用的标签比如 `view` ，但是实际注册的标签名是 `tiga-view` 。因此在`acss` 文件中，对标签样式的重命名也是一个非常重要的功能。
3. 条件编译。

### JS

最新版本的编译器，极大简化了 `JS` 文件的编译。目前 `JS` 编译器仅仅如如下几个事情。

1. 条件编译的支持。
2. `import` 路径的转换。主要是将绝对路径转换成相对于工程的根目录的相对路径。
3. 将 `Page` 或者 `Component` 相关的 `js` 文件，编译成以 `export default` 形式导出的 `js` 文件，之所以这样做，是因为需要将 `Page` 或者 `Component` 全部以组件的形式导出，然后可以被其他 `js` 文件引用。

### 总结

但从编译器来说，最核心的就是 `AXML` 的编译，而 `acss` 和 `js` 文件 的编译相对来说很简单。