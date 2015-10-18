# generator 生成器
* 调用生成器函数会产生一个生成器（generator）。生成器拥有的最重要的方法是 next()，用来迭代。
* 函数执行到每个 yield 时都会中断并返回 yield 的右值（通过 next 方法返回对象中的 value 字段获取该值）。

