import React from 'react';
import dynamic from 'next/dynamic';
import styles from './pagination.module.scss';
import cx from 'clsx';

export interface Props {
  items: React.ReactNode;
  total: number;
  page: number;
  limit: number;
  setPage: (page: number) => void;
}

export const Pagination = dynamic(() => import('./Pagination'), {
  loading: () => (
    <div className={styles.skeletonContainer}>
      {React.Children.map(Array(20).fill(0), (_, index) => (
        <div className={cx(styles.skeleton, styles.pulse)} key={index} />
      ))}
    </div>
  ),
  ssr: false,
});
