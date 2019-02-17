import axios from "axios";
import url from 'url';

export default class {
  constructor(apiKey, client) {
    this.apiKey = apiKey || '';
    this.client = client || axios;
  }

  getLink(link, query) {
    return url.parse(`${link}${query}`, true).href;
  }
}
