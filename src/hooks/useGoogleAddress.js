import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`

  console.log(API)

  useEffect(async () => {
    const response = await axios(API);

    setMap(response.data.results[0].geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;