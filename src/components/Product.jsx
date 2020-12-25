import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={`http://localhost:1337${product.Image[0].url}`} alt={product.title} />

      <div className="Product-item-info">
        <h2>
          {product.Title}

          <span> ${product.Price}</span>
        </h2>

        <p>{product.Description}</p>
      </div>

      <button type="button" onClick={handleAddToCart(product)}>
        Buy
      </button>
    </div>
  );
};

export default Product;
