import httpClient from './httpClient';
import getLink from './getLink';

export default class {
  constructor(client, link) {
    this.httpClient = client || httpClient('axios');
    this.link = link || 'http://ip-api.com/json/';
  }

  getLink(ip) {
    return getLink(this.link, ip);
  }

  get(ip = '') {
    return this.httpClient(this.getLink(ip));
  }
}
