import React, { forwardRef, ReactNode } from 'react';
import { InputFieldProps, InputField } from '../InputField';
import styles from './TextField.module.scss';
import cx from 'clsx';
import { HelperText } from '../HelperText';
import { DefaultTextFieldProps } from './DefaultTextFieldProps';
import { Typography } from '@ui/components/Typography';

export type TextFieldProps = DefaultTextFieldProps &
  InputFieldProps & {
    gutterBottom?: boolean;
    helpComponent?: ReactNode; // field 에서 추가 컴포넌트가 필요한 경우 (필드 우측 상단에 표시)
    maxLength?: number; // 글자 수 제한
    isMaxLengthText?: boolean; // 글자 수 텍스트 표시 여부
  };

export const TextField = forwardRef(
  (
    {
      helperMessage,
      errorMessage,
      error,
      gutterBottom,
      labelComponent,
      helpComponent,
      maxLength,
      isMaxLengthText = maxLength ? true : false,
      classes,
      ...props
    }: TextFieldProps,
    ref: any
  ) => {
    return (
      <div className={cx(styles.container, styles.textfield, classes?.root)}>
        {(labelComponent || helpComponent) && (
          <Typography variant="b14-bold" color="gray-5" className={styles.label}>
            {labelComponent}
            {helpComponent}
            {isMaxLengthText && (
              <Typography variant="b12" color="gray-5" className={styles.limit} element="p">
                {props.value?.length} / {maxLength}
              </Typography>
            )}
          </Typography>
        )}
        <div className={cx({ [styles.gutterBottom]: gutterBottom })}>
          <InputField
            {...props}
            className={classes?.input}
            maxLength={maxLength}
            error={error}
            ref={ref}
          />
          {((error && errorMessage) || helperMessage) && (
            <HelperText
              placement="bottom"
              error={error}
              message={error && errorMessage ? errorMessage : helperMessage}
            />
          )}
        </div>
      </div>
    );
  }
);
