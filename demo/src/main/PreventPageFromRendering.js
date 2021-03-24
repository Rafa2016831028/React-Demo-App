import React, {Component} from 'react';
import './props_practice.css';

function Warning (props){
    if(props.warn){
        return (
            <div className="warning">
              Warning!
            </div>
          );
    } else {
        return null;
    }
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = ({showWarning :true});
        this.handleWarningButtonClick = this.handleWarningButtonClick.bind(this);
    }

    handleWarningButtonClick(){
        this.setState((prevState) =>({showWarning: !prevState.showWarning}));
    }

    render(){
        return <div>
            <Warning warn={this.state.showWarning}/>
            <button onClick={this.handleWarningButtonClick}>{this.state.showWarning?"HIDE":"SHOW"}</button>
        </div>
    }
}

export  default Page;