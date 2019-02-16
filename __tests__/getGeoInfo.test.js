import GeoInfo from '../src/GeoInfo';

describe('geoInfo', () => {
  it('geoInfo', () => {
    const geoInfoClient = link => link;
    const link = 'my.ru/';
    expect(new GeoInfo(geoInfoClient, link).get('')).toBe('my.ru');
  });
});
