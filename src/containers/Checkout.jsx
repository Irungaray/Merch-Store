import React from 'react';

import '../styles/components/Checkout.css';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Products list:</h3>

        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>

          <button type="button">Delete</button>
        </div>
      </div>

      <div className="Checkout-sidebar">
        <h3>Total Price: $10</h3>

        <button type="button">Continue</button>
      </div>
    </div>
  );
};

export default Checkout;
