import React from 'react';
import TextareaAutosize, { TextareaAutosizeProps } from '@mui/material/TextareaAutosize';
import styles from './TextareaAutoresize.module.scss';
import cx from 'clsx';

export const TextareaAutoresize = (props: TextareaAutosizeProps) => {
  return <TextareaAutosize {...props} className={cx(styles.textarea, props.className)} />;
};
