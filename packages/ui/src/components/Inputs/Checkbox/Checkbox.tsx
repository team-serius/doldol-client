import React, { ComponentProps, forwardRef, ReactNode, useEffect, useRef } from 'react';
import styles from './Checkbox.module.scss';
import { Icon } from '../../Icon';
import { ColorPalette } from '@ui/theme';
import cx from 'clsx';
import { CheckFill } from '@icons/CheckFill';

interface Props extends Omit<ComponentProps<'input'>, 'onToggle'> {
  name: string;
  label?: string | ReactNode | ReactNode[];
  color?: ColorPalette;
  activeColor?: ColorPalette;
  onToggle?: React.ChangeEventHandler<HTMLInputElement>;
  classes?: { root?: string; input?: string; text?: string };
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ name, label, onToggle, classes, ...props }, ref) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref && typeof ref === 'function') ref(inputEl.current);
    else if (ref) (ref as any).current = inputEl.current;
  }, [ref]);

  return (
    <div
      className={cx(styles.checkbox, classes?.root, props.disabled && styles.disabled)}
      onClick={(e) => {
        e.stopPropagation();
        inputEl.current?.click();
      }}
    >
      <input
        type="checkbox"
        ref={inputEl}
        name={name}
        checked={props.checked}
        onChange={onToggle || props.onChange}
        className={classes?.input}
        disabled={props.disabled}
      />
      <Icon
        className={styles.checkboxIcon}
        icon={CheckFill}
        size={24}
        color={props.disabled ? 'gray-5' : props.checked ? 'primary-brand' : 'gray-3'}
      />
      <p className={cx(classes?.text, props.disabled && 'text-gray-4')}>{label}</p>
    </div>
  );
});
