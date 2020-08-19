import React,{useState} from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import Home from './components/Home/Home.js'

function App() {
  
  const [loginStatus, setLoginStatus] = useState("")

  const handleLogin = (data) =>{
    setLoginStatus('LOGGED IN')
    user: {}
  }
  return (
    <div className="App">
      <nav>
      <Link to="/">
      </Link>
      </nav>
      <Link to="/home" />
      <main>
        <Route exact path='/'  render = {props => (<Login 
        handleLogin={handleLogin}
        loginStatus={loginStatus}/>)}/>
        <Route exact path='/home'  render = {props => (<Home loginStatus={loginStatus}/>)} />
      </main>
    </div>
  );
}

export default App;
