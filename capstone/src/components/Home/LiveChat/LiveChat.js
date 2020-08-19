import React, { useState, useEffect } from 'react'
import './LiveChat.css'
import firebase from 'firebase/app'

const LiveChat = () => {
    const [post, setPost] = useState('')
    const [chats, setChats] = useState([])
    const [users, setUsers] = useState([])
    const [userNames, setUserNames] = useState([])
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    
useEffect(() =>{
    const usersUrl = 'http://localhost:3000/posts'
    const usersApiCall = async () =>{
        const res = await fetch(usersUrl)
        const json = await res.json()   
        setUsers(json)            
    }
    usersApiCall()
    
},[])


    let handles = []
    let names = []
    if(users[0]){
        for(let i = 0; i< users.length; i++){
            if(handles.indexOf(users[i].username)===-1)handles.push(users[i].username)
            if(names.indexOf(users[i].your_name)===-1) names.push(users[i].your_name)

        }
    }
    console.log('handles', handles, 'names', names)

    let usersList = <h1>Loading</h1>
    if(users[0]){
        usersList = users.map((item,index)=>{
            for(let i = 0; i <users.length; i++){
                let value = users.indexOf(users[i].your_name, i+1)
                if (value === -1){
                    return(
                        <div className = 'itemLC'>
                        <p className= 'nameLC'>{item.your_name}<span className = 'handleLC'>{item.username}</span></p>
                        
                        <p className= 'bioLC'>{item.bio}</p>
                        </div>
                    )
                }
            } 
                
        })
    }

    
    


    return(
    <div className='liveChat'>
        <form onSubmit={handleSubmit}>
            <label>
            
            <input className= 'field' type="text" value={post} placeholder="See all users below"
            name='email' onChange={handleChange}/>
            <br/>
            </label>
        </form>

        <div className='widget'>
            {usersList}
        </div>
        
    </div>

    )
}

export default LiveChat

