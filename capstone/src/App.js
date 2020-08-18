import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import Home from './components/Home/Home.js'

function App() {
  return (
    <div className="App">
      <nav>
      {/* <Link to="/login">
        <h1>Login</h1>
      </Link> */}
      </nav>
      <Link to="/home" />
      <main>
        <Route path='/login' exact component={Login}/>
        <Route path='/home' exact component = {Home} />
      </main>
    </div>
  );
}

export default App;
