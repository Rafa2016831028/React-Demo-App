import React from 'react';
import InputForm from './Input_form';
import Error from './error';
import { Route, Switch ,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CSS/nav.css';
import Home from './Home/Home.js';
import Calculator from './Salary/LiftingStateUp';
import FilteredProductTable from './Search/Search';
function  Navigation() {
    return (
        <div>
            <div>
      <ul className='ul'>
        <li className='li'><a className='a' ><Link to="/">Home</Link></a></li>
        <li className='li'><a><Link to="/register">Register</Link></a></li>
        <li className='li'><a><Link to="/salary">Salary</Link></a></li>
        <li className='li'><a><Link to="/search">Search</Link></a></li>
     	</ul>
   
    </div>
            <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/register" component={InputForm} />
                <Route path="/salary" component={Calculator} />
                <Route path="/search" component={FilteredProductTable} />
                <Route component={Error} />
            </Switch>
        </main>
        </div>
    )
}
export default Navigation;