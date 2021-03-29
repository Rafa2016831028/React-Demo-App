import React from 'react';
import InputForm from './Input_form';
import Error from './error';
import { Route, Switch ,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CSS/nav.css';
import Home from './Home/Home.js';
import Calculator from './Salary/LiftingStateUp';
import FilteredProductTable from './Search/Search';
import TodoApp from '../component/TODO_HOOK/todo.js';
function  Navigation() {
    return (
        <div>
            <div>
      <ul className='ul'>
        <li className='li'><Link to="/">Home</Link></li>
        <li className='li'><Link to="/register">Register</Link></li>
        <li className='li'><Link to="/salary">Salary</Link></li>
        <li className='li'><Link to="/search">Search</Link></li>
        <li className='li'><Link to="/todo">Todo</Link></li>
     	</ul>
   
    </div>
            <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/register" component={InputForm} />
                <Route path="/salary" component={Calculator} />
                <Route path="/search" component={FilteredProductTable} />
                <Route path="/todo" component={TodoApp} />
                <Route component={Error} />
            </Switch>
        </main>
        </div>
    )
}
export default Navigation;