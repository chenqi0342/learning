import React, { useState ,useEffect,Component} from 'react'
//  function Example() {
//     const [count, SetCount] = useState(0)
//     useEffect(() => {
//         document.title=`You clicked ${count} times`
//     })
//     //调用useEffect时，告诉react完成对dom的更改，执行副作用函数，副作用函数在组件内部，可以访问到props跟state
//     //react会在每次渲染后调用副作用函数，包括第一次
//     //可以返回一个函数来指定如何清除副作用。
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={()=>SetCount(count+1)}>
//                 Cilck me
//             </button>
//         </div>
//     )
// }

class Example extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
    }
    render() {
        return (
            <div>
                <p>you clicked {this.state.count} times</p>
                <button onClick={()=>this.setState({count:this.state.count+1})}>
                    Cilck me
                </button>
            </div>
        )
    }
}
export default Example
//函数组件内部添加state，usestate初始值是state
//react组件执行过程中执行过数据获取，订阅或手动修改dom统一称为“副作用”或者“作用”
//useEffect, 给函数组件增加了操作副作用的能力
//相当于合并，componentDidMount,componentDidUpdate,componentWillUnmount

// function FriendStatus(props) {
//     const [isOnline, setIsOnline] = useState(null);
  
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }
  
//     useEffect(() => {
//       ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//       return () => {
//         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//       };
//     });
  
//     if (isOnline === null) {
//       return 'Loading...';
//     }
//     return isOnline ? 'Online' : 'Offline';
//   }

// export default FriendStatus