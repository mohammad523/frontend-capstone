import React, { useState } from 'react'
import './HomeFeed.css'

const HomeFeed = () => {
    const [post, setPost] = useState('')
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    
    return(
    <div className='homeFeed'>
        <form onSubmit={handleSubmit}>
            <label>
                
                <input className= 'field' type="text" value={post} placeholder="What's on your mind?"
                name='email' onChange={handleChange}/>
                <br/>
            </label>
            </form>
        <div className = 'widget'>
            hey

        </div>
        
    </div>

    )
}

export default HomeFeed