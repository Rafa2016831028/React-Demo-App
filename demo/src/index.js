import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './main/props_practice'
import Practice from './main/props_practice';
import Clock from './main/Component'
import EventHandle from './main/EventHandle'
import Page from './main/PreventPageFromRendering';
import EmployeeForm from './main/form';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDpQSjuW6jHNMslzK3zlVVVoCkEojONTUc",
  authDomain: "react-demo-app-944b9.firebaseapp.com",
  databaseURL: "https://react-demo-app-944b9-default-rtdb.firebaseio.com",
  projectId: "react-demo-app-944b9",
  storageBucket: "react-demo-app-944b9.appspot.com",
  messagingSenderId: "670213470061",
  appId: "1:670213470061:web:3ab8044c3f9f6dbe488c64",
  measurementId: "G-EMK2MJPPW9"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <div>
    {/* <Clock/>
    <EventHandle greet="Hey dude!" designation="JSE"/>
    <Page/> */}
    <EmployeeForm/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
