import React from 'react';

export default function CartCard({ product }) {
  return (
    <div className='cart-card'>
      <img src={product.image} alt='' />
      <div className='product-container'>
        <header>{product.name}</header>
        <span className='price'>${product.price.toFixed(2)}</span>
      </div>
      <div className='quantity-container'>
        <button>-</button>
        <span>{product.quantity}</span>
        <button>+</button>
      </div>
      <button>Remove</button>
    </div>
  );
}
