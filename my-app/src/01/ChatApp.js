import React from "react";

class MessageList extends React.PureComponent {
  render() {
    return <ul>{this.props.messages.map(msg => <li>{msg}</li>)}</ul>;
  }
}

export class ChatApp extends React.Component {
  state = {
    messages: [],
    inputMsg: "",
  };

  handleInput = evt => {
    this.setState({
      inputMsg: evt.target.value,
    });
  };
  handleSend = () => {
    const text = this.state.inputMsg;
    if (text) {
      const newMessages = [...this.state.messages, text];
      this.setState({
        messages: newMessages,
        inputMsg: "",
      });
    }
  };
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <div>
          <input
            value={this.state.inputMsg}
            onChange={this.handleInput}
          />
          <button onClick={this.handleSend}>Send</button>
        </div>
      </div>
    );
  }
}

export default ChatApp;
//受控组件，通过外部控制他
//react组件
//外部传来的属性props+自身维护的状态state=view
//react组件是纯函数，输入什么输出什么
//单向数据流
//外部传递props,外部知道view的变化，需要view暴露一个事件，让外部知道state
//创建组件的3个方面
//静态ui的组成 纯html
//组件状态的组成，状态是来自外部，还是内部自己维护
//组件的的交互方式，内部用户的操作，如何暴露出来