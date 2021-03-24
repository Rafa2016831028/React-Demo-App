import React , {Component} from 'react';
import InputForm from './Input_form';
import Error from './error';
import { BrowserRouter, Route, Switch ,Link } from 'react-router-dom';
import App from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CSS/nav.css';
import Home from './Home/Home.js';
function  Navigation() {
    return (
        <div>
            <div>
      <ul className='ul'>
        <li className='li'><a className='a' ><Link to="/">Home</Link></a></li>
        <li className='li'><a><Link to="/register">Register</Link></a></li>
     	</ul>
   
    </div>
            <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/register" component={InputForm} />
                <Route component={Error} />
            </Switch>
        </main>
        </div>
    )
}
export default Navigation;