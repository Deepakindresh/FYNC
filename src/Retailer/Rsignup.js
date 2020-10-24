import React from 'react'
import {Link} from 'react-router-dom'
import './Rsignup.css'
function Rsignup() {
    return (
        <div>
             <div className='login'>
            <Link to='/retailer/login'>
                
            </Link>

            <div className='login__container'>
                <h1>SIGN-UP</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' placeholder='abc@gmail.com'/>

                    <h5>Password</h5>
                    <input type='password' placeholder = 'password'/>

                    <h5>Aadhar number</h5>
                    <input type='text' placeholder = 'Aadhar number'/>

                    <h5>Shop name</h5>
                    <input type='text' placeholder = 'shop name'/>

                    <h5>Shop location</h5>
                    <input type='text' placeholder = 'location'/>

                    <h5>Phone number</h5>
                    <input type='text' placeholder = 'phone number'/>

                    <h5>Opening time</h5>
                    <input type='text' placeholder = 'opening time'/>

                    <h5>Closing time</h5>
                    <input type='text' placeholder = 'closing time'/>

                    <h5>Image</h5>
                    <input type='text' placeholder = 'upload your image'/>

                    <h5>Description</h5>
                    <input type='text' placeholder = 'about your shop'/>


                    <button className='login__registerButton'>Create an Account</button>
                </form>

                
            </div>
        </div>
    )


        </div>
    )
 
    }

       

export default Rsignup
