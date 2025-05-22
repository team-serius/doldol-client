import React, { FC } from 'react';

import styles from './item.module.scss';

interface Props {
  label: string;
  onClick?: () => void;
}

const MenuItem: FC<Props> = ({ label, onClick }) => {
  return (
    <li>
      <button aria-label="list item button" className={styles.styledButton} onClick={onClick}>
        {label}
      </button>
    </li>
  );
};

export default MenuItem;
