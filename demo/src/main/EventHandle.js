import React, { Component } from 'react';


class EventHandle extends React.Component{
    constructor(props){
        super(props)
        this.state =({
            name:"JAR",
            age: 20,
            isActive: true,
            designation: this.props.designation,
            greet: this.props.greet
        })
        console.log(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((prevState)=>({isActive: !prevState.isActive}));
    }

    componentDidMount(){
        this.timerId = setInterval(()=>this.handleClick(), 1000); 
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    handleHyperLinkClick(e){
        e.preventDefault();
        console.log('The link was clicked.');
    }

    render() {
        return <div>
            <button onClick={this.handleClick}>{this.state.isActive?"ON":"OFF"}</button>
            <div>{this.state.name}</div><a herf="#" onClick={this.handleHyperLinkClick}>CLICK ME</a>
        </div>
    }
}
export default EventHandle;