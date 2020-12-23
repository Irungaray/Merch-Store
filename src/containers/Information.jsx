import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../styles/components/Information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'country': formData.get('country'),
      'address': formData.get('adress'),
      'city': formData.get('city'),
      'state': formData.get('state'),
      'adress': formData.get('adress'),
      'apto': formData.get('apto'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone')
    };

    addToBuyer(buyer);
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information:</h2>
        </div>

        <div className="Information-form">
          <form ref={form}>
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
          <div className="Information-back">
            <Link to="/checkout">
              Go Back
            </Link>
          </div>

          <div className="Information-next">
            <Link to="/checkout/payment">
              <button
                type="button"
                onClick={handleSubmit}
              >
                Continue and Pay
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="information-Sidebar">
        <h3>Order:</h3>

        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
