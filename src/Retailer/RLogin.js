import React from 'react'
import {Link} from 'react-router-dom'
import './Rlogin.css'
function RLogin() {
    return (
        <div>
             <div className='login'>
            <Link to='/retailer/login'>
                
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text'/>

                    <h5>Password</h5>
                    <input type='password'/>

                    <button type='submit'  className='login__signInButton'>Sign In</button>
                </form>

                <button className='login__registerButton'>Create an Account</button>
            </div>
        </div>
    )


        </div>
    )
 
    }
        

export default RLogin
