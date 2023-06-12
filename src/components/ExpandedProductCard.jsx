import '../styles/ExpandedProductCard.scss';
import React, { useContext } from 'react';
import { CartControlContext } from '../App';

export default function ExpandedProductCard({ product }) {
  const { addToCart } = useContext(CartControlContext);
  return (
    <div className='expanded-product'>
      <img src={product.image} alt='' />
      <header>
        <h1>{product.title}</h1>
        <h2>{product.category}</h2>
      </header>
      <p>{product.description}</p>
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
