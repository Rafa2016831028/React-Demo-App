import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}
function App() {
  return (
    <UserComponent 
    firstName={user.firstName}
    lastName={user.lastName}
    details = {user.details}
    ></UserComponent>
  );
}

export default App;
