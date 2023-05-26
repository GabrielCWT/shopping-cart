import '../styles/Nav.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav({ openCart }) {
  return (
    <nav>
      <span>Logo</span>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <button onClick={openCart}>Cart</button>
    </nav>
  );
}
