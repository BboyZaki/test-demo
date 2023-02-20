# 基础配置

## 配置介绍

本篇幅的文章会对 `Web` 端的每一项配置做详细的介绍，如果你想查看 `Mor` 全部配置，可以到点击 [MorJS 配置](/guides/basic/config) 。

通过 [快速上手](/web/basic/quickstart) 你已经完成了 `Web` 端的编译配置，此时打开项目的 `mor.config.ts`，你会看到如下配置 👁：

```ts
import { defineConfig } from '@morjs/cli'

export default defineConfig([
  {
    name: 'ali',
    sourceType: 'alipay',
    target: 'alipay',
    compileType: 'miniprogram',
    compileMode: 'bundle'
  },
  {
    name: 'wechat',
    sourceType: 'alipay',
    target: 'wechat',
    compileType: 'miniprogram',
    compileMode: 'bundle'
  },
  {
    name: 'web',
    sourceType: 'alipay',
    target: 'web',
    compileType: 'miniprogram',
    compileMode: 'bundle',

    // web 端配置项，下方介绍的配置项都将在这里进行配置
    web: {}
  }
])
```

好了，准备工作已经完成，接下来我们开始介绍配置 🚀

### globalComponentsConfig

| 是否必填 | 参数类型 |                                                        默认值                                                         |                参数含义                |
| :------: | :------: | :-------------------------------------------------------------------------------------------------------------------: | :------------------------------------: |
|    否    |  object  | [点击查看](https://code.alibaba-inc.com/mor/opensource-mor/tree/master/packages/runtime-web/src/components/config.ts) | 用于配置 小程序组件=>web 组件 的映射表 |

背景补充说明：将小程序的代码转换成 `Web` 端的一个前提是，我们需要在 `Web` 端 1:1 实现小程序支持的组件。在编译过程中维护了一张映射表，在编译的过程中将小程序的组件进行替换，比如 `view` 组件，我们将其替换成了 `tiga-view`，那么 `tiga-view` 从哪里来呢？实际上，我们在 1:1 实现小程序的时候使用了 `Web Components`（选用 `Google` 开源的 [lit](https://lit.dev/)），所以我们只需要在项目运行时，在顶部将 `tiga-view` 这个自定义组件注册就可以正常使用了。

如果我们遇到了以下场景我们可能会考虑使用 `globalComponentsConfig` 配置:

1. 在 `Web`端 需要通过条件编译渲染一些小程序不支持的组件，这个组件直接使用 `web-components` 实现;
2. `Mor` 提供的组件实现和支付宝小程序是一致的，无法定制，需要使用 `web-components` 实现一些定制组件。

> 需要注意的是，如果要配置此项，你需要将自定义的 web-components 提前注册，一般要么自定义 entry，要么在 htmlOptions 配置中自定义 templateContent，然后在顶部引入。以上两个配置接下来我们都会介绍

配置示例 🌰：

```ts
...
web: {
  globalComponentsConfig: {
    'view': 'custom-view'， // 将 view 映射到自定义的 custom-view 组件
  }
}
...
```

### styleScope

| 是否必填 | 参数类型 | 默认值 |       参数含义       |
| :------: | :------: | :----: | :------------------: |
|    否    | boolean  | false  | 配置是否开启样式隔离 |

为了避免各页面或者各个组件之间的样式相互影响，可以打开此开关。打开此开关后，`mor` 在编译时会自动给 `class` 打上 `hash` 值。如果项目中存在 `page` 中样式共享给 `component` 的场景，请不要打开此开关。除了此开关之外，我们还提供了其它方式启用样式隔离：

1. 在 `app.json` 中增加 `styleScope: true`，此功能也是全局开启样式隔离。
2. 在 `page or components` 的 `.json` 文件中配置 `styleScope: true`，此配置可以开启页面级/组件级样式隔离。

### rpxRootValue

| 是否必填 | 参数类型 | 默认值 |           参数含义            |
| :------: | :------: | :----: | :---------------------------: |
|    否    |  number  |   32   | rpx 转换成 rem 单位时的基准值 |

默认情况下，`mor` 在编译的时候会将 `rpx` 样式单位转换成 `rem`，而 `rem` 的计算公式为 `toFixed(pixel/rpxRootValue, 5)`。

> 转换成 rem 单位后，业务可通过 `responsiveRootFontSize` 配置达到响应式的目的。1rem = html font-size，现在各主流浏览器默认 html font-size 的大小为 16px。

### responsiveRootFontSize

| 是否必填 | 参数类型 | 默认值 |                                                 参数含义                                                 |
| :------: | :------: | :----: | :------------------------------------------------------------------------------------------------------: |
|    否    |  number  |   -    | 设置 html 的 font-size 值大小，且该值设定之后会监听窗口 resize 事件，以 375 屏幕为基准动态调整 font-size |

该配置开启后，`html font-size` 的计算公式为 `((rootFontSize * window.document.documentElement.clientWidth) / 375 + 'px')`。一般我们建议将该值手动设定为 `16`。（`rpxRootValue` 默认值为 32， 这意味着 `32rpx` 将为转换成 `1rem`，`responsiveRootFontSize` 设定为 `16` 之后， 会使 `32rpx = 1rem = 16px` 等式成立，和小程序逻辑是一致的）

### needRpx

| 是否必填 | 参数类型 | 默认值 |                        参数含义                        |
| :------: | :------: | :----: | :----------------------------------------------------: |
|    否    | boolean  |  true  | 设置为 true 会自动开启 rpx 转 rem，设置为 false 则关闭 |

有些业务场景可能需要自定义响应式方案，比如使用 [postcss-rpx2vw](https://www.npmjs.com/package/postcss-px2vw), 所以提供此配置关闭 `mor` 的默认转换功能。

> 可使用 mor 暴露出来的 [webpackChain](/guides/basic/config#webpackchain) 功能对样式处理做自定义处理。

### usePx

| 是否必填 | 参数类型 | 默认值 |                                               参数含义                                               |
| :------: | :------: | :----: | :--------------------------------------------------------------------------------------------------: |
|    否    |  object  |   -    | 接受一个对象，对象内有一个参数 ratio，用于指定 rpx 转 px 的比例，实际计算的 px 值 = (rpx 值 / ratio) |

使用此配置的场景一般是使用 `mor` 提供的功能将 `rpx` 单位转换成 `px` 单位，然后使用 `postcss` 的插件做自定义的功能（`postcss` 生态中的大部分插件都是针对 `px` 单位做处理的）。

### showHeader

| 是否必填 |    参数类型    | 默认值 |                                            参数含义                                             |
| :------: | :------------: | :----: | :---------------------------------------------------------------------------------------------: |
|    否    | boolean，array |  true  | 控制是否展示默认的导航栏(数组类型可以指定 `app.json` 中的 `pages` 路径，用于设置需要开启的页面) |

在内嵌在容器的场景下，为了避免双导航栏情况，可以使用该配置将 `mor` 提供的导航栏关闭。

有以下两种场景可能需要动态隐藏导航栏的功能：

1. `Mor` 转 `Web` 页面通过 `webview` 组件内嵌另一个 通过 `Mor` 转出来的 `Web` 页面（这时候会有两个 `mor` 提供的头部）
2. `Mor` 转 `Web` 页面内嵌在小程序的 `webview` 组件内

基于以上两种场景，我们提供了动态隐藏头部的能力，在 `url` 上增加 `hide-header=1` 即可将当前页面的头部隐藏掉。

### showBack

| 是否必填 |    参数类型    | 默认值 |                                                参数含义                                                 |
| :------: | :------------: | :----: | :-----------------------------------------------------------------------------------------------------: |
|    否    | boolean，array | false  | 控制是否在导航栏上展示返回箭头(数组类型下可以指定 `app.json` 中的 `pages` 路径，用于设置需要开启的页面) |

点击返回箭头会调用 `my.navigateBack()` 尝试返回，如果你的页面内嵌在 `app` 内，使用该方法无法返回，可以选择使用 `window.addEventListener('tiga-back', () => { // 返回逻辑 } )`。

### appConfig

| 是否必填 | 参数类型 | 默认值 |        参数含义        |
| :------: | :------: | :----: | :--------------------: |
|    否    |  object  |  null  | 用于设置一些全局的配置 |

目前支持的配置如下：

|          参数名          | 参数类型 |                                默认值                                |                                                                                                                                                                                                           参数含义                                                                                                                                                                                                            |
| :----------------------: | :------: | :------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      apiNoConflict       | boolean  |                                 true                                 | 设置为 `true` 说明不覆盖已存在 `my.*` 上存在的方法，设置为 `false` 代表要覆盖已有的方法。<br/> 在支付宝小程序 `webview` 内嵌网页的时候，会在 `my` 对象上设置 [方法](https://opendocs.alipay.com/mini/component/web-view#%E5%8F%AF%E7%94%A8%20API)，这个时候容器内置的方法名称会和 `mor` 提供的有冲突，设置为 `true` 代表有冲突的时候，优先使用容器内置的方法，设置为 `false` 代表使用 `Mor`提供的方法覆盖掉容器提供的默认方法 |
|      components.map      |  object  |                                 null                                 |                                                                                                                                                                                          给地图组件传递配置（`key,version,sdk` 等）                                                                                                                                                                                           |
| components.video.cdnUrl  |  string  |                  https://cdn.plyr.io/3.7.3/plyr.js                   |                                                                                                                                                                     `video` 组件是基于 [Plyr](https://plyr.io/) 实现的，此配置用于自定义该库的 `cdn` 地址                                                                                                                                                                     |
| components.swiper.cdnUrl |  string  | https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/js/swiper.min.js |                                                                                                                                                                 `swiper` 组件是基于 [Swiper](https://swiperjs.com/) 实现的, 此配置用于自定义该库的 `cdn` 地址                                                                                                                                                                 |

参考用例如下 👇🏻:

```
web: {
  appConfig: {
    apiNoConflict: false,
    components: {
      // sdk 和 version 的指定参考 https://lbs.amap.com/api/jsapi-v2/guide/abc/load
      map: {
        sdk: '', // 地图 sdk 地址
        version: '', // 地图 sdk 版本
        key: '', // 地图 key，申请请参考 https://lbs.amap.com/api/webservice/gettingstarted
      },
      video: {
        cdnUrl: '', // 自定义的 plyr sdk cdn 地址
      },

    }
  }
}
```

### 其它

其它工程纬度的配置可以直接参考 [此处](/guides/basic/config#web)
