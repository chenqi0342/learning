//组件的复用分为两种方式
//高阶组件HOC，函数作为子组件
//高阶组件接受组件作为参数，返回新的组件
//高阶组件没有ui的展示，为新的组件提供额外的状态
//组件的状态是一层一层向下传导，当相隔太多，高阶组件获取额外的外部资源，此时组件的状态有2部分组成，父组件传来的，高阶组件传给你的

import React from 'react'

export default function withTimer(Hoc) {
    return class extends React.PureComponent{
        state = { date: new Date()}
        componentDidMount() {
            this.timer=setInterval(()=>this.clock(),1000)
        }
        componentWillUnmount() {
            clearInterval(this.timer)
        }
        clock() {
            this.setState({date:new Date()})
        }
        render() {
            return <Hoc date={this.state.date} {...this.props}></Hoc>
        }
    }
} 