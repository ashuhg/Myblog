import React from "react";
import {Link} from 'react-router-dom'

export default function Register(){
    return(
        <div className="login-page">
            <h1>Register</h1>
            <form className="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="email" placeholder="Email" />
                <button>Register</button>
                <p className="login-eror">Eror</p>
                <span>Do you have an account? <Link to="/Login">Login</Link></span>
            </form>
        </div>
    )
}