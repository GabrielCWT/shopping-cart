import React, { useEffect, useState } from 'react';

export default function Shop({ products }) {
  return (
    <div className="shop">
      {products.map((product) => {
        return <div key={product.title}>{product.title}</div>;
      })}
    </div>
  );
}
