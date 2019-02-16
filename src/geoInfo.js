import httpClient from './httpClient';
import getLink from './getLink';

export default class {
  constructor(client, link) {
    this.httpClient = client || httpClient('axios');
    this.link = link || 'http://ip-api.com/json/';
  }

  getInfoByip(ip = '') {
    return this.httpClient(getLink(this.link, ip));
  }
}
