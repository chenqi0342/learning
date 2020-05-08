import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChatApp from './01/ChatApp'
import TabS from './02/TabSelector'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
