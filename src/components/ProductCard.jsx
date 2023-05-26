import '../styles/ProductCard.scss';
import React, { useContext } from 'react';
import { AddToCartContext } from '../App';

export default function ProductCard({ product }) {
  const addToCart = useContext(AddToCartContext);
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
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
