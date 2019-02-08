import axios from 'axios';

const link = 'http://ip-api.com/json/';

const clients = {
  axios,
};

const getGeoInfo = (httpClient, serviceAddress) => async (ip) => {
  if (!clients[httpClient]) {
    return 'Bad http client';
  }

  const { data: { city } } = await clients[httpClient].get(`${serviceAddress}${ip}`);
  return city;
};

export default getGeoInfo('axios', link);
