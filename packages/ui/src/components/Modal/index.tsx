import React, { MouseEventHandler, ReactNode } from 'react';

import ModalPortal from './Portal';

import styles from './baseModal.module.scss';
import { Icon } from '../Icon';
import { CloseLine } from '@icons/CloseLine';

interface Props {
  title?: string;
  children: ReactNode;
  isOpen: boolean;
  isOutsideClose?: boolean;
  onClose?: MouseEventHandler;
}

export const Modal: React.FC<Props> = ({
  title,
  children,
  isOpen,
  isOutsideClose = true,
  onClose,
}) => {
  return (
    <ModalPortal isOpen={isOpen} onClose={isOutsideClose ? onClose : undefined}>
      <header className={styles.header}>
        <Icon icon={CloseLine} className={styles.icon} size={16} onClick={onClose} />
        {title}
      </header>
      <main className={styles.container}>{children}</main>
    </ModalPortal>
  );
};
