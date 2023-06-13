import '../styles/Cart.scss';
import React, { useContext } from 'react';
import { CartContext } from '../App';
import CartCard from '../components/CartCard';

export default function Cart() {
  const { cart, isCartVisible, toggleCart } = useContext(CartContext);
  return (
    <div className='cart-container'>
      <div
        className={`overlay ${isCartVisible ? 'visible' : ''}`}
        onClick={() => {
          toggleCart();
        }}
      ></div>

      <div className={`cart ${isCartVisible ? 'visible' : ''}`}>
        <svg
          onClick={() => {
            toggleCart();
          }}
          id='close-btn'
          xmlns='http://www.w3.org/2000/svg'
          height='48'
          viewBox='0 -960 960 960'
          width='48'
        >
          <path d='m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z' />
        </svg>
        <div className='cart-main'>
          {cart.length === 0 ? (
            <p>Looks like your cart is empty....</p>
          ) : (
            cart.map((productObj) => (
              <CartCard key={productObj.title} productObj={productObj} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
