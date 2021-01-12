import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  // const API = 'http://localhost:1337';
  // const API = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';
  //  const API = 'https://merchstoreapi.appspot.com'

  const API = 'https://merchstoreapi.appspot.com';
  console.log(API);

  return (
    <div className="Products-item">
      <img
        src={product.image[0].url}
        alt={product.title}
      />

      <div className="Product-item-info">
        <h2 className="Product-item-info-title">{product.title}</h2>

        <h2>${product.price}</h2>

        <p>{product.description}</p>
      </div>

      <button type="button" onClick={handleAddToCart(product)}>
        Buy
      </button>
    </div>
  );
};

export default Product;
