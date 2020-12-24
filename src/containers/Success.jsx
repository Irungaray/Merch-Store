import React, { useContext } from 'react';

import AppContext from '../context/AppContext';

import Map from '../components/Map';

import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`Thanks for your Order, ${buyer.name}!`}</h2>
        <span>It will come to you within 3 days from now on.</span>

        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Success;
