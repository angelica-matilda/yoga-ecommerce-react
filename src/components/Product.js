import React from "react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} />
      <div className="product-description">
        <p>
          <b>{productName}</b>
        </p>
        <p><b>$</b> {price}</p>
        <button className="addToCartBtn"><b>Add To Cart</b></button>
      </div>
    </div>
  );
};
