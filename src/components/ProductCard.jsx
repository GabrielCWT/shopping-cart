import '../styles/ProductCard.scss';
import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <img src={product.image} alt='' />
      <header>{product.title}</header>
      <div className='rating'>
        <div
          className='stars'
          style={{ '--rating': product.rating.rate }}
          aria-label={`Rating of this product is ${product.rating.rate} out of 5.`}
        ></div>
        <span className='reviews'>({product.rating.count})</span>
      </div>
      <div className='container'>
        <span className='price'>${product.price.toFixed(2)}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
