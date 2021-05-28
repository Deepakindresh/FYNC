import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";



function Product({ id, title, image, price, rating }) {

  const [{basket},dispatch] = useStateValue();

  let addToBasket = () =>{
    dispatch({
    type: "ADD_TO_BASKET",
    item: {
      id: id, //Same as below
      title,
      image,
      price,
      rating
    },
    });
 

  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to your Shop</button>
    </div>
  );
}

export default Product;