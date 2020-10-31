import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase"
import React from 'react'
import './Login.css';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                src="https://cdn3.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_telegram-512.png" alt=""/>
                <h1>Message</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
            
        </div>
    )
}

export default Login
