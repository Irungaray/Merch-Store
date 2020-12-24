import React, { useContext } from 'react';

import useGoogleAddress from '../hooks/useGoogleAddress';

import AppContext from '../context/AppContext';

import Map from '../components/Map';

import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  const address = useGoogleAddress(buyer[0].address);

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`Thanks for your Order, ${buyer[0].name}!`}</h2>
        <span>It will come to you within 3 days from now on.</span>

        <div className="Success-map">
          <Map data={address} />
        </div>
      </div>
    </div>
  );
};

export default Success;
