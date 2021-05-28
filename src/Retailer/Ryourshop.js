import React,{useState} from 'react'
import { useStateValue } from "../StateProvider"; 
import "./Ryourshop.css";
import ShopProduct from "./ShopProduct";
import {auth,db} from "../Firebase";

//For header
import Logo2 from '../img/fync.png'
import Logo1 from '../img/logo.png'
import SearchIcon from "@material-ui/icons/Search";
import StoreIcon from '@material-ui/icons/Store';
import { Link } from "react-router-dom";




function Ryourshop() {


    const [search, setSearch] = useState("");

    const [{ basket , retailer}] = useStateValue();
    const sendBasket = (event) => {
        event.preventDefault();
        db.collection("Shops").doc("Ruben Bakery Basket").set({
                     basket
         })
            .then(function(docRef) {
             console.log("Document written");
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
    } 

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

  let filteredData = basket.filter((item)=>{
        return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    return (
        <div>
            <div className="Rheader">
            <Link to="/Welcome">
              <img className="R__log1" src={Logo1} alt="l"/>
              <img className="R__log2" src={Logo2} alt="l"/>
            </Link>
      
            <div className="Rheader__search">
             <input className="Rheader__searchInput" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <SearchIcon className="Rheader__searchIcon" type="submit" value={search} onClick={(e) => setSearch(search)} />
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

            <div className="Ryourshop">
            
                <img
            className = "Ryourshop__ad"
            src = {retailer.map(x => x.image)}
            alt = ""
            />
            {basket?.length === 0 ? (
                <div>
                   <h2>Your Shop is empty</h2>
                   <br/>
                   <p>You have no items in your shop. To add one or more items click "Add to Shop" in the Products page.</p>
                </div>
            ):(
                <div>
                    <div className="Ryourshop__title">
                        <h2>Your Shop</h2>
                        <div onClick={sendBasket} className="Ryourshop__save">Save</div>
                    </div>
                    
                    {filteredData.map(item => (
                        <ShopProduct
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
        </div>
    )
}

export default Ryourshop
