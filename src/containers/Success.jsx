import React from 'react';

import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>Thanks for your Order, Capo!</h2>
        <span>It will come to you within 3 days from now on.</span>

        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
};

export default Success;
