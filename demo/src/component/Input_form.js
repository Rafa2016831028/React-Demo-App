import React ,{Component} from 'react';

class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state =({value: ''})
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event);
    }

    render(){
        return(
            <div>
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
        )
    }
}

export default InputForm;