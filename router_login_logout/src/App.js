import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Profile from './profile'
import Dashboard from './dashboard'

function App() {
 
  const [logged,setLogged]=useState(0);

  return (
    <div className="App">
    <Router>
      
     <Navbar logged={logged} setLogged={setLogged}/>
    
     <Switch>
       <Route exact path="/">
        <Home logged={logged} setLogged={setLogged}/>
       </Route>
       <Route exact path="/about">
        <About />
       </Route>
       <Route exact path="/profile">
        <Profile />
       </Route>
       <Route path="/dashboard">
        <Dashboard />
       </Route>
     </Switch>
  
    </Router>
    </div>
  );
}

export default App;
