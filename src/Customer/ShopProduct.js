
import React from 'react'
import { useStateValue } from "../StateProvider";
import "./ShopProduct.css"

function ShopProduct({ id, title, image, price, rating}) {

    const [{ cbasket }, dispatch] = useStateValue();
    const addtoBasket = () => {
        dispatch({
            type: "ADD_TO_CBASKET",
            item:{
                    id,
                    title,
                    image,
                    price,
                    rating
            }
            
    });
    }
    return (
        <div>

            <div className="ShopProduct">
            <img className="ShopProduct__image" src={image} alt=""></img>

            <div className="ShopProduct__info">
                <p className="ShopProduct__title">{title}</p>
                <p className="ShopProduct__price">
                <small>Rs</small>
                <strong>{price}</strong>
                </p>
                <div className="ShopProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
             ))}
                </div>
              <button onClick={addtoBasket}>Add to Basket</button>
           
            </div>
            
        </div>
            
        </div>
    )
}

export default ShopProduct;