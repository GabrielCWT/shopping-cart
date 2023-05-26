import React, { useContext } from 'react';
import { CartContext } from '../App';
import CartCard from '../components/CartCard';

export default function Cart() {
  const cart = useContext(CartContext);
  return (
    <div className='cart'>
      {cart.map((productObj) => (
        <CartCard key={productObj.title} productObj={productObj} />
      ))}
    </div>
  );
}
