import React, {useState} from 'react'
import './Cheader.css'
import Logo2 from '../img/fync.png'
import Logo1 from '../img/logo.png'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth,db } from "../Firebase";

function Cheader() {


    const [{ cbasket, user }, dispatch] = useStateValue();

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

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }


    return (
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
    )
}

export default Cheader
