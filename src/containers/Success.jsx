import React, { useContext } from 'react';

import useGoogleAddress from '../hooks/useGoogleAddress';

import AppContext from '../context/AppContext';

import Map from '../components/Map';

import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  const buyerLocation = useGoogleAddress(
    // destructure it
    buyer[0].address,
    buyer[0].city,
    buyer[0].province,
    buyer[0].country
  );

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`Thanks for your Order, ${buyer[0].name}!`}</h2>
        <span>It will come to you within 3 days from now on.</span>

        <div className="Success-map">
          <Map data={buyerLocation} />
        </div>
      </div>
    </div>
  );
};

export default Success;
