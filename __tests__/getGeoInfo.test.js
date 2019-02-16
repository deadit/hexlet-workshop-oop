import GeoInfo from '../src/GeoInfo';

describe('geoInfo', () => {
  it('geoInfo', () => {
    const httpClient = link => link;
    const link = 'my.ru/';
    expect(new GeoInfo(httpClient, link).getInfoByIp('')).toBe('my.ru');
  });
});
