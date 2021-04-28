import {Route, Link ,Switch} from "react-router-dom";
import App from '../App/App';
import './navigation.css';
import y from './y2.png';
import ShowNewStories from '../Post/newpost';
import JobStories from '../Post/jobpost';
import PageNotFound from '../PageNotFound/error';
import Welcome from '../Welcome/welcome.js'
function  Navigation() {
    return (
        <div classname="main2">
            {/* <div> */}
      <div className="nav">
          <img  className='nav-img' src={y}/>
          <div className='nav-header'>Hacker News</div> 
          <div className='nav-items'><Link to="/welcome" className="link">welcome</Link></div><div>|</div>
        <div className='nav-items'><Link to="/" className="link">app</Link></div><div>|</div>
        <div className='nav-items'> <Link to="/new" className="link">new</Link></div><div>|</div>
        <div className='nav-items'> <Link to="/job" className="link"><a>Job</a></Link></div>
     	</div>
         {/* </div> */}

        <main>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/welcome" component={Welcome}/>
                <Route path="/new" component={ShowNewStories}/>
                <Route path="/job" component={JobStories}/>
                <Route component={PageNotFound} />
            </Switch>
        </main>
        </div>
    )
}
export default Navigation;