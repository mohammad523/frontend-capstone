import React, {useState} from 'react'
import  signIn  from './signIn'
import Logout from './Logout'
import { Route, Link } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    const handlePW = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(email,password)
        try{
        await signIn(email, password);
        } catch (e) {
            console.log(e.message)
        }
    }

    return(
        <>
        <h1>Please Login with your email and password.</h1>
        <form onSubmit={handleSubmit}>
            <label>
                
                <input type="text" value={email} placeholder='email'
                name='email' onChange={handleEmail}/>
                <br/>
                
                <input type="text" value={password} placeholder ='password' 
                name='password' onChange={handlePW}/>

            </label>
            <br/>
            <Link to='/home'>
            <button>Login</button>
            </Link>
        </form>
        <Logout />
        </>
    )
}

export default Login