# float && clear

## float
* <http://web.jobbole.com/84158/>
* 浮动元素的第一个特性：不管一个元素是行内元素还是块级元素，如果被设置了浮动，那浮动元素会生成一个块级框，可以设置它的width和height，因此float常常用于制作横向配列的菜单，可以设置大小并且横向排列。

* 浮动元素延伸性
将父元素p设置成float:left后，浮动元素就会被包含到父元素里面，我们将这个特性成为浮动元素的延伸性。
浮动元素的延伸性是什么呢，我们可以将其理解为元素被设置成浮动后，该元素会进行延伸进而包含其所有浮动的子元素

## clear
* 对于CSS的清除浮动(clear)，一定要牢记：这个规则只能影响使用清除的元素本身，不能影响其他元素。
* 比如两个div都是float left。那么对第一个div设置clear:right,由于只是对div1产生影响，不会影响div2。然后，设置clear不会让div1移动，所以div2也不会动。如果要让div2下移，需要在div2上设置clear:left.



# less 编译滤镜报错解决
* 编译下面的代码时候，无法编译通过
```
filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='img/notice-icon.gif', sizingMethod='scale');
-ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=’img/notice-icon.gif’, sizingMethod=’scale’)";
```
* 解决方案：在代码前面添加"~"符号，并用引号括起来
```
filter: ~"progid:DXImageTransform.Microsoft.AlphaImageLoader(src=’img/notice-icon.gif’, sizingMethod=’scale’)";
-ms-filter: ~"\“progid:DXImageTransform.Microsoft.AlphaImageLoader(src=’img/notice-icon.gif’, sizingMethod=’scale’)\”";
```

# viewport 单位的使用
## 介绍
* vw – Percentage of viewport width
* vh – Percentage of viewport height
* vmin – vw or vh, whichever smaller
* vmax – vw or vh, whichever bigger
* Viewport, 跟屏幕大小相关. 1vw 屏幕宽度的 1%. 100vw 即 100% 的屏幕宽度.
* Viewport 单位会随着视口的变化而变化。