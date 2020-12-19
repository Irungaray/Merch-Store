import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Information.css';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information:</h2>
        </div>

        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Adress" name="adress" />
            <input type="text" placeholder="Apartament" name="apto" />
            <input type="text" placeholder="Postal code" name="cp" />
            <input type="text" placeholder="Phone Number" name="phone" />
          </form>
        </div>

        <div className="Information-buttons">
          <div className="Information-back">Go Back</div>

          <div className="Information-next">
            <Link to="/checkout/payment">
              Continue and Pay
            </Link>
          </div>
        </div>
      </div>

      <div className="information-Sidebar">
        <h3>Order:</h3>

        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
