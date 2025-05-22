import React, { FC } from 'react';

import styles from './menu.module.scss';

interface Props {
  children: React.ReactNode;
  isOpen?: boolean;
}

const Menu: FC<Props> = ({ isOpen, children }) => {
  return isOpen && <ul className={styles.container}>{children}</ul>;
};

export default Menu;
