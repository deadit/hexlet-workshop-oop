#!/usr/bin/env node
import httpClient from '../httpClient';
import getLink from '../getLink';
import geoInfo from '../geoInfo';

const [, , cmdValue] = process.argv;

geoInfo(httpClient('axios'), getLink('http://ip-api.com/json/', cmdValue)).then(
  ({ data: { city } }) => console.log(city),
);
