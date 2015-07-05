# nodejs实战

## 超越web服务器
* 原文：HTTP是无状态协议，客户端只能向服务器发起单个的、短命的请求，并且服务器也没有真正意义上的已连接或断开的用户。P278
* 理解：HTTP是单向的请求，不会记录状态。即客户端=》服务器，而不能服务器=》客户端。可以通过轮询或者长连接来解决服务器的更新到客户端。

## HTTP服务器的基础知识
* 原文：服务器每收到一条HTTP请求，都会用新的req和res对象触发请求回调函数。在触发回调前，Node会解析请求的HTTP头，并将他们作为req对象的一部分提供给请求回调。但Node不会在回调函数被触发之前开始对请求的解析。Node不会自动往客户端写任何响应。需要自己调用res.end()来结束响应。P66
* 使用res.statusCode属性来设置HTTP的状态值。比如res.statusCode = 302; 
* Node的HTTP解析器读入并解析请求数据时，它会将数据做成data事件的形式，并把解析好的数据块放入其中。data事件由req对象提供。
* 默认状态为200 OK


### 设置302跳转
    var url = 'xxx.com';
    var body = '<p> redirect to xxx.com</p>';
    res.setHeader('Location', url);
    res.setHeader('Content-Length', body.length);
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 302;
    res.end(body);

### data事件
    var http = require('http')
    var server = http.createServer(function(req, res) {
            req.on('data', function(chunk) {
                console.log('parsed', chunck)
            })
            req.on('end', function() {
                res.end()
            })
        })


## 第五章 存储Node程序中的数据
* PostgreSQL支持同步复制，这种复制形态会在每次数据操作后对复制进行验证，从而防止数据丢失。
* 对于实时分析或消息传递而言，NoSQL数据库是更好的选择。它不需要预定义schema.比较流行的两个NoSQL数据库：Redis和MongoDB
* Redis适合处理不需要长期访问的简单数据存储。它把数据存在内存中，并在磁盘中记录数据的变化。存储空间有限，但是数据操作快。
* MongoDB把文档存在集合中。集合中的每个文档都可以是不同的schema。
* MongoDB{safe:true}，即在执行回调之前执行数据库操作。文档标识为二进制的JSON。比JSON更节省空间，解析更快。


## 第八章 Express
* __dirname 是一个全局变量，用来确定当前运行文件所在的目录。
