import React from 'react';
import { useStateValue } from "../StateProvider"; 
import "./Ccheckout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

// Header imports

import {useState} from 'react'
import './Cheader.css'
import Logo2 from '../img/fync.png'
import Logo1 from '../img/logo.png'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { auth,db } from "../Firebase";

function Ccheckout() {
    const [{ cbasket }] = useStateValue();

    // Header Code

    const [{ user }, dispatch] = useStateValue();
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

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
    return (
        <div className="checkout">
            <div>
            <div className="Cheader">
            <Link to="/Welcome">
              <img className="C__log1" src={Logo1} alt="l"/>
              <img className="C__log2" src={Logo2} alt="l"/>
            </Link>
            

            <div className="Cheader__search">
             <input className="Cheader__searchInput" type="text" />
            <SearchIcon className="Cheader__searchIcon" />
            </div>

            <div className="Cheader__nav">
            <Link to={!user && '/customer/login'} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthenticaton} className="Cheader__option">
            <span className="Cheader__optionLineOne">Hello {!user ? 'Customer' : user.email}</span>
            <span className="Cheader__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/' onClick={addretailer} style={{ textDecoration: 'none' }}>
          <div className="Cheader__option">
            <span className="Cheader__optionLineOne">Go to</span>
            <span className="Cheader__optionLineTwo">Shops</span>
          </div>
        </Link>
        
        <Link to="/customer/checkout" style={{ textDecoration: 'none' }}>
          <div className="Cheader__optionBasket">
            <ShoppingBasket />
            <span className="Cheader__optionLineTwo Cheader__basketCount">
              {cbasket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
        </div>
            {/* Main Page */}
            <div className="checkout__left">
                <img
            className = "checkout__ad"
            src = "https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/persuasive-ads-coca-cola.jpg"
            alt = ""
            />
            {cbasket?.length === 0 ? (
                <div className="checkout__error">
                   <h2>Your Shopping basket is empty</h2>
                   <br/>
                   <p>You have no items in your basket. To buy one or more items click "Add to basket" in the homepage.</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {cbasket.map(item => (
                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
            )}

            </div>
            {cbasket?.length > 0 && (
                <div className="checkout__right"> 
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Ccheckout;
