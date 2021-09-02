import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Navbar from './components/Navbar';
import Landing from './components/landing';
import Image from './components/explore';
import './App.css';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {updateUser,updatePost} from './actions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Message from './components/message';
import Profile from './components/profile';

function App() {
  const dispatch= useDispatch();
  useEffect(() => {
    dispatch(updateUser())
  }, [])
  
  return (
    <>
    <Router>
    <div className="App">
     
        <Navbar/>
      <Switch>
        <Route exact path="/image">
          <Image/>
        </Route>
        <Route exact path="/landing">
          <Landing/>
        </Route>
        <Route exact path="/message">
          <Message/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
