import axios from "axios";

export default class {
  constructor(client, service) {
    this.httpClient = client || axios;
    this.service = service || weatherbit;
  }
}
