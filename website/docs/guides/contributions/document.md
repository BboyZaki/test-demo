# 如何贡献文档?

- 站点地址：[MorJS 官网](https://mor.eleme.io/)
- 仓库地址：[MorJS 文档仓库](https://github.com/eleme/mor/blob/gh-pages/website)

## 文档约定

编写文档请先阅读并遵守：[《文档编写及排版规范》](/specifications/document.md)

## 拉取代码

拉取 MorJS 站点仓库代码: `git clone https://github.com/eleme/mor.git`

## 安装依赖

首选需要安装构建相关依赖

```shell
npm install
```

## 启动

安装好依赖之后，在本地执行如下命令启动文档站点：

```shell
npm run start
```

本地服务启动后，可通过 <http://localhost:8000> 预览站点文档。

## 如何向 `mor-site` 提交代码

`mor-site` 需要通过 MR 的方式来提交代码，开发前可咨询一下 `@羽境` 基于哪个分支，通常可默认基于 `master` 分支：

分支名称要求：

- **文档（docs）**: docs/日期\_英文描述，例：feature/20221130_add_analyze_config

完成代码提交后，需要在 <https://github.com/mor/mor-site> 中提交代码评审，评审的目标分支为评审分支创建时基于的分支。

### Commit 规范

参考 [代码提交和审查规范](/specifications/git-commit-and-review)

### Commit 示例

`docs(config): 增加 analyze 配置描述和示例`
