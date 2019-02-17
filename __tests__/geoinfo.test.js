import GeoInfo from '../src/geo/GeoInfo';

describe('geoInfo', () => {
  it('test response', async () => {
    const httpClient = {
      get: () => ({
        data: {
          city: 'Moscow',
        },
      }),
    };
    const geoInfo = new GeoInfo(httpClient);
    const info = await geoInfo.getInfoByIp('');
    expect(info.city).toBe('Moscow');
  });
});
