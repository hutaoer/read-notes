# react

## flex 垂直水平居中
`
container {
  flexDirection: 'row'
},
item {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
}

`

## componentWiillMount与componentDidMount的差别
* ajax请求我建议在WillMount的方法内执行，而不是组件初始化成功之后的DidMount。这样能在“空数据渲染”阶段之前请求数据，尽早地减少二次渲染的时间。
* willMount只会执行一次，非常适合做init的事情。
* didMount也只会执行一次，并且这时候真实的Dom已经形成，非常适合事件绑定和complete类的逻辑。