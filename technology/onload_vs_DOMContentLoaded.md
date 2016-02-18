* 当onload事件触发时，页面上所有的DOM，样式表，脚本，图片，flash都已经加载完成了。
* 当DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash。

## 接下来看一些DOMContentLoaded的边界情况

* 虽然文档称该事件仅当在DOM加载完成之后触发，实际上并非如此
* 在某些版本的Gecko和Webkit引擎的浏览器中，有些情况会使等待样式表加载完成后才触发DOMContentLoaded事件。最普遍的情况是<script src="">跟在一个<link rel="stylesheet">之后，无论这个script标签是在head还是在body中，只要跟在link的后面。