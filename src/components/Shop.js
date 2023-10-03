import React from "react";
import { PRODUCTS } from "../Productlist";
import { Product } from "./Product";
import "../styles/shop.css"; // applied to both the shop and product page

export const Shop = () => {
  return (
    <div className="shop">
      <div className='titleShop'>
        <h1>Shop All</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};