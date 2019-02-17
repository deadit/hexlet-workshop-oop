import url from 'url';

const getLink = (link, query = '') => url.parse(`${link}${query}`, true).href;

export default getLink;
