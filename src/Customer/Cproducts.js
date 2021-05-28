import React,{useState}from 'react'
import { useStateValue } from "../StateProvider";
import { auth,db } from "../Firebase";
import ShopProduct from './ShopProduct'
import "./Cproducts.css";
import Shop from './Shop';

// Header imports

import './Cheader.css'
import Logo2 from '../img/fync.png'
import Logo1 from '../img/logo.png'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";


function Cproducts() {

    const [{ shop,retailer }] = useStateValue();
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

  let filteredData = shop.filter((item)=>{
        return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    
    return (
        <div>

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

            <div className="Cproducts">
            
                
            {shop?.length === 0 ? (
                <div className="error">
                   <h2>Sorry but this Shop is temporarily empty...</h2>
                   <br/>
                   <p>Try again or Find another shop.</p>
                </div>
            ):(
                <div>
                    <img
                    className = "Cproducts__ad"
                    src = {retailer.map(x => x.image)}
                    alt = ""
                    />
                    <div className="Ryourshop__title">
                        <h2>Ruben Bakery</h2>
                    </div>
                    {filteredData.map(item => 
                        <ShopProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />                         
                    )}
                </div>
            )}

            
        </div>
        </div>
    )
}

export default Cproducts

