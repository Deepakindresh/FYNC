import React from 'react';
import { useStateValue } from "../StateProvider"; 
import "./Ccheckout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";



function Ccheckout() {
    const [{ cbasket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
            className = "checkout__ad"
            src = "https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/persuasive-ads-coca-cola.jpg"
            alt = ""
            />
            {cbasket?.length === 0 ? (
                <div>
                   <h2>Your Shopping basket is empty</h2>
                   <br/>
                   <p>You have no items in your basket. To buy one or more items click "Add to basket" in the homepage.</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {cbasket.map(item => (
                        <CheckoutProduct
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
            {cbasket?.length > 0 && (
                <div className="checkout__right"> 
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Ccheckout;
