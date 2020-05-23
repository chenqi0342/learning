import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChatApp from './01/ChatApp'
import TabS from './02/TabSelector'
import Clock from './04/Clock'
import SnapshotSample from './04/SnapshotSample'
import LocaleSample from './07/LocaleSample'
import Example from './10/hooks'
import FriendStatus from './10/hooks'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
