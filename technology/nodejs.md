# nodejs笔记

## process 进程
* process对象是一个全局对象，可以在任何地方访问到它。 它是EventEmitter的一个实例。

### Exit Codes
* 0：程序正常执行的情况下会返回0
* 1：Uncaught Fatal Exception(未捕获的致命异常)
* 2: Unused (备用)
* 3: Internal JavaScript Parse Error(解析错误)
* 4: 评估失败
* 5 致命错误(Fatal Error)
* 6 未正确的异常处理(Non-function Internal Exception Handler) 
* 7 异常处理函数运行时失败(Internal Exception Handler Run-Time Failure) 
* 8 - 未使用(Unused)
* 9 - 无效的参数(Invalid Argument) 
* 10 运行时失败(Internal JavaScript Run-Time Failure) 
* 12 无效的调试参数(Invalid Debug Argument)
* 128 信号退出(Signal Exits) 

### exit
* 进程将要退出时触发。

## try-catch
* 只有在同步的代码块中才能try-catch，不能在回调中使用。


## generator
* yield后面可以跟 *anothergenerator，这样当前的断点就会进入到anothergenerator的generatorfunction里面，等子generator全部执行完后再回来继续执行。这个其实有点类似递归的意思。
* 另外子generatorfunction的return值会做为yield*generator的返回值。
* 子generator的generatorFunction里面如果有return的话，下面的断点就不再起作用，而是提前返回，并且return的值 作为代理调用的返回值。


## koa

### 使用 debug
```
var debug = require('debug')('test');
app.get('/test',function *(){
    debug('env: %s', 'message');
    this.body = 'test';
});
DEBUG=test node app.js // 仅输出 test 分组的 log
DEBUG=* node app.js // 输出所有分组的 log
```

### yield
* yield a 会暂停执行并保存当前堆栈，返回当前的a。

* yield句本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值。

* generator 函数与普通函数不同，只定义遍历器，而不会执行，每次调用这个遍历器的next方法，就从函数体的头部或者上一次停下来的地方开始执行，直到遇到下一个yield语句为止。

* generator 函数的 constructor 为 'GeneratorFunction'

* yield语句就是暂停标志，next方法遇到yield，就会暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回对象的value属性的值。当下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。如果没有再遇到新的yield语句，就一直运行到函数结束，将return语句后面的表达式的值，作为value属性的值，如果该函数没有return语句，则value属性的值为undefined。

* yield 后面（yieldable）可以跟上 function, promise, generator function, array, or object（不支持 string）。

### co
* co 要求所有的异步函数必须是偏函数，称之为 thunk :

####   thunk 函数
* Thunk函数是一个偏函数，执行它会得到一个新的只带一个回调参数的函数。在 JavaScript 语言中，Thunk 函数替换的是将多参数函数，替换成单参数的版本，且只接受回调函数作为参数。