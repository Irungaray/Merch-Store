import React from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: +data.lat,
    lng: +data.lng,
    // this throws console errors. Is it because async functions?
    // no, it was because data was passed as a string
    // corrected? adding the +
  };

  // console.log(defaultCenter);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCmXCbBEd0K2QyDb0ev9vUYh4BiI_ciNhk">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
