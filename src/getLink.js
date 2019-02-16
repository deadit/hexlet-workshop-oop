import Url from 'url';

const geoInfoApi = (link, ip = '') => new Url(`${link}${ip}`);

export default geoInfoApi;
