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

  console.log(defaultCenter);

  const gMapsApiKey = functions.config().googlemapsapi.key

  return (
    <LoadScript googleMapsApiKey={gMapsApiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
