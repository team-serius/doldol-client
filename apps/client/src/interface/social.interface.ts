import { ColorPalette } from '@ui/theme';

export interface ButtonTheme {
  label: string;
  background: string;
  textColor: ColorPalette;
}

export interface SocialTheme {
  kakao: ButtonTheme;
  naver: ButtonTheme;
  google: ButtonTheme;
}
