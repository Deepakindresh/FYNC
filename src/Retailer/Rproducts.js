import React, {useState} from 'react'
import Product from './Product' 
import l1 from '../img/bg.jpg'
import "./Rproducts.css"
import retailerprods from "./retailerprods.json"

function Rproducts() {
    const [numProd,setnumProd] = useState(0);
    const [search, setSearch] = useState("");
    let filteredData = retailerprods.filter((retailer)=>{
        return retailer.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    function displayProds(filteredData,choice)
    {
      let displayRetailers = []
      switch(choice)
      {
        case 1: for (let i=0;i<3;i++) {
          let Retailer = filteredData[i];
      displayRetailers.push(<Product
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
      displayRetailers.push(<Product
                         id={Retailer.id}
                         title={Retailer.title}
                         price={Retailer.price}
                         rating={Retailer.rating}
                         image={Retailer.image}
                       />);
      }
      break;
      case 3: for (let i=5;i<filteredData.length;i++) {
          let Retailer = filteredData[i];
      displayRetailers.push(<Product
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
                
      </div>

    </div>
    )
}

export default Rproducts
