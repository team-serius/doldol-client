import React, { useEffect } from 'react';
import styles from './ProgressBar.module.scss';

type Props = {
  percentage: number;
};

//! v1.7.0에서 삭제?
export const ProgressBar = ({ percentage }: Props) => {
  const [progress, setProgress] = React.useState<number>(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <div className={styles.bar}>
      <div className={styles.progress} style={{ width: `${progress}%` }}></div>
    </div>
  );
};
