import React, { JSX, ReactNode } from 'react';
import cx from 'clsx';
import styles from './Typography.module.scss';
import { ColorPalette, TypographyVariant } from '@ui/theme';

export type TypographyProps = {
  variant: TypographyVariant;
  children: ReactNode | string | ReactNode[];
  color?: ColorPalette;
  className?: string;
  element?: keyof JSX.IntrinsicElements;
  inline?: boolean;
  ellipsis?: number;
  onClick?: React.MouseEventHandler;
};

export const Typography = ({
  variant,
  color = 'black',
  element: Element = 'p',
  inline = false,
  ellipsis = 0,
  className,
  children,
  ...props
}: TypographyProps) => {
  const classNames = cx(
    styles.typography,
    styles[color],
    styles[variant],
    {
      [styles.lineEllipsis]: ellipsis === 1,
      [styles.multilineEllipsis]: ellipsis !== undefined && ellipsis > 1,
      [styles.clickable]: props.onClick,
      [styles.inline]: inline,
    },
    className,
  );

  return (
    <Element
      style={{
        // color: ColorPalette[color],
        lineClamp: ellipsis,
        WebkitLineClamp: ellipsis,
      }}
      className={classNames}
      {...props}
    >
      <>{children}</>
    </Element>
  );
};
