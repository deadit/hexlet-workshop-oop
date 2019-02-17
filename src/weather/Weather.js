import Weatherbit from './WeatherbitService';
import Metaweather from './MetaweatherService';
import { get } from 'lodash';
import Service from './Service';

export default class {
  static services = {
    'weatherbit': Weatherbit,
    'metaweather': Metaweather
  }

  constructor(serviceName) {
    this.service = new get(this.services, serviceName, Weatherbit)();
  }

  getCityTemperature(cityName) {
    return this.service.getCityInfo(cityName);
  }
}

// const weather = new Weather();
// const weather = new Weather(new Service(apiKey, new Http()));
// weather.getCityTemperature(cityname)
