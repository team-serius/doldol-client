import React, { forwardRef, ReactNode } from 'react';
import styles from './InputField.module.scss';
import cx from 'clsx';
import { IconInputAdornment } from '../IconInputAdornment';

export type InputFieldProps = {
  name: string;
  value?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  startIcon?: React.FC<any>; // 아이콘
  startAdornment?: ReactNode;
  endIcon?: React.FC<any>; // 아이콘
  endAdornment?: ReactNode; // 버튼
  error?: boolean;
  type?: 'text' | 'password' | 'number';
  className?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

/** 라벨이 없는 Input Field */
export const InputField = forwardRef(
  (
    {
      label,
      disabled,
      error,
      type,
      startIcon,
      startAdornment,
      endIcon,
      endAdornment,
      required = false,
      placeholder = '입력',
      ...props
    }: InputFieldProps,
    ref: any
  ) => (
    <label
      className={cx(styles.field, {
        [styles.error]: error,
        [styles.disabled]: disabled,
        [styles.startAdornment]: startIcon,
        [styles.endAdornment]: endAdornment || endIcon,
      })}
    >
      {startIcon && <IconInputAdornment icon={startIcon} />}
      {startAdornment}
      <input
        className={cx(styles.input, props.className)}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
      {endIcon && <IconInputAdornment icon={endIcon} />}
      {endAdornment}
    </label>
  )
);
