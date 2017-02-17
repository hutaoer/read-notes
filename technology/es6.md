# es6

## 函数参数的解构赋值

### 给 x，y 赋默认值
* move 的参数是一个对象，通过对对象解构，得到 x 和 y 的值，解构失败，则 x 和 y 为默认值。

	```
	function move({x = 0, y = 0} = {}) {
		return x + y;
	}
	```

* 给 move 的参数指定默认值 {x:0, y=0}，如果参数为空的时候，则参数为默认值，通过参数解构，得到 x 的值为 0， y 的值为 0。如果有值，则使用该值进行解构。

	```
	function move({x, y} = { x: 0, y:0}) {
		return x + y;
	}
	```

## Generator 函数
* 执行 Generator 会返回一个 Iterator 对象。可以把 Generator 理解为状态机，yield 语句用来定义内部状态。
* 调用 Generator 函数后，该函数并不执行，返回一个指向内部状态的指针对象，即 Iterator 对象。
* 遍历的时候需要调用 next 方法。每次调用的时候，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一条 yield 语句或 return 语句为止。yield 可以暂停执行。next 调用完成后，返回一个对象，对象的值就是当前 yield 语句的值。
* 如果没有 return 语句，则返回对象的 value 值为 undefined.
* next 可以带一个参数，该参数会被当做上一条 yield 语句的返回值。

