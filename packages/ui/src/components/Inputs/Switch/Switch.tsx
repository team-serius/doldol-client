'use client';

import React, { useRef } from 'react';
import styles from './Switch.module.scss';
import cx from 'clsx';

type Props = {
  name: string;
  checked: boolean;
  onToggle: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  label?: string;
  labelChecked?: string;
};

export const Switch = ({ checked, onToggle, disabled, label, labelChecked, name }: Props) => {
  const ref = useRef<any>(null);
  return (
    <div className={styles.box}>
      <div
        className={styles.switch}
        onClick={() => {
          if (ref !== null) {
            ref.current.click();
          }
        }}
      >
        <input name={name} type="checkbox" checked={checked} onChange={onToggle} disabled={disabled} ref={ref} />
        <span className={styles.slider}></span>
      </div>
      {label && (
        <span className={cx(styles.label, { [styles.checked]: checked })}>
          {checked && labelChecked ? labelChecked : label}
        </span>
      )}
    </div>
  );
};
