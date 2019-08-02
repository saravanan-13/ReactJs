import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import About from "./Components/About";
import Main from "./Components/Main";
import MainUser from "./Components/MainUser";
import DisplayUser from "./Components/DisplayUser";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const router = (
  <Router>
     <div>
         <ul>
             <li>
                 <Link to="/">Home</Link>
             </li>
             <li>
                 <Link to="/about">About</Link>
             </li>
             <li>
                 <Link to="/users">Users</Link>
             </li>
         </ul>
         <hr/>
         <Route exact path="/" component={Main} />
         <Route exact path="/about" component={About}/>
         <Route exact path="/users" component={MainUser}/>
         <Route exact path="/users/:id" component={DisplayUser}/>
     </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
