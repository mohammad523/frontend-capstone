import React, { useState } from 'react'
// import  signIn  from './signIn'
// import Logout from './Logout'
import axios from 'axios'
import { Route, Link } from "react-router-dom";


const Register = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [regErrors, setRegErrors] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePW = (event) => {
        setPassword(event.target.value)
    }
    const handlePWC = (event) => {
        setPasswordConfirmation(event.target.value)
    }
    const handleSubmit = async (event) => {
        axios({
        
            method: 'POST',
            url: "http://localhost:3000/registrations",
            data: {
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            }
        }, 
        {withCredentials: true}
        ).then(response => {
            if (response.data.status === 'created'){
            this.props.handleSuccessfulAuth(response.data)
            }
        }).catch(error => {
            console.log("reg error", error)
        })

        event.preventDefault()
    }
    return (
        <>
            <h1>Please Register with your email</h1>
            <form onSubmit={handleSubmit}>
                <label>

                    <input type="name" value={name} placeholder='First Last(name)'
                        name='name' onChange={handleName} />
                    <br />
                    <input type="email" value={email} placeholder='handle'
                        name='email' onChange={handleEmail} />
                    <br />

                    <input type="password" value={password} placeholder='password'
                        name='password' onChange={handlePW} />
                        <br/>

                    <input type="password" value={passwordConfirmation} placeholder='Confirm Password'
                        name='password' onChange={handlePWC} />

                </label>
                <br />
                    <button>Register</button>
            </form>
            {/* <Logout /> */}
        </>
    )
}

export default Register