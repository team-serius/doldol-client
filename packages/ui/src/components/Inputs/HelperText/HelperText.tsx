import React from 'react';
import cx from 'clsx';
import styles from './HelperText.module.scss';
import { Typography } from '@ui/components/Typography';

type Props = {
  placement: 'bottom' | 'top-right';
  message?: string;
  error?: boolean;
  className?: string;
};

export const HelperText = ({ placement, message = '', className, error = false }: Props) => {
  return (
    <Typography
      variant="b12"
      color={error ? 'red-1' : 'green-brand'}
      className={cx(styles.text, styles[placement], className)}
    >
      <span> • </span>
      {message}
    </Typography>
  );
};
