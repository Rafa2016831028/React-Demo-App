import React, {Component} from 'react';

class EmployeeForm extends React.Component{
    constructor(props){
        super(props);
        this.state =({id:'',
        name:"",
        designation:""
    })
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        //debugger
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert(this.state.value);
        event.preventDefault();
    }

    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
               <div >
               <label>ID : 
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                
                <label>Name : 
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
               </div>
               <input value="Submit" type="submit" ></input>
            </form>
        </div>
    }

}

export default EmployeeForm;