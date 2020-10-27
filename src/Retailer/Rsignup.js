import React, {useState} from 'react'
import './Rsignup.css'
import {Link, useHistory } from "react-router-dom"
import {auth,db} from "../Firebase";
import {useStateValue} from '../StateProvider'
function Rsignup() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Aadhar, setAadhar] = useState("");
    const [shopName, setshopName] = useState("");
    const [shopLocation, setshopLocation] = useState("");
    const [phone, setphone] = useState("");
    const [openTime, setopenTime] = useState("");
    const [closeTime, setcloseTime] = useState("");
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    const [{retailer},dispatch] = useStateValue();


    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //dispatch added
            dispatch({
             type: "ADD_TO_RETAILER",
             shop: {
                     email,
                     password,
                     Aadhar,
                     shopName,
                     shopLocation,
                     phone,
                     openTime,
                     closeTime,
                     image,
                     description
                  },
             });
             // Send data to firestore

            db.collection("Shops").doc("Ruben Bakery").set({
                     email,
                     password,
                     Aadhar,
                     shopName,
                     phone,
                     shopLocation,
                     openTime,
                     closeTime,
                     image,
                     description
            
            })
            .then(function(docRef) {
             console.log("Document written");
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });

            //created a user and signed in
            history.push("/retailer/products");
        })
        .catch((e) => alert(e.message)); 
    }

    console.log("Retailer is ",retailer);
    return (
        <div>
             <div className='login'>

            <div className='login__container'>
                <h1>SIGN-UP</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' placeholder='abc@gmail.com' value={email} onChange = {event => setEmail(event.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' placeholder = 'password' value={password} onChange = {event => setPassword(event.target.value)}/>

                    <h5>Aadhar number</h5>
                    <input type='text' placeholder = 'Aadhar number' value={Aadhar} onChange = {event => setAadhar(event.target.value)}/>

                    <h5>Shop name</h5>
                    <input type='text' placeholder = 'shop name' value={shopName} onChange = {event => setshopName(event.target.value)}/>

                    <h5>Shop location</h5>
                    <input type='text' placeholder = 'location' value={shopLocation} onChange = {event => setshopLocation(event.target.value)}/>

                    <h5>Phone number</h5>
                    <input type='text' placeholder = 'phone number' value={phone} onChange = {event => setphone(event.target.value)}/>

                    <h5>Opening time</h5>
                    <input type='text' placeholder = 'opening time' value={openTime} onChange = {event => setopenTime(event.target.value)}/>

                    <h5>Closing time</h5>
                    <input type='text' placeholder = 'closing time' value={closeTime} onChange = {event => setcloseTime(event.target.value)}/>

                    <h5>Image</h5>
                    <input type='text' placeholder = 'upload your image' value={image} onChange = {event => setimage(event.target.value)}/>

                    <h5>Description</h5>
                    <input type='text' placeholder = 'about your shop' value={description} onChange = {event => setdescription(event.target.value)}/>


                    <button onClick = {register} className='login__registerButton'>Create an Account</button>
                </form>

                
            </div>
        </div>


        </div>
    )
 
    }

       

export default Rsignup
