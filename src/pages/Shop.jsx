import '../styles/Shop.scss';
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ExpandedProductCard from '../components/ExpandedProductCard';

export default function Shop({ products }) {
  const [expandedCardProduct, setExpandedCardProduct] = useState(null);

  const handleExpandedCard = (product) => {
    const shopDialog = document.querySelector('dialog');
    setExpandedCardProduct(product);
    if (expandedCardProduct === null) {
      return;
    }

    shopDialog.showModal();
  };

  const closeShopDialog = () => {
    const shopDialog = document.querySelector('dialog');
    shopDialog.close();
  };

  return (
    <div className='shop'>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            handleExpandedCard={handleExpandedCard}
          />
        );
      })}
      <dialog>
        <button onClick={closeShopDialog}>Close</button>
        {expandedCardProduct ? (
          <ExpandedProductCard product={expandedCardProduct} />
        ) : (
          <h1> There seems to be an error...</h1>
        )}
      </dialog>

      <div className='message'>Added to cart!</div>
    </div>
  );
}
