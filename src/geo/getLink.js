import url from 'url';

const getLink = (link, ip = '') => url.parse(`${link}${ip}`, true).href;

export default getLink;
