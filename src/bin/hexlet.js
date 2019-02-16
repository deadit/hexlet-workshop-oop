#!/usr/bin/env node
import GeoInfo from '../GeoInfo';

const [, , ip] = process.argv;
const getCity = async () => {
  const geoInfo = new GeoInfo();
  const data = await geoInfo.get(ip);

  console.log(data.data.city);
};

getCity();
