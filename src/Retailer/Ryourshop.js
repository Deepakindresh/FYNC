import React from 'react'
import { useStateValue } from "../StateProvider"; 
import "./Ryourshop.css";
import ShopProduct from "./ShopProduct";
import {auth,db} from "../Firebase";



function Ryourshop() {

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


    return (
        <div>
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
                    
                    {basket.map(item => (
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
