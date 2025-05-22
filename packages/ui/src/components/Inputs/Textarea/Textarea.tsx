import React, { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from 'react';
import cx from 'clsx';
import styles from './Textarea.module.scss';

export type TextareaFieldProps = { error?: boolean } & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const Textarea = forwardRef(
  ({ className, error, disabled, ...props }: TextareaFieldProps, ref: any) => (
    <textarea
      className={cx(
        styles.textarea,
        {
          [styles.error]: error,
          [styles.disabled]: disabled,
        },
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  )
);
