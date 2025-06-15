import React, { CSSProperties, FC } from 'react';

import styles from './chip.module.scss';
import cx from 'clsx';

interface Props {
  src?: string;
  onClick?: () => void;
  icon?: {
    DefaultComponent: React.FC<any>;
  };
  classes?: {
    image?: string;
    button?: string;
  };
  size?: number;
  bgColor?: string;
}

const Chip: FC<Props> = ({ src, onClick, classes, size = 48, bgColor }) => {
  const style = {
    '--size': size && size + 'px',
    backgroundColor: bgColor,
  } as CSSProperties;

  return (
    <div className={styles.container}>
      <button
        type="button"
        aria-label="profile-chip"
        className={cx(styles.profileContainer, classes?.button)}
        onClick={onClick}
      >
        <div className={cx(styles.profileImage, classes?.image)} style={style}>
          {src && <img src={src} alt="profile" className={styles.image} />}
        </div>
      </button>
    </div>
  );
};

export default Chip;
