import React from 'react'
import Shop from './Shop'
import l1 from '../img/bg.jpg'
import {useStateValue} from '../StateProvider'
import "./Cshops.css"
import shops from './Shops.json'
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
        console.log("Hello")
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

  let filteredData = shops.filter((sh)=>{
        return ((sh.shopName.toLowerCase().indexOf(search.toLowerCase()) !== -1 || sh.shopLocation.toLowerCase().indexOf(search.toLowerCase()) !== -1 ) || sh.phone.indexOf(search) !== -1 )
    })

  function displayProds(filteredData,choice)
    {
      let displayRetailers = []
      switch(choice)
      {
        case 1: for (let i=0;i<2;i++) {
          let shopRet = filteredData[i];
     shopRet && displayRetailers.push(<Shop
                        Aadhar = {shopRet.Aadhar}
                        closeTime = {shopRet.closeTime}
                        description = {shopRet.description}
                        email = {shopRet.email}
                        image = {shopRet.image}
                        openTime = {shopRet.openTime}
                        password = {shopRet.password}
                        phone = {shopRet.phone}
                        shopLocation = {shopRet.shopLocation}
                        shopName = {shopRet.shopName}
                       />);
      }
      break;
      case 2: for (let i=2;i<4;i++) {
          let shopRet = filteredData[i];
     shopRet && displayRetailers.push(<Shop
                        Aadhar = {shopRet.Aadhar}
                        closeTime = {shopRet.closeTime}
                        description = {shopRet.description}
                        email = {shopRet.email}
                        image = {shopRet.image}
                        openTime = {shopRet.openTime}
                        password = {shopRet.password}
                        phone = {shopRet.phone}
                        shopLocation = {shopRet.shopLocation}
                        shopName = {shopRet.shopName}
                       />);
      }
      break;
      case 3: for (let i=4;i<filteredData.length;i++) {
          let shopRet = filteredData[i];
     shopRet && displayRetailers.push(<Shop
                        Aadhar = {shopRet.Aadhar}
                        closeTime = {shopRet.closeTime}
                        description = {shopRet.description}
                        email = {shopRet.email}
                        image = {shopRet.image}
                        openTime = {shopRet.openTime}
                        password = {shopRet.password}
                        phone = {shopRet.phone}
                        shopLocation = {shopRet.shopLocation}
                        shopName = {shopRet.shopName}
                       />);
      }
      break;

      default: displayRetailers.push(null)
      break;
      
    }
    return displayRetailers;
    };

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
                {
                   displayProds(filteredData,1)
                }
                
            </div>
            <div className="home__row">
                {
                   displayProds(filteredData,2)
                }
            </div>

            <div className="home__row">
                {
                   displayProds(filteredData,3)
                }
            </div>
            
        </div>
       </div>
    )
}

export default Cshops
