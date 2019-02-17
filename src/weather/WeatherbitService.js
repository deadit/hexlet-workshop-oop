export default class extends Service {
  constructor(apiKey, client) {
    super(client);
    this.apiKey = apiKey || '';
  }

  async getCityInfo(cityName) {
    const link = this.getLink('https://www.metaweather.com/api/location/search/?query=', cityName)
    const { data: { woeid } } = await this.client.get(link);
    console.log(woeid);
  }
}
