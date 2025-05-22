export const ColorPalette = {
  /** Green */
  'green-light1': '#5CCA52',
  'green-brand': '#00CD3C',
  'green-dark1': '#5AA470',
  'green-dark2': '#54765E',

  /** Blue */
  'blue-1': '#55B0F0',
  'blue-2': '#30DCE8',
  'blue-3': '#D9EBFF',
  'blue-4': '#0174BE',

  /** Red */
  'red-1': '#FC2E6C',

  /** Purple */
  'purple-1': '#9167FD',

  /** Yellow */
  'yellow-1': '#FFED01',
  'yellow-2': '#FBB03B',

  /** Gray Scale */
  black: '#000000',
  'gray-1': '#454F5D',
  'gray-2': '#838A9A',
  'gray-3': '#D9D9D9',
  'gray-4': '#EAEDEF',
  'gray-5': '#F5F6F7',
  white: '#FFFFFF',
} as const;

export type ColorPalette = keyof typeof ColorPalette;
