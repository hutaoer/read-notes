# javascript设计模式与开发实践

## 第二章 this,call,apply
* 当用new运算符调用函数时，该函数会返回一个对象，通常情况下，构造器里的this就指向返回的这个对象。
* 如果构造器显示的返回了一个object对象，那么此次的运算结果最终会返回这个对象，而非this.
* 如果构造器不显示的返回任何数据，或者是返回一个非对象类型的数据，就不会出现上述问题。
* 使用call，apply的时候，如果传入的第一个参数为null,则函数体内的this会指向默认的宿主对象，在浏览器中即为window；nodejs就会不同,是global。但是在严格模式下，函数体内的this还是为null.
* 另外，写JavaScript很常做的一件事就是绑定事件处理程序，也就是诸如button.addEventListener(‘click’, fn, false)之类的，如果在fn里面需要使用this，this指代事件处理程序对应的对象，也就是button。
* 在一个HTML DOM事件处理程序里面，this始终指向这个处理程序被所绑定到的HTML DOM节点 ****
* 对于字变量对象，只有有相同直接父元素的属性才能通过this共享变量 ****