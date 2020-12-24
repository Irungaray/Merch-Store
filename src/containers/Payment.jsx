import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';

import AppContext from '../context/AppContext';

import '../styles/components/Payment.css';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      'AYOgBQAQ2-58eRZCiqN4sdFwx6rWWrP-D-FX6Zz-S7lbqmFiidz8MdWCwVGDAFzr0ARfNKsQIWwYJekC',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonSyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data)

    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }

      addNewOrder(newOrder);
      history.push('/checkout/succes')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order Resume:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {' '} {item.price}</span>
            </div>
          </div>
        ))}

        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonSyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Payment Started')}
            onPaymentSuccess={data => handlePaymentSuccess('Payment Success:', data)}
            onPaymentError={error => console.log('Payment error:', error)}
            onPaymentCancel={data => console.log('Payment canceled:', data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
