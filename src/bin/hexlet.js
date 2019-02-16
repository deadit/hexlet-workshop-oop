#!/usr/bin/env node
import GeoInfo from '../GeoInfo';

const [, , ip] = process.argv;
const getCity = async () => {
  const geoInfo = new GeoInfo();
  const response = await geoInfo.getInfoByIp(ip);

  console.log(response.data.city);
};

getCity();
