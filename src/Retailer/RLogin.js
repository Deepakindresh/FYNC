import React, {useState} from 'react'
import {Link, useHistory } from "react-router-dom"
import './Rlogin.css'
import {auth} from "../Firebase";


function RLogin() {
    
    
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect
            history.push("/retailer/products");
        })
        .catch((e) => alert(e.message));        
    }
    
    
    return (
    <div className="login">
        <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} 
                    onChange = {event => setEmail(event.target.value)}
                     type="email"/>
                    <h5>Password</h5>
                    <input value={password}
                    onChange = {event => setPassword(event.target.value)}
                    type="password"/>
                    <button onClick = {login}
                    type = "submit"
                    className="login__signInButton">Sign In</button>
                </form>
                <Link to="/retailer/signup" style = {{ textDecoration: 'none' }}>
                    <button className='login__registerButton'>Create your Account</button>
                </Link>
                    
            </div>
            
        </div>
    )
 
    }
        

export default RLogin
