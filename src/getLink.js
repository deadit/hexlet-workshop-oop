import url from 'url';

const geoInfoApi = (link, ip = '') => url.parse(`${link}${ip}`, true).href;

export default geoInfoApi;
