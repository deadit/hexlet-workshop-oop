#!/usr/bin/env node
import geoInfoClient from '../geoInfoClient';
import geoInfoApi from '../geoInfoApi';
import geoInfo from '../geoInfo';

const [, , cmdValue] = process.argv;

geoInfo(geoInfoClient('axios'), geoInfoApi('http://ip-api.com/json/', cmdValue)).then(
  ({ data: { city } }) => console.log(city),
);
