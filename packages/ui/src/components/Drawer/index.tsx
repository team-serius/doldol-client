import React, { MouseEventHandler, ReactNode } from 'react';

import ModalPortal from './Portal';

import styles from './baseDrawer.module.scss';

interface Props {
  title?: string;
  children: ReactNode;
  isOpen: boolean;
  isOutsideClose?: boolean;
  onClose?: MouseEventHandler;
}

export const Drawer: React.FC<Props> = ({ children, isOpen, isOutsideClose = true, onClose }) => {
  return (
    <ModalPortal isOpen={isOpen} onClose={isOutsideClose ? onClose : undefined}>
      <main className={styles.container}>{children}</main>
    </ModalPortal>
  );
};
