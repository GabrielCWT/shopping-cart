import '../styles/Nav.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../pages/Cart';

export default function Nav() {
  return (
    <nav>
      <span className='logo'>Logo</span>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/shop'>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
      <Cart />
    </nav>
  );
}
