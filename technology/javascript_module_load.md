# 模块加载器

## CMD
CommonJs是应用在NodeJs，是一种同步的模块机制。它的写法大致如下：
var firstModule = require("firstModule");

//your code...

module.export = anotherModule

注意：是同步的哦


## AMD

AMD的应用场景则是浏览器，异步加载的模块机制。require.js的写法大致如下：
define(['firstModule'], function(module){

//your code...
return anotherModule
})

注意：是异步的哦

## webpack
我们来看看webpack支持哪些功能特性：
支持CommonJs和AMD模块，意思也就是我们基本可以无痛迁移旧项目。
支持模块加载器和插件机制，可对模块灵活定制。特别是我最爱的babel-loader，有效支持ES6。
可以通过配置，打包成多个文件。有效利用浏览器的缓存功能提升性能。
将样式文件和图片等静态资源也可视为模块进行打包。配合loader加载器，可以支持sass，less等CSS预处理器。
内置有source map，即使打包在一起依旧方便调试。

