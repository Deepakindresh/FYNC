import React from 'react'
import { useStateValue } from "../StateProvider";
import "./ShopProduct.css"

function ShopProduct({ id, title, image, price, rating}) {

    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id,
        });
    };

    return (
        <div>

            <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""></img>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
             ))}
                </div>
              <button onClick={removeFromBasket}>Remove from Shop</button>
           
            </div>
            
        </div>
            
        </div>
    )
}

export default ShopProduct
