import React, { useContext } from 'react';
import { PRODUCTS } from '../Productlist';
import { ShopContext } from '../shop-context';
import { CartItem } from "../cart-item";
import { useNavigate } from 'react-router-dom';
import '../styles/cart.css'

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {/* Mapping over the list of PRODUCTS and displaying CartItem components for items in the cart 
         Checking if the quantity of the product in the cart is greater than 0 */}
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            // If the quantity is greater than 0, render the CartItem component with product data
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? ( // Checking if there are items in the cart
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/Shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};