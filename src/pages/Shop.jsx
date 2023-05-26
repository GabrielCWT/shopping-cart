import '../styles/Shop.scss';
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Shop({ products }) {
  return (
    <div className='shop'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
