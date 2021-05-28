import React from 'react'
import Shop from './Shop'
import l1 from '../img/bg.jpg'
import {useStateValue} from '../StateProvider'
import "./Cshops.css"

// Header imports

import {useState} from 'react'
import './Cheader.css'
import Logo2 from '../img/fync.png'
import Logo1 from '../img/logo.png'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { auth,db } from "../Firebase";

function Cshops() {

    const [{retailer}] = useStateValue();
    const [search, setSearch] = useState("");
    // Header Code

    const [{ cbasket, user }, dispatch] = useStateValue();
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
        <div className="global">

            <div>
            <div className="Cheader">
            <Link to="/Welcome">
              <img className="C__log1" src={Logo1} alt="l"/>
              <img className="C__log2" src={Logo2} alt="l"/>
            </Link>
            
            <div className="Rheader__search">
             <input className="Rheader__searchInput" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <SearchIcon className="Rheader__searchIcon" type="submit" value={search} onClick={(e) => setSearch(search)} />
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
            <div className="home">
            <img className="home__image" src={l1} alt = ""></img>
            <div className="home__row">
                {
                    retailer?.map(shop => 
                    <Shop
                        Aadhar = {shop.Aadhar}
                        closeTime = {shop.closeTime}
                        description = {shop.description}
                        email = {shop.email}
                        image = {shop.image}
                        openTime = {shop.openTime}
                        password = {shop.password}
                        phone = {shop.phone}
                        shopLocation = {shop.shopLocation}
                        shopName = {shop.shopName}
                    />)
                }
                <Shop
                    Aadhar = "1111 2222 3333 4444"
                    closeTime = "10pm"
                    description = "If you want Quality products, you know where to come!"
                    email = "thangam@gmail.com"
                    image = "https://images.jdmagicbox.com/comp/chennai/s5/044pxx44.xx44.160106164554.q9s5/catalogue/thangam-stores-alandur-st-thomas-mount-chennai-provision-stores-3rmzk5.jpg?clr=#5a200c"
                    openTime = "10am"
                    password = "thangam"
                    phone = "9123456780"
                    shopLocation = "Mylapore, Chennai-04"
                    shopName = "THANGAM STORES"
                /><Shop
                    Aadhar = "5555 4444 3456 9999"
                    closeTime = "11pm"
                    description = "Safety at your pockets!"
                    email = "medplus@gmail.com"
                    image = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Medplus_logo.jpg"
                    openTime = "6am"
                    password = "medplus"
                    phone = "9456234560"
                    shopLocation = "Mylapore, Chennai-04"
                    shopName = "MEDPLUS"
                />
            </div>
            <div className="home__row">
                <Shop
                    Aadhar = "1111 4444 6666 9999"
                    closeTime = "7pm"
                    description = "Where else would you buy the best fruits."
                    email = "pazham@gmail.com"
                    image = "https://b.zmtcdn.com/data/pictures/6/18728686/5e04b232e06728519771dc71a6a8d687.jpg?fit=around|1029:555&crop=1029:555;*,*"
                    openTime = "6am"
                    password = "pazham"
                    phone = "8456790232"
                    shopLocation = "Mylapore, Chennai-04"
                    shopName = "PAZHAMUDIR"
                />
                <Shop
                    Aadhar = "5555 4444 6666 9879"
                    closeTime = "10pm"
                    description = "All stationery available."
                    email = "station@gmail.com"
                    image = "https://content3.jdmagicbox.com/comp/noida/e8/011pxx11.xx11.160823151444.a3e8/catalogue/super-india-stationery-greater-noida-noida-stationery-shops-20goikt.jpg?clr=660027"
                    openTime = "10am"
                    password = "stationery"
                    phone = "9071234560"
                    shopLocation = "Mylapore, Chennai-04"
                    shopName = "SSS"
                />
            </div>
            
        </div>
       </div>
    )
}

export default Cshops
