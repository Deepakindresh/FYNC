import React, {useState} from 'react'
import "./Clogin.css"
import { Link, useHistory} from "react-router-dom";
import {useStateValue} from '../StateProvider';
import {auth,db} from "../Firebase";


function Clogin() {

    const [{shop},dispatch] = useStateValue();
    const [Products,setProducts] = useState();

    const [Retailshop,setRetailshop] = useState();
    var docRet = db.collection("Shops").doc("Ruben Bakery");
    docRet.get().then(function(doc) {
    if (doc.exists) {
        setRetailshop(doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch(function(error) {
    console.log("Error getting document:", error);
    });

    function addretailer(){
      dispatch({
        type: "ADD_TO_RETAILER",
        shop: Retailshop
      })
    }


    var docShop = db.collection("Shops").doc("Ruben Bakery Basket");

    docShop.get().then(function(doc) {
    if (doc.exists) {
        setProducts(doc.data().basket);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch(function(error) {
    console.log("Error getting document:", error);
    });

    function addProducts(){
      dispatch({
        type: "ADD_TO_SHOP",
        products: Products
      });
      addretailer();
    }

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect
            addProducts();
            history.push("/");
        })
        .catch((e) => alert(e.message));        
    }

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //created a user and signed in
            addProducts();
            history.push("/");
        })
        .catch((e) => alert(e.message)); 
    }


    return (
        <div>
             <div className='login'>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} 
                    onChange = {event => setEmail(event.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} 
                    onChange = {event => setPassword(event.target.value)}/>

                    <button type='submit' onClick={login} className='login__signInButton'>Sign In</button>
                </form>

                <button type="submit" onClick={register} className='login__registerButton'>Create an Account</button>
            </div>
        </div>


        </div>
    )
 
    }
export default Clogin
