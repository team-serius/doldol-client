import React, { CSSProperties, FC } from 'react';

import styles from './chip.module.scss';
import { Icon } from '../Icon';
import { ArrowSLineDown } from '@icons/ArrowSLineDown';
import { UserProfile } from '@icons/UserProfile';
import cx from 'clsx';

interface Props {
  src?: string;
  onClick?: () => void;
  icon?: {
    DefaultComponent: React.FC<any>;
  };
  isOpen?: boolean;
  children?: React.ReactNode;
  classes?: {
    image?: string;
    button?: string;
  };
  size?: number;
}

const Chip: FC<Props> = ({
  src,
  onClick,
  isOpen,
  children,
  icon = {
    DefaultComponent: UserProfile,
  },
  classes,
  size = 48,
}) => {
  const style = {
    '--size': size && size + 'px',
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
          {src ? (
            <img src={src} alt="profile" className={styles.image} />
          ) : (
            <Icon
              icon={icon.DefaultComponent}
              size={size! / 2}
              color="white"
              className={styles.defaultImage}
            />
          )}
        </div>
        {/* 열리는 Menu가 존재하는 경우에만 옆에 icon이 렌더링 되도록 수정 */}
        {children! && (
          <Icon icon={ArrowSLineDown} className={cx(styles.icon, isOpen && styles.isOpen)} />
        )}
      </button>
      {children}
    </div>
  );
};

export default Chip;
