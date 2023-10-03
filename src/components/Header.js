import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/"><img alt="" className="logo" src="./images/lotus.png"></img></Link>
      <h1 className='companyName'>EXHALE YOGA</h1>
      <div className="menu"
        // Menu icon/button, toggles menuOpen state when clicked //
        onClick={() => {setMenuOpen(!menuOpen)
        }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart"><img className="cart-logo" src='./images/shopping-cart.png'/></NavLink>
        </li>
      </ul>
    </nav>
  )
}



