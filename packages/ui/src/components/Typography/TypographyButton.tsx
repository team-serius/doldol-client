import React from 'react';
import { TypographyProps } from './Typography';
import { ColorPalette } from '@ui/theme';
import styles from './Typography.module.scss';
import cx from 'clsx';

type Props = {
  disabledColor?: ColorPalette;
} & TypographyProps &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const TypographyButton = ({
  variant,
  color = 'black',
  disabledColor = 'gray-5',
  inline = false,
  ellipsis = 0,
  className,
  children,
  disabled = false,
  ...props
}: Props) => {
  const classNames = cx(
    styles.typography,
    disabled ? styles[disabledColor] : styles[color],
    styles[variant],
    {
      [styles.lineEllipsis]: ellipsis === 1,
      [styles.multilineEllipsis]: ellipsis !== undefined && ellipsis > 1,
      [styles.clickable]: props.onClick && !disabled,
      [styles.inline]: inline,
    },
    className
  );

  return (
    <button
      style={{
        lineClamp: ellipsis,
        WebkitLineClamp: ellipsis,
      }}
      className={classNames}
      disabled={disabled}
      {...props}
    >
      <>{children}</>
    </button>
  );
};
