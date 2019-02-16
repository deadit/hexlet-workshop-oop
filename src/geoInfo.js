import httpClient from './httpClient';
import getLink from './getLink';

export default (client = httpClient('axios'), link = 'http://ip-api.com/json/', ip = '') => {
  const link = getLink(link, ip);
  return client(link);
}
httpClient('axios'), getLink(, cmdValue);
