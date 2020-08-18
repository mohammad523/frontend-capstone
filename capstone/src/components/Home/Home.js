import React from 'react'
import LiveChat from './LiveChat/LiveChat'
import styles from './Home.css'
import HomeFeed from './HomeFeed/HomeFeed'

const Home = () => {
    return(
    <div className = "home">
        <div className='nav'>
            <h1>hey</h1>
        </div>
        
        <div className='homeFeed'>
            <HomeFeed />
        </div>
        <div className='chat'>
        <LiveChat />
        </div>
    </div>

    )
}

export default Home