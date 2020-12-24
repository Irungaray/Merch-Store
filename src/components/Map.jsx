import React from 'react';

import {
  GoogleMap,
  LoadScript,
  Marker
} from '@react-google-maps/api';

const Map = () => {
  const mapStyles= {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: 19.4212442,
    lng: -34.2345
  }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>

      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>

        <Marker position={defaultCenter} />

      </GoogleMap>

    </LoadScript>
  );
}

export default Map;
