import React from "react";
import {Link} from 'react-router-dom'

export default function Login(){
    return(
        <div className="login-page">
            <h1>Login</h1>
            <form className="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <p className="login-eror">Eror</p>
                <span>Don't have an account? <Link to="/Register">Register</Link></span>
            </form>
        </div>
    )
}