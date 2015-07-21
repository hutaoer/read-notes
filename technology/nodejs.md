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