// //react组件
// //外部传来的属性props+自身维护的状态state=view
// //react组件是纯函数，输入什么输出什么
// //单向数据流
// //外部传递props,外部知道view的变化，需要view暴露一个事件，让外部知道state
// //创建组件的3个方面
// //静态ui的组成 纯html
// //组件状态的组成，状态是来自外部，还是内部自己维护
// //组件的的交互方式，内部用户的操作，如何暴露出来
//数据状态管理,dry原则
//能计算得到的不需要单独存储
//组件尽量无状态，所需状态通过props获取状态
// //引入react
// //purecomponent  浅层对比props和state，实现了shouldComponentUpdate()函数，提升性能
// //PropTypes进行类型检查
// //选择框
// import React, {PureComponent, Component } from 'react'
// import PropTypes from 'prop-types'
// import "./TabSelector.css"
// export default class TabS extends PureComponent{
//     static PropTypes={
//         value: PropTypes.string,
//         options: PropTypes.array,
//         onChange:PropTypes.func       
//     }
//     //value外部传过来的值，当前要显示他
//     //options有那些选项
//     //onChange暴露内部的事件让外部知道你变化了
//     static defaultProps = {
//         value: null,
//         options: [],
//         onChange:()=>{}
//     }
//     render() {
//         const { value, options, onChange } = this.props
//         return (
//              <div className="tab-selector">
//                  <ul>
//                      {options.map(opt => (
//                          <li
//                              key={opt.value}
//                              onClick={() => this.props.onChange(opt.value)}
//                              className={`tab-item ${opt.value === this.props.value? "selected": ""}`}
//                          >{opt.name}</li>
//                      ))}
//                  </ul>
//              </div>
//          )
//      }
//  }
 
//  const options = [
//      { name: "Red", value: "red" },
//      { name: "Blue", value: "blue" },
//      { name: "Orange", value: "orange" }
//  ];
   
//  //TabSelectorSample使用tabs，然后传给tabs一些值
//  //tabs本身没有状态，是由他的使用者控制，所以他是受控组件
// //受控组件和非受控仅针对form表单元素
//  //状态又使用者维护的是受控组件
//  //
//  export class TabSelectorSample extends Component{
//      state={ color:null }
//      render() {
//          return (
//              <div>
//              Select color:{" "}
//                  <TabS
//                      options={options}
//                      value={this.state.color}
//                      onChange={c => this.setState({ color: c })}
//                  >
//                  </TabS>  
//           </div>
//          )
//      }
//  }
//  //创建一个类，默认导出
//  //组件静态方法
//  //static 静态方法与react本身无关，react组件都是继承自react.component这个类，static是一个类，通过类名直接使用
//  //为什么使用静态方法：类内部的方法都会被子类继承，但是使用静态方法定义的不会被子类继承，也不会初始化到实例对象中。
 