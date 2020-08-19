import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './HomeFeed.css'
import Popup from "reactjs-popup";

const HomeFeed = () => {
    const [post, setPost] = useState('')
    const [data, setData] = useState([])
    const [fave, setFave] = useState('🖤')
    const [users, setUsers] = useState([])
    const [counter, setCounter] = useState(0)
    const [username, setUsername] = useState('')
    const [yourName, setYourName] = useState('')
    const [message, setMessage] = useState('')

    useEffect( () => {
    const url = 'http://localhost:3000/posts'
    const makeApiCall = async () =>{
        const res = await fetch(url)
        const json = await res.json()
        console.log(json)
        setData(json)
    }   
    makeApiCall()     
      }, [data])


    

    const handleSubmit = async() => {
        const response = await axios({
            
            url: `http://localhost:3000/posts`,
            method: 'POST',
            data: { 
                username: username,
                your_name: yourName,
                message: message,
                likes: 0 
            }
        })


    }
    const handleUNChange = (event) => {
        setUsername(event.target.value)
        
    }
    const handleYNChange = (event) => {
        setYourName(event.target.value)

    }
    const handleMChange = (event) => {
        setMessage(event.target.value)
    }
    
    console.log(counter)

    let heart = '🖤'
    const handleClick = async (id) =>{
        setCounter(counter+1)
        const response = await axios({
            
            url: `http://localhost:3000/posts/${id}`,
            method: 'PUT',
            data: { likes: counter }
        })


        
        
    }

    let favorite = '🖤'
    const darkHeart = '🖤'
    const blueHeart = '💙'

    let feed = <h1>loading</h1>
    if(data[0]){
        feed = data.map((item, index)=> {
            
                 return(
                <div className='itemHF'>
                    <p className='userIdHF'>{item.username}</p>
                    <p className='textHF'>{item.message}</p>
                    <p><button onClick={()=>handleClick(item.id)}>💙</button>{item.likes}</p>

                </div>
            )
        })
    }

    
    return(
    <div className='homeFeed'>
        <Popup trigger={<button> What's on your mind?</button>} position="right center">
        <form onSubmit={handleSubmit}>
           <label>
                <input className= 'field' type="username" value={username} placeholder="@username"
                name='username' onChange={handleUNChange}/>
                <br/>
            </label>
           <label>
                <input className= 'field' type="yourName" value={yourName} placeholder="Your Name"
                name='yourName' onChange={handleYNChange}/>
                <br/>
            </label>
           <label>
                <input className= 'field' type="message" value={message} placeholder="What's on your mind?"
                name='message' onChange={handleMChange}/>
                <br/>
            </label>
            <button>submit</button>
            </form>
        </Popup>
        <div className = 'widget'>
            {feed}

        </div>
        
    </div>

    )
}

export default HomeFeed