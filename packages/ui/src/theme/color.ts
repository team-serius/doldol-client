export const ColorPalette = {
  /** Brand */
  'primary-brand': '#4EB5B5',
  'primary-light1': 'D1E0E3',
  'primary-dark1': '40A1A1',
  'primary-dark2': '#348D8D',

  /** Sub */
  'green-1': '#72C2A8',
  'purple-1': '#B7A4F5',
  'red-1': '#FC2E6C',
  'yellow-1': '#FFE48A',

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
