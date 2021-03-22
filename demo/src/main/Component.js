import { render } from '@testing-library/react';
import React , { Component } from 'react';
import employeeData from './data';

class Clock extends React.Component{
    render(){
        return(
            <div>
                <h1>Hey!</h1>
                <GetName data ={employeeData}/>
            </div>
        );
    }
}

class GetName extends Component{
    constructor(props){
        super(props);
        this.state = {data: this.props.data};
        
    }
    render() {
        const data = this.state.data;
        return(<p>jet</p>);
    }
}
export default Clock;