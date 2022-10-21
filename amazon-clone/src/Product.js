import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="prod-info">
        <p>{title}</p>
        <p className="prod-price">
          &#8377;&nbsp;<strong>{price}</strong>
        </p>

        <div className="prod-rate">
          {Array(rating)
            .fill()
            .map(
              (_, i) => 
              (
                <p>⭐</p>
              )
              )}
        </div>
      </div>
      <img src={image} />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
