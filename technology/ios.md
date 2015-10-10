# ios开发学习笔记

## 环境
* xcdoe6.1
* OS X 10.10.5

## button的background设置
* 在xib视图中设置按钮的背景色无效，是因为button本身没有背景色这个属性。button自身的background的只能设置图片。由于button是继承自view，view的background是可以设置背景色。因此，要设置button的背景色，需要设置view的background属性。如下图：
* ![](http://gtms03.alicdn.com/tps/i3/TB1Wf2XJVXXXXa9XpXXpNMVMXXX-820-296.png)
* ![](http://gtms04.alicdn.com/tps/i4/TB1uHeHJVXXXXXQXVXXquLNYFXX-845-353.png)
