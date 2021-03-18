import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const user = {
  firstName:  "Jarin" ,
  lastName: "Tasnim",
  details : {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrB4dLxZLv6IDtLYZYDsNLWeYlJjeI_g6Sg&usqp=CAU",
    age : 22,
    greet: "Hey dude !",
    salary: 45000,
    designation: "Junior Software Engineer"
  }
}

function UserComponent(props) {
  return(
    <div>
      <h1>{props.firstName}+" "+{props.lastName}</h1>
      <img src={props.details.url}></img>
      <div>{props.details.designation}</div>
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <UserComponent 
    firstName={user.firstName}
    lastName={user.lastName}
    details = {user.details}
    ></UserComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
