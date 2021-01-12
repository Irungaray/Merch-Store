import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';

import AppContext from '../context/AppContext';
import handleSumTotal from '../utils';

import '../styles/components/Payment.css';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId: 'sb',
    intent: 'capture',
    currency: 'USD',
  };

  // console.log(paypalOptions.clientId);

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    // console.log(data);

    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSkipPayment = () => {
    history.push('/checkout/success');
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order Resume:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}

        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>

        <button onClick={handleSkipPayment}>
          Don't you dare to skip payment!
        </button>
      </div>
    </div>
  );
};

export default Payment;
