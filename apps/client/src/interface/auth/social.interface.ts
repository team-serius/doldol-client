import { ColorPalette } from "@ui/theme";

export interface ButtonTheme {
  label: string;
  background: string;
  textColor: ColorPalette;
}

export interface SocialTheme {
  KAKAO: ButtonTheme;
  NAVER: ButtonTheme;
  GOOGLE: ButtonTheme;
}
