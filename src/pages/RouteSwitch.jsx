import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import Nav from '../components/Nav';
import Cart from './Cart';

export default function RouteSwitch() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    let data = await response.json();
    return data;
  };

  const loadProducts = async () => {
    let data = await fetchData();
    setProducts(data);
    console.log('fetched');
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop products={products} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}
