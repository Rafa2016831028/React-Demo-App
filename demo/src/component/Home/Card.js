import React, {Component} from 'react';
 import '../CSS/card.css';
import { Card, Icon, Image } from 'semantic-ui-react'

class EmployeeCard extends React.Component{
    constructor(props){
        super(props);
        //debugger
        console.log(this.props.value)
    }

    render(){
        return (<Card>
            <Image src={this.props.value.picture} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.value.name}</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>)
    }
}

export default EmployeeCard;