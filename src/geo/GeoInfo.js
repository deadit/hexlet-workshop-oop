import axios from 'axios';
import getLink from './getLink';

export default class {
  constructor(client, link) {
    this.httpClient = client || axios;
    this.link = link || 'http://ip-api.com/json/';
  }

  async getInfoByIp(ip = '') {
    const response = await this.httpClient.get(getLink(this.link, ip));
    return response.data;
  }
}
