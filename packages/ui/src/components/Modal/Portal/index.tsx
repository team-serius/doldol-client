'use client';

import React, { MouseEventHandler, ReactNode, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './modalPortal.module.scss';

interface Props {
  isOpen: boolean;
  onClose?: MouseEventHandler;
  children: ReactNode;
}

const ModalPortal = ({ isOpen, onClose, children }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);

    let element = document.getElementById('modal-root');

    if (!element) {
      element = document.createElement('div');
      element.setAttribute('id', 'modal-root');
      document.body.appendChild(element);
    }
    setPortalRoot(element);

    return () => {
      if (element && !document.getElementById('modal-root')) {
        element.remove();
      }
    };
  }, []);

  if (!hasMounted || !portalRoot) {
    return <></>;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <CSSTransition
          in={isOpen}
          timeout={{ enter: 100, exit: 120 }}
          classNames={{
            enter: styles.modalEnter,
            exit: styles.modalExit,
          }}
          unmountOnExit
          nodeRef={nodeRef}
        >
          <aside className={styles.container} ref={nodeRef}>
            <div className={styles.overlay} onClick={onClose} />
            <div className={styles.wrapper}>{children}</div>
          </aside>
        </CSSTransition>,
        portalRoot
      )}
    </>
  );
};

export default ModalPortal;
