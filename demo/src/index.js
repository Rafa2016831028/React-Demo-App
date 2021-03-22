import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './main/props_practice'
import Practice from './main/props_practice';
import Clock from './main/Component'
import EventHandle from './main/EventHandle'
ReactDOM.render(
  <React.StrictMode>
    <div>
    <Clock/>
    <EventHandle greet="Hey dude!" designation="JSE"/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
