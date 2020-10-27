import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { auth,db } from "../Firebase";
import { useStateValue } from "../StateProvider";
import './Shop.css';

function Shop({Aadhar, closeTime, description, email, image, openTime, password, shopLocation, shopName,phone}) {


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

    let addProducts = () =>{
      dispatch({
        type: "ADD_TO_SHOP",
        products: Products
      });
      addretailer();
    }


    return (
        <div className="shop">
            <img src = {image} alt="" />
            <div className="shop__info">
                <div className="shop__name">{shopName}</div>
                <div className="shop__addr"><LocationOnIcon/>Addr: {shopLocation}</div>
                <div className="shop__phno"><PhoneIcon/>Phone: {phone} </div>
                <div className="shop__email"><EmailIcon/>Email: {email}</div>
                <div className="shop__time"><ScheduleIcon/>Open Time: {openTime} - {closeTime}</div>
                <br/>
                <Link  to="/customer/products" style = {{ textDecoration: 'none' }}>
                    <div className="shop__button" onClick={addProducts}>Enter Shop</div>
                </Link>
                <br/>
                <p className = "line"></p>
                <div className="shop__desc">Description: {description}</div>
            </div>         
        </div>
    )
}

export default Shop
