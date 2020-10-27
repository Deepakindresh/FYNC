import React, {useState} from 'react'
import "./Rheader.css"
import Logo2 from '../img/fync.png'
import Logo1 from '../img/logo.png'
import SearchIcon from "@material-ui/icons/Search";
import StoreIcon from '@material-ui/icons/Store';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth,db } from "../Firebase";


function Rheader() {

    const [{ basket, user }, dispatch] = useStateValue();
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

    let addRetailer = () =>{
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
       <div className="Rheader">
            <Link to="/Welcome">
              <img className="R__log1" src={Logo1} alt="l"/>
              <img className="R__log2" src={Logo2} alt="l"/>
            </Link>
            

            <div className="Rheader__search">
             <input className="Rheader__searchInput" type="text" />
            <SearchIcon className="Rheader__searchIcon" />
            </div>

            <div className="Rheader__nav">
            <Link to={!user && '/retailer/login'} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthenticaton} className="Rheader__option">
            <span className="Rheader__optionLineOne">Hello {!user ? 'Retailer' : user.email}</span>
            <span className="Rheader__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/retailer/products' style={{ textDecoration: 'none' }}>
          <div className="Rheader__option">
            <span className="Rheader__optionLineOne">Add</span>
            <span className="Rheader__optionLineTwo">Products</span>
          </div>
        </Link>
        
        <Link to="/retailer/yourshop" onClick={addRetailer} style={{ textDecoration: 'none' }}>
          <div className="Rheader__optionBasket">
            <StoreIcon />
            <span className="Rheader__optionLineTwo Rheader__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>

        
    )
}

export default Rheader