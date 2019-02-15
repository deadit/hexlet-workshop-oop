import geoInfo from '../src/geoInfo';
import geoInfoApi from '../src/geoInfoApi';

describe('geoInfo', () => {
  it('geoInfo', () => {
    const geoInfoClient = link => link;
    const api = geoInfoApi('my.ru/', '123.123.123.123');
    expect(geoInfo(geoInfoClient, api)).toBe('my.ru/123.123.123.123');
  });
});
