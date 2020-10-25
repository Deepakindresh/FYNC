import React from 'react'
import { useStateValue } from "../StateProvider"; 
import "./Ryourshop.css";
import ShopProduct from "./ShopProduct";


function Ryourshop() {

    const [{ basket }] = useStateValue();

    return (
        <div>
            <div className="Ryourshop">
            <div className="Ryourshop__left">
                <img
            className = "Ryourshop__ad"
            src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
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
                    <h2 className="Ryourshop__title">Your Shop</h2>
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
        </div>
    )
}

export default Ryourshop
