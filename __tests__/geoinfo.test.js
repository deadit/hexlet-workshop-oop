import GeoInfo from '../src/GeoInfo';

describe('geoInfo', () => {
  it('geoInfo', () => {
    const httpClient = () => ({
      data: {
        city: 'Moscow',
      },
    });

    const link = 'my.ru';
    const geoInfo = new GeoInfo(httpClient, link);
    expect(geoInfo.getInfoByIp('').data.city).toBe('Moscow');
  });
});
