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