import {Route, Link ,Switch} from "react-router-dom";
import App from '../App/App';
import './navigation.css';
import y from './y2.png';
import New from '../NewPost/newpost'
import PageNotFound from '../PageNotFound/error';

function  Navigation() {
    return (
        <div classname="main2">
            {/* <div> */}
      <div className="nav">
          <img  className='nav-img' src={y}/>
          <div className='nav-header'>Hacker News</div> 
          <div className='nav-items'>welcome</div><div>|</div>
        <div className='nav-items'><Link to="/" className="link">app</Link></div><div>|</div>
        <div className='nav-items'> <Link to="/new" className="link">new</Link></div>
     	</div>
         {/* </div> */}

        <main>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/new" component={New}/>
                <Route component={PageNotFound} />
            </Switch>
        </main>
        </div>
    )
}
export default Navigation;