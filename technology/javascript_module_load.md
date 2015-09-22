# 模块加载器

## 知乎问答
* [AMD 和 CMD 的区别有哪些](http://www.zhihu.com/question/20351507)


## CommonJS
CommonJS是一个组织，它让JS可以在共同的方向上做努力，来完善JS。

CommonJS其中就有一个Modules规范，我们都像JS现在这样所有东西都写在一个文件中来写server端应用是一件非常困难的事情，它就是来解决JS没有模块化管理代码的功能。关键部分就二个函数:

require - 用来引入依赖

export - 用来导出模块，包括标识符(identifier)和模块内容(contents)

CommonJS并没有只是一个规范，就像Java中的Interface一样，并没有注明你应该怎么实现。

CommonJS的这个Modules规范设计之初是为了server端设计的，它是一个同步的模式。但是这种模式并不适合于浏览器端，大家设想一下如果浏览器同步模式一个一个加载模块，那么打开将会变得非常的慢，所以AMD就是为了这个诞生，它最大的特点就是可以异步的方式加载模块，具体的不同在于AMD有一个define函数，它可以让当前模块运行时先加载当前模块所依赖的模块，例如以下定义的意义就是在运行function时先加载依赖的module, dependency, array模块。

## CMD

玉伯写了seajs，就是遵循他提出的CMD规范
CommonJs是应用在NodeJs，是一种同步的模块机制。它的写法大致如下：
var firstModule = require("firstModule");

//your code...

module.export = anotherModule

注意：是同步的哦

CommonJS定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)}
 
require()用来引入外部模块；exports对象用于导出当前模块的方法或变量，唯一的导出口；module对象就代表模块本身。

---------------------------------------服务器端JS   |    浏览器端JS-------------------------------------------
 
                                   相同的代码需要多次执行  |    代码需要从一个服务器端分发到多个客户端执行
 
                                     CPU和内存资源是瓶颈   |    带宽是瓶颈
 
                                        加载时从磁盘中加载   |    加载时需要通过网络加载

## AMD

AMD:异步模块定义。

如果浏览器同步模式一个一个加载模块，那么打开将会变得非常的慢，所以AMD就是为了这个诞生，它最大的特点就是可以异步的方式加载模块，具体的不同在于AMD有一个define函数，它可以让当前模块运行时先加载当前模块所依赖的模块，例如以下定义的意义就是在运行function时先加载依赖的module, dependency, array模块。

AMD的应用场景则是浏览器，异步加载的模块机制。require.js的写法大致如下：
define(['firstModule'], function(module){

//your code...
return anotherModule
})

注意：是异步的哦

AMD规范允许输出的模块兼容CommonJS规范，这时define方法需要写成下面这样：

define(function (require, exports, module){
    var someModule = require("someModule");
    var anotherModule = require("anotherModule");    

    someModule.doTehAwesome();
    anotherModule.doMoarAwesome();

    exports.asplode = function (){
        someModule.doTehAwesome();
        anotherModule.doMoarAwesome();
    };
});

RequireJS就是实现了AMD规范。RequrieJS其实就是AMD现在用的最广泛，最流行的实现。

## CMD


## webpack
我们来看看webpack支持哪些功能特性：
支持CommonJs和AMD模块，意思也就是我们基本可以无痛迁移旧项目。
支持模块加载器和插件机制，可对模块灵活定制。特别是我最爱的babel-loader，有效支持ES6。
可以通过配置，打包成多个文件。有效利用浏览器的缓存功能提升性能。
将样式文件和图片等静态资源也可视为模块进行打包。配合loader加载器，可以支持sass，less等CSS预处理器。
内置有source map，即使打包在一起依旧方便调试。

