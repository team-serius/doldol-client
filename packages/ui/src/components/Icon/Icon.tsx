import React from 'react';
import { ColorPalette } from '@ui/theme/color';

export interface Props {
  id?: string;
  icon: React.FC<any>;
  size?: string | number;
  color?: ColorPalette | 'currentColor';
  clickable?: boolean;
  className?: string;
  inline?: boolean;
  onClick?: React.MouseEventHandler<any>;
}

export const Icon = ({
  id,
  icon: Component,
  size = 24,
  color = 'currentColor',
  onClick,
  clickable = false,
  inline = false,
  ...props
}: Props) => (
  <Component
    id={id}
    size={size}
    color={color === 'currentColor' ? color : ColorPalette[color]}
    style={{
      cursor: onClick || clickable ? 'pointer' : undefined,
      display: inline ? 'inline' : 'block',
    }}
    onClick={onClick}
    {...props}
  />
);
