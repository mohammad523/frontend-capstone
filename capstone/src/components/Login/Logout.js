import React from 'react';
import {signOut} from './signOut'

const Logout = () => {
    const onClickLogout = async () => {
        try {
            await signOut();
        }catch (e){
            console.log(e.message)
        }
    }

    return (
        <button onClick={onClickLogout}>Sign Out</button>
    )
}

export default Logout;