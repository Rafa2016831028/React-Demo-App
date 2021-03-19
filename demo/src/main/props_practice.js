import './props_practice.css';

const employee = {
    id: 12,
    details: {
        name:"Baby yoda",
        email: "yoda@dsi.com",
        url: "https://i.insider.com/5e32f2a324306a19834af322?width=750&format=jpeg&auto=webp",
        phone:77342556587,
        age: 20
    }
}

function EmployeeComponent(props){
    return(
    <div className="container">
        <div className="card">
            <img src={props.details.url} width='200' height='200' margin-top='20px' alt="Person" class="card__image"></img>
            <p class="card__name">{props.details.name}</p>
     <div class="grid-container">
      <div class="grid-child-posts">
        ID: {props.id}
      </div>

      <div class="grid-child-followers">
        AGE: {props.details.age}
      </div>
    </div>
    <p class="card__name">{props.details.phone}</p>
        </div>
    </div>
    );
}

function Practice(){
    return(<EmployeeComponent 
        id={employee.id} details={employee.details} >
        </EmployeeComponent>);
}
export default Practice;