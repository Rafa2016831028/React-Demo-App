import employeeData from './data.js';
import EmployeeCard from './Card.js';
import '../CSS/card.css';
import React from 'react';
const listOfEmployee = employeeData.map((employee) => <EmployeeCard key={employee._id} value={employee}/>);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class Home extends React.Component{
    render(){
        return(
            <div className='card_div'>{listOfEmployee}</div>
        )
    }
} 

export default Home;