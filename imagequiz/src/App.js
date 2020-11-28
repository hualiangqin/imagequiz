import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import Quiz from './components/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/imagequiz' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/quiz' component={Quiz} />
      </Switch>
      
    </BrowserRouter>
  //   <div className="App">
  //   <Home/>
  // </div>
  );
}

export default App;
