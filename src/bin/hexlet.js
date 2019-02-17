#!/usr/bin/env node
import GeoInfo from '../geo/GeoInfo';

const [, , ip] = process.argv;
const getCity = async () => {
  const geoInfo = new GeoInfo();
  const info = await geoInfo.getInfoByIp(ip);
  console.log(info.city);
};

getCity();
