import React, { useState, useEffect } from 'react'
import './LiveChat.css'
import firebase from 'firebase/app'

const LiveChat = () => {
    const [post, setPost] = useState('')
    const [chats, setChats] = useState([])
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    
    useEffect(() =>{
        const fetchData = async () => {
            const db = firebase.firestore()
            let data = await db.collection('chats').get()
            console.log(data)
        }
        fetchData()
    },[])

    // console.log(chats)

    return(
    <div className='liveChat'>
        <form onSubmit={handleSubmit}>
            <label>
            
            <input className= 'field' type="text" value={post} placeholder="Search"
            name='email' onChange={handleChange}/>
            <br/>
            </label>
        </form>

        <div className='widget'>
            hey
        </div>
        
    </div>

    )
}

export default LiveChat