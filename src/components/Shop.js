import React from 'react';
import { PRODUCTS } from '../Productlist';
import { Product } from './Product';
import '../styles/shop.css'; // applied to both the shop and product page

export default function Shop() {
  return (
    <div>
      <div>
        <h1 className="titleShop">Shop all</h1>
      </div>
      <div className="products">
        {' '}
        {PRODUCTS.map((product) => (
          <Product data={product}/> //prop called data
        ))}
      </div>
    </div>
  )
}
