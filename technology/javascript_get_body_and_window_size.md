# 获取视口和文档流高度和宽度

## 获取 window 视口尺寸
* 对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：
  - window.innerHeight - 浏览器窗口的内部高度
  - window.innerWidth - 浏览器窗口的内部宽度
* 对于 Internet Explorer 8、7、6、5：
  - document.documentElement.clientHeight
  - document.documentElement.clientWidth

## 获取文档流的高度
* document.body.clientHeight
* document.body.offsetHeight // 包括边线的高


## screen
* 屏幕高度：window.screen.height // 这里指物理像素
* 屏幕宽度：window.screen.width  


## 跨浏览器获取视口高度
``` 
var height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
function windowHeight() {
    var myHeight = 0;
    if (typeof(window.innerHeight) == 'number') {
        //Non-IE
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientHeight)) {
        //IE 4 compatible
        myHeight = document.body.clientHeight;
    }
    return myHeight;
}
```

## 垂直方向上窗口滚动的距离
* window.scrollY

## 垂直方向上文档滚动的距离
* document.body.scrollTop
