import './styles/App.scss';
import RouteSwitch from './pages/RouteSwitch';
import { createContext, useState } from 'react';

export const CartContext = createContext(null);
export const CartControlContext = createContext(null);

function App() {
  const [cart, setCart] = useState([]);

  const containsProduct = (product) => {
    if (cart.find((productObj) => productObj.title === product.title)) {
      return true;
    }
    return false;
  };

  const productObjFactory = (
    title = '',
    price = 0,
    image = '',
    quantity = 0
  ) => {
    return {
      title,
      price,
      image,
      quantity,
    };
  };

  const removeOneFromCart = (product) => {
    if (containsProduct(product)) {
      if (product.quantity - 1 < 1) {
        deleteFromCart(product);
        return;
      }
      setCart(
        cart.map((productObj) => {
          if (productObj.title === product.title) {
            productObj.quantity -= 1;
          }
          return productObj;
        })
      );
    }
  };

  const deleteFromCart = (product) => {
    setCart(cart.filter((productObj) => productObj.title !== product.title));
  };

  const addToCart = (product) => {
    if (containsProduct(product)) {
      setCart(
        cart.map((productObj) => {
          if (productObj.title === product.title) {
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
  };

  return (
    <div className='App'>
      <CartContext.Provider value={cart}>
        <CartControlContext.Provider
          value={{ addToCart, removeOneFromCart, deleteFromCart }}
        >
          <RouteSwitch />
        </CartControlContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
