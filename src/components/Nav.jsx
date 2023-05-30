import '../styles/Nav.scss';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Cart from '../pages/Cart';

export default function Nav() {
  return (
    <>
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
      <Suspense fallback={<h1>Loading....</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}
