import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import Quiz1 from './components/Quiz1';
import Quiz2 from './components/Quiz2';
import Quiz3 from './components/Quiz3';
import Quiz4 from './components/Quiz4';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/imagequiz' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/quiz1' component={Quiz1} />
        <Route path='/quiz2' component={Quiz2} />
        <Route path='/quiz3' component={Quiz3} />
        <Route path='/quiz4' component={Quiz4} />
      </Switch>
      
    </BrowserRouter>
  //   <div className="App">
  //   <Home/>
  // </div>
  );
}

export default App;
