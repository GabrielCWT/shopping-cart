import './styles/App.scss';
import RouteSwitch from './pages/RouteSwitch';
import { createContext, useState } from 'react';

export const CartContext = createContext(null);
export const AddToCartContext = createContext(null);

function App() {
  const [cart, setCart] = useState([]);

  const productObjFactory = (
    name = '',
    price = 0,
    image = '',
    quantity = 0
  ) => {
    return {
      name,
      price,
      image,
      quantity,
    };
  };

  const addToCart = (product) => {
    if (
      cart.find((productObj) => productObj.name === product.title) !== undefined
    ) {
      setCart(
        cart.map((productObj) => {
          if (productObj.name === product.title) {
            productObj.quantity += 1;
          }
          return productObj;
        })
      );
    } else {
      const newProduct = productObjFactory(
        product.title,
        product.price,
        product.image,
        1
      );
      setCart([...cart, newProduct]);
    }
    return cart;
  };

  return (
    <div className='App'>
      <CartContext.Provider value={cart}>
        <AddToCartContext.Provider value={addToCart}>
          <RouteSwitch />
        </AddToCartContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
