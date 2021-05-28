import React, {useState} from 'react'
import Product from './Product' 
import l1 from '../img/bg.jpg'
import "./Rproducts.css"
import retailerprods from "./retailerprods.json"



//For header
import Logo2 from '../img/fync.png'
import Logo1 from '../img/logo.png'
import SearchIcon from "@material-ui/icons/Search";
import StoreIcon from '@material-ui/icons/Store';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth,db } from "../Firebase";

function Rproducts() {
    const [search, setSearch] = useState("");
    
    

    // header code

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

  
  let filteredData = retailerprods.filter((retailer)=>{
        return (retailer.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    })
    function displayProds(filteredData,choice)
    {
      let displayRetailers = []
      switch(choice)
      {
        case 1: for (let i=0;i<3;i++) {
          let Retailer = filteredData[i];
     Retailer && displayRetailers.push(<Product
                         id={Retailer.id}
                         title={Retailer.title}
                         price={Retailer.price}
                         rating={Retailer.rating}
                         image={Retailer.image}
                       />);
      }
      break;
      case 2: for (let i=3;i<5;i++) {
          let Retailer = filteredData[i];
     Retailer && displayRetailers.push(<Product
                         id={Retailer.id}
                         title={Retailer.title}
                         price={Retailer.price}
                         rating={Retailer.rating}
                         image={Retailer.image}
                       />);
      }
      break;
      case 3: for (let i=5;i<9;i++) {
          let Retailer = filteredData[i];
     Retailer && displayRetailers.push(<Product
                         id={Retailer.id}
                         title={Retailer.title}
                         price={Retailer.price}
                         rating={Retailer.rating}
                         image={Retailer.image}
                       />);
      }
      break;

      case 4: for (let i=9;i<13;i++) {
          let Retailer = filteredData[i];
     Retailer && displayRetailers.push(<Product
                         id={Retailer.id}
                         title={Retailer.title}
                         price={Retailer.price}
                         rating={Retailer.rating}
                         image={Retailer.image}
                       />);
      }
      break;

      case 5: for (let i=13;i<17;i++) {
          let Retailer = filteredData[i];
     Retailer && displayRetailers.push(<Product
                         id={Retailer.id}
                         title={Retailer.title}
                         price={Retailer.price}
                         rating={Retailer.rating}
                         image={Retailer.image}
                       />);
      }
      break;

      case 6: for (let i=17;i<filteredData.length;i++) {
          let Retailer = filteredData[i];
     Retailer && displayRetailers.push(<Product
                         id={Retailer.id}
                         title={Retailer.title}
                         price={Retailer.price}
                         rating={Retailer.rating}
                         image={Retailer.image}
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

            <div className="home">
            <img className="home__image" src={l1} alt = ""></img>

            <div className="home__row">
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

            <div className="home__row">
              {
                displayProds(filteredData,4)
              }
            </div>

            <div className="home__row">
              {
                displayProds(filteredData,5)
              }
            </div>

            <div className="home__row">
              {
                displayProds(filteredData,6)
              }
            </div>
                
      </div>

    </div>
    )
}

export default Rproducts
