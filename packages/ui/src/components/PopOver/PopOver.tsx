import React, { FC } from 'react';

import styles from './popOver.module.scss';
import cx from 'clsx';

interface Props {
  className?: string;
  children: React.ReactNode;
  description: string;
  from?: 'right' | 'left';
}

const PopOver: FC<Props> = ({ className, children, description, from = 'right' }) => {
  return (
    <div className={cx(styles.container, className)}>
      {children}
      <div className={cx(styles.popOver, styles[from])}>{description}</div>
    </div>
  );
};

export default PopOver;
