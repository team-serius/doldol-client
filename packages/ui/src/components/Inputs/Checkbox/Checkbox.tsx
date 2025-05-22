import React, { ComponentProps, forwardRef, ReactNode, useRef } from 'react';
import styles from './Checkbox.module.scss';
import { Icon } from '../../Icon';
import { ColorPalette } from '@ui/theme';
import cx from 'clsx';
import { CheckFill } from '@icons/CheckFill';

interface Props extends ComponentProps<'input'> {
  name: string;
  label?: string | ReactNode | ReactNode[];
  color?: ColorPalette;
  activeColor?: ColorPalette;
  onToggle?: React.ChangeEventHandler<HTMLInputElement>;
  classes?: { root?: string; input?: string; text?: string };
}

export const Checkbox = forwardRef(
  ({ name, label, onToggle, classes, ...props }: Props, ref: any) => {
    const inputEl = useRef(ref ? ref.current : null);

    return (
      <div
        className={cx(styles.checkbox, classes?.root, props.disabled && styles.disabled)}
        onClick={(e) => {
          e.stopPropagation();
          inputEl.current.click();
        }}
      >
        <input
          type="checkbox"
          checked={props.checked}
          ref={inputEl}
          name={name}
          onChange={onToggle || props.onChange}
          className={classes?.input}
          disabled={props.disabled}
        />
        <Icon
          className={styles.checkboxIcon}
          icon={CheckFill}
          size={24}
          color={props.disabled ? 'gray-5' : props.checked ? 'green-brand' : 'gray-3'}
        />
        <p className={cx(classes?.text, props.disabled && 'text-gray-4')}>{label}</p>
      </div>
    );
  }
);
