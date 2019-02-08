import getGeoInfo from '../src';

test('getGeoInfo', async () => {
  const result = await getGeoInfo('123.123.23.23');
  expect(result).toBe('Beijing');
});
