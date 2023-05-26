import React, { useContext } from 'react';
import '../styles/CartCard.scss';
import { CartControlContext } from '../App';

export default function CartCard({ productObj }) {
  const { addToCart, removeOneFromCart, deleteFromCart } =
    useContext(CartControlContext);
  return (
    <div className='cart-card'>
      <img src={productObj.image} alt='' />
      <div className='product-container'>
        <header>{productObj.title}</header>
        <span className='price'>${productObj.price.toFixed(2)}</span>
      </div>
      <div className='quantity-container'>
        <button
          onClick={() => {
            removeOneFromCart(productObj);
          }}
        >
          -
        </button>
        <span>{productObj.quantity}</span>
        <button
          onClick={() => {
            addToCart(productObj);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          deleteFromCart(productObj);
        }}
      >
        Remove
      </button>
    </div>
  );
}
