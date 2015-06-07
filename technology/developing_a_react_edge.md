# react引领未来的用户界面开发框架

## JSX

### 自动求职
* react将数组中的每个元素渲染为一个节点的方式对数组进行自动求值
* var text = ['hu','taoer'];
* <h2>{text}</h2>
* 渲染结果：<h2>hutaoer</h2>

### this.props.children 
* this.props.children: 开始和结束之间的所有子节点都保存在该属性中，其值是一个数组
* <Test>hutaoer</Test>,则 this.props.children == ['hutaoer']
* 将数组