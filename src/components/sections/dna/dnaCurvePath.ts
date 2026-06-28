/**
 * Gentle S-curve between DNA sets: right (set 1) → left (set 2) → right (set 3).
 * Control points stay close to the stroke so it stays smooth when scaled.
 */
export const DNA_CURVE_PATH = [
  'M 780 380',
  'Q 860 400 880 520',
  'Q 900 640 840 760',
  'Q 780 880 520 940',
  'Q 260 1000 160 1120',
  'Q 120 1240 180 1360',
  'Q 240 1480 500 1560',
  'Q 760 1640 860 1760',
  'Q 920 1880 700 1980',
].join(' ')
