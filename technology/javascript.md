# 基础知识

### 函数
* 如果有给函数设置参数，但是调用函数的时候，又忘记传参，js引擎会自动将其设定为undefined。如果传递的参数大于设定参数的个数，多余的参数会被忽略。
* 函数内部有一个arguments对象，他返回所有的参数
    (function(a,b) {
        console.log(a,b) // 1 undefined
    })(1)



# 深入浅出ES6

## （二）迭代器和for-of循环

### forEach
* 不能使用break语句中断循环，也不能使用return语句返回到外层函数。

### for-in
```
for (var index in myArray) { // 千万别这样做
  console.log(myArray[index]);
}
```
* 在这段代码中，赋给index的值不是实际的数字，而是字符串“0”、“1”、“2”，此时很可能在无意之间进行字符串算数计算，例如：“2” + 1 == “21”，这给编码过程带来极大的不便。
* 作用于数组的for-in循环体除了遍历数组元素外，还会遍历自定义属性。举个例子，如果你的数组中有一个可枚举属性myArray.name，循环将额外执行一次，遍历到名为“name”的索引。就连数组原型链上的属性都能被访问到。


### for-of
```
for (var value of myArray) {
  console.log(value);
}
```
* 这是最简洁、最直接的遍历数组元素的语法
* 这个方法避开了for-in循环的所有缺陷
* 与forEach()不同的是，它可以正确响应break、continue和return语句
* for-of循环不仅支持数组，还支持大多数类数组对象，例如DOM NodeList对象。
* for-of循环也支持字符串遍历，它将字符串视为一系列的Unicode字符来进行遍历：
* for-of循环不支持普通对象，但如果你想迭代一个对象的属性，你可以用for-in循环（这也是它的本职工作）或内建的Object.keys()方法：
```
// 向控制台输出对象的可枚举属性
for (var key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}
```


