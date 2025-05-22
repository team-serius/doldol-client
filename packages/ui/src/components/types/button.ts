import { ColorPalette } from '@ui/theme';

/** 버튼 테마 */
export type Variant = 'primary' | 'secondary' | 'outlined' | 'ghost' | 'secondary-ghost' | 'error';

/** 버튼 padding, textSize 등 크기 */
export type Size = 'small' | 'medium' | 'large';

/** 버튼 생김새 */
export type Shape = 'circle' | 'rectangle';

/** 아이콘 위치 */
export type IconPlacement = 'start' | 'end';

/** 버튼 아이콘 Props 객체 (위치, 아이콘 컴포넌트, 색상) */
export interface IconProps {
  placement?: IconPlacement;
  DefaultComponent: React.FC<any>;
  color?: ColorPalette;
}
