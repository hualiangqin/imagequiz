import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/imagequiz' component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
      
    </BrowserRouter>
  //   <div className="App">
  //   <Home/>
  // </div>
  );
}

export default App;
