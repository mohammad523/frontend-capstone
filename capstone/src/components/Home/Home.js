import React from 'react'
import LiveChat from './LiveChat/LiveChat'
import styles from './Home.css'
import HomeFeed from './HomeFeed/HomeFeed'

const Home = (props) => {
    // props.handleSuccessfulAuth = props.handleSuccessfulAuth.bind(props);

    const handleSuccessfulAuth = (data) => {
        //Todo update parent comonent
        props.history.push("/Home")
    }
    return(
    <div className = "home">
        <h1 className = 'header'>theSocialApp</h1>
        <div className='nav'>
            <h1>{props.loginStatus}</h1>
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