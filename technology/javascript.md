# javascript

## 基础知识

### 函数
* 如果有给函数设置参数，但是调用函数的时候，又忘记传参，js引擎会自动将其设定为undefined。如果传递的参数大于设定参数的个数，多余的参数会被忽略。
* 函数内部有一个arguments对象，他返回所有的参数
    (function(a,b) {
        console.log(a,b) // 1 undefined
    })(1)