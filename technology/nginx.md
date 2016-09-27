# nginx

## 反向代理本地端口到 80 端口
* 先确保安装了 nginx
* 编辑配置文件，以 mac osx 为例
`vim /usr/local/etc/nginx/nginx.conf`
* 添加配置项
```
server {
	listen 80;
	server_name 127.0.0.1;
	location / {
		proxy_pass http://127.0.0.1:3333;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_redirect off;
	}
}
```
* 使得配置生效
`sudo nginx -t -c /usr/local/etc/nginx/nginx.conf`
* 启动 nginx
`sudo nginx`
* 停止 nginx
  - 我们可以通过信号停止Nginx主进程，首先，我们需要通过`ps -ef| grep nginx`命令获得master进程的PID，或者通过cat pid文件获得主进程号。

### 从容停止Nginx  
* kill -QUIT master进程号  

### 快速停止Nginx  
* kill -TERM master进程号  

### 强制停止Nginx  
* kill -9 master进程号  


## 代理

### 正向代理与反向代理的区别
* 来源：<http://bigc.at/reverse-proxy.orz>

#### 正向代理
* 正向代理 是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。客户端必须要进行一些特别的设置才能使用正向代理。

#### 反向代理
* 反向代理正好相反，对于客户端而言它就像是原始服务器，并且客户端不需要进行任何特别的设置。客户端向反向代理 的命名空间(name-space)中的内容发送普通请求，接着反向代理将判断向何处(原始服务器)转交请求，并将获得的内容返回给客户端，就像这些内容 原本就是它自己的一样。

#### 区别
* 从用途上来讲：
- 正向代理的典型用途是为在防火墙内的局域网客户端提供访问Internet的途径。正向代理还可以使用缓冲特性减少网络使用率。反向代理的典型用途是将 防火墙后面的服务器提供给Internet用户访问。反向代理还可以为后端的多台服务器提供负载平衡，或为后端较慢的服务器提供缓冲服务。
- 另外，反向代理还可以启用高级URL策略和管理技术，从而使处于不同web服务器系统的web页面同时存在于同一个URL空间下。

* 从安全性来讲：
- 正向代理允许客户端通过它访问任意网站并且隐藏客户端自身，因此你必须采取安全措施以确保仅为经过授权的客户端提供服务。
- 反向代理对外都是透明的，访问者并不知道自己访问的是一个代理。

