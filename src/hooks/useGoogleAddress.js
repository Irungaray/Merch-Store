import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address, city, province, country) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${country}${province}${city}${address}&key=AIzaSyCmXCbBEd0K2QyDb0ev9vUYh4BiI_ciNhk`;

  // console.log(API);

  useEffect(() => {
    const getData = async () => {
      const response = await axios(API);
      setMap(response.data.results[0].geometry.location);
    }

    getData();
  }, []);

  return map;
};

export default useGoogleAddress;
