
import React ,{Component}from 'react';

const UserSalaryInterest = (props) => {
    if(props.salary){
        const interestRate =(props.salary>500) ? 0.1 : 0.2;
        return (<div>Your estimated Interest : {props.salary*interestRate} for {interestRate}% interet rate</div>)
    }
    return(<div>No interest ! </div>)
}


class UserSalaryCalculator extends React.Component{
    constructor(props){
        super(props);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
       // debugger
    }

    handleSalaryChange(event){
        this.props.onAmountChange(event.target.value);
    }
    
    render(){
        const amount = this.props.amount;
        const currancy = this.props.currancy;
        return(
            <fieldset>
                <legend>Input your salary {currancyNames[currancy]} :</legend>
                <input value={amount} onChange={this.handleSalaryChange}></input>
                
            </fieldset>
        )
    }
}

const currancyNames = {
    bd: 'Taka',
    us : 'Dollar'
}

function convertTakaToDollar(taka){
    return Math.round(taka/80);
}

function convertDollarToTaka(dollar){
    return dollar*81;
}

function tryConvert(amount, convert) {
    const input = parseFloat(amount);
    if(Number.isNaN(input)) { return "" ; }
    const output = convert(input);
    return output.toString();
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amount: '',
            currancy: 'bd'
        };
        this.handleDollarChange = this.handleDollarChange.bind(this);
        this.handleTakaChange = this.handleTakaChange.bind(this);
    }

    handleTakaChange(amount){
        this.setState({currancy: 'bd' , amount})
    }

    handleDollarChange(amount){
        this.setState({currancy: 'us' ,amount})
    }


    render(){
        const currancy = this.state.currancy;
        const amount = this.state.amount;
        const taka = currancy === 'us' ? tryConvert(amount, convertDollarToTaka) : amount;
        const dollar = currancy === 'bd' ? tryConvert(amount, convertTakaToDollar) : amount;
        return (
            <div>
                <UserSalaryCalculator currancy="bd" amount ={taka} onAmountChange={this.handleTakaChange}> 
                </UserSalaryCalculator>
                <UserSalaryCalculator currancy="us" amount={dollar} onAmountChange={this.handleDollarChange}>
                </UserSalaryCalculator>
                <UserSalaryInterest salary={parseInt(taka)}></UserSalaryInterest>
            </div>
        )
    }
}

export default Calculator;