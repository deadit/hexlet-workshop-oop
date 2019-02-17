import url from 'url';
import Service from './Service';

export default class extends Service {
  async getCityInfo(cityName) {
    const link = this.getLink('https://www.metaweather.com/api/location/search/?query=', cityName)
    const { data: { woeid } } = await this.client.get(link);
    console.log(woeid);
  }
}
