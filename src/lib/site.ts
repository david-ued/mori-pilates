export const SITE_URL = 'https://moripilates.com'; // TODO: 上線前替換為正式網域

export const LINE_URL = 'https://line.me/R/ti/p/@326euwbd';

export const BRAND = {
  name: 'Mori Pilates',
  tagline: 'Move. Observe. Reconnect. Inward.',
  addressZh: '106臺北市大安區金山南路二段2號8樓',
  addressEn: '8F., No. 2, Sec. 2, Jinshan S. Rd., Da’an Dist., Taipei City 106, Taiwan',
  addressJa: '台湾台北市大安区金山南路二段2号8階',
  // 金山南路二段 x 信義路二段口(近捷運東門站)
  geo: { lat: 25.033976, lng: 121.527228 },
} as const;

export const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('106台北市大安區金山南路二段2號');

export const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('106台北市大安區金山南路二段2號8樓 Mori Pilates') +
  '&z=17&output=embed';
