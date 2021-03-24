import React ,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state =({
            name: '',
            email: '',
            _id: Number,
        })
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event);
       // debugger
        this.setState({name: event.target.value});
    }

    handleSubmit(event){
        console.log(event);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
               <div >
               <label>Name : 
                    <input type="text" value={this.state.name} onChange={this.handleChange}></input>
                </label>
                
                <label>Email : 
                    <input type="text" value={this.state.email} onChange={this.handleChange}></input>
                </label>
               </div>
               <input value="Submit" type="submit" ></input>
            </form>
            </div>
        )
    }
}

export default InputForm;