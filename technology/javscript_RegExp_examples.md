# javascript 正则示例

## 彻底领悟javascript中的exec与match方法
* <http://www.cnblogs.com/xiehuiqi220/archive/2008/12/01/1327487.html>
* exec永远只返回第一个匹配，而match在正则指定了g属性的时候，会返回所有匹配。

## 获取url中斜杠中的单词
* /kg/slider/index.js/ ==> ['kg', 'slider', 'index.js'];
```
var re = /([^\/]+)/g;
var str = '//kg/slider/index.js/';
var arr = str.match(re) // ['kg', 'slider', 'index.js']
```
* 说明
	- ^代表非
	- 中括号在正则中称为字符组
	- 小括号的作用是对字符进行分组，并保存匹配的文本。
	- 