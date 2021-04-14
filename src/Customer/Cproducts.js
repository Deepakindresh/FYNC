import React,{useState}from 'react'
import { useStateValue } from "../StateProvider";
import { auth,db } from "../Firebase";
import ShopProduct from './ShopProduct'
import "./Cproducts.css";
import Shop from './Shop';

function Cproducts() {

    const [{ shop,retailer }] = useStateValue();
    
    return (
        <div>
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
                    {shop.map(item => 
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

