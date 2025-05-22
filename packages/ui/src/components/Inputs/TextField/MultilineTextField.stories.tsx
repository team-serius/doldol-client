import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MultilineTextField } from './MultilineTextField';

export default {
  title: 'Inputs/MultilineTextField',
  component: MultilineTextField,
} as ComponentMeta<typeof MultilineTextField>;

export const DefaultMultilineFieldWithMessage = () => {
  const [value, setValue] = React.useState('');

  return (
    <MultilineTextField
      name="email"
      label="이메일"
      placeholder="이메일 아이디를 입력하세요."
      helperMessage="이메일을 형식에 맞게 입력하세요."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const DefaultMultilineTextFieldWithLabel = () => {
  const [value, setValue] = React.useState('');

  return (
    <MultilineTextField
      name="email"
      label="이메일"
      placeholder="이메일 아이디를 입력하세요."
      helperMessage="이메일을 형식에 맞게 입력하세요."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      labelComponent={<div>이메일*</div>}
    />
  );
};

export const ErrorMultilineField = () => {
  const [value, setValue] = React.useState('test@tttt');

  return (
    <MultilineTextField
      name="email"
      label="이메일"
      errorMessage="이메일을 형식에 맞게 입력하세요."
      error
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const DisabledMultilineField = () => {
  const [value, setValue] = React.useState('test@tttt');

  return (
    <MultilineTextField
      name="email"
      label="이메일"
      disabled
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
