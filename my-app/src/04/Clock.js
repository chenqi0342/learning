import React from 'react'

export default class Clock extends React.PureComponent{
    constructor(props) {
        super(props)
        console.log('首先执行的钩子函数');
        this.state={riqi:new Date()}
    }
    componentDidMount() {
        console.log('时钟已经挂载完毕'); 
        this.timer=setInterval(()=>this.tick(),1000)
    }
//componentDidMount，发起ajax请求，只执行一次
//唯一一次获取外部资源，在其中操作。
//ui渲染完成，可以操作dom
    componentWillUnmount() {
        console.log('卸载时钟释放资源');
        clearInterval(this.timer)
    }
//componentWillUnmount,组件移除时被调用。
    componentDidUpdate() {
        console.log('dom更新完毕');  
    }
 //componentDidUpdate dom更新完毕可以进行一些操作
    tick() {
        this.setState({
            riqi: new Date()
        })
    }
 //动态的更新时间   
    render() {
        return <div>
            <h2>现在的时间是 {this.state.riqi.toLocaleTimeString()}</h2>
        </div>
    }
}
// jsx动态创建组件的语法糖
//react.createElement
//react生命周期
//分为三个阶段
//1.render阶段，纯净且没有副作用，可能会被react暂停，中止或重新启动。
//2.pre-commit阶段，可以读取dom
//3.commit阶段，可以操作dom，运行副作用安排更新。
//componentDidMount，发起ajax请求，只执行一次
//唯一一次获取外部资源，在其中操作。
//ui渲染完成，可以操作dom
//componentDidUpdate dom更新完毕进行一些操作
//componentWillUnmount,组件移除时被调用。
//constructor
// 初始化内部状态，很少使用，唯一可以直接修改state的地方，一般通过this.setState()修改
//getDerivedStateFromProps
//getSnapshotBeforeUpdate

