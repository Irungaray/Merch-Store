import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

import Product from './Product';
import Loader from './Loader';

import '../styles/components/Products.css';

const Products = () => {
  const { products, addToCart, state } = useContext(AppContext);
  const { cart } = state;

  if (products.length == 0) {
    return <Loader />;
  }

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {cart.length > 0 && (
        <div className="Header-alert">
          <h3>{cart.length} items on the cart!</h3>

          <Link to="/checkout">
            <h3>Go to Checkout</h3>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Products;
