import geoInfo from '../src/geoInfo';
import getLink from '../src/getLink';

describe('geoInfo', () => {
  it('geoInfo', () => {
    const geoInfoClient = link => link;
    const api = getLink('my.ru/', '123.123.123.123');
    expect(geoInfo(geoInfoClient, api)).toBe('my.ru/123.123.123.123');
  });
});
