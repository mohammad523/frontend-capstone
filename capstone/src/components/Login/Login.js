import React, {useState} from 'react'
// import  signIn  from './signIn'
import Logout from './Logout'
import Registration from '../auth/Registration'
import { Route, Link } from "react-router-dom";
import axios from 'axios';


const Login = (props) => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [regErrors, setRegErrors] = useState ('')

    const handleSuccessfulAuth = (data) =>{
        props.handleLogin(data)
        props.history.push("/Home")
        
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    const handlePW = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios({
            url: `http://localhost:3000/sessions`,
            method: 'POST',
            data: { 
                email: email,
                password: password
             }
          }, { withCredentials: true }
          ).then(response => {
            console.log("res from login", response)
        }).catch(error => {
            console.log("login error", error)
        })

        event.preventDefault()
      
        }
    
    return(
        <>
        <h1>Please Login with your handle</h1>
        <p>{props.loginStatus}</p>
        <form onSubmit={handleSubmit}>
            <label>
                
                <input type="text" value={email} placeholder='handle'
                name='email' onChange={handleEmail}/>
                <br/>
                
                <input type="text" value={password} placeholder ='password' 
                name='password' onChange={handlePW}/>

            </label>
            <br/>
            {/* <Link to='/home'> */}
            <button>Login</button>
            {/* </Link> */}

        </form>
        <Logout />
        <Registration handleSuccessfulAuth={handleSuccessfulAuth}/>
        </>
    )
}

export default Login