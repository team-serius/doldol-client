import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { PasswordField } from './PasswordField';

export default {
  title: 'Inputs/PasswordField',
  component: PasswordField,
} as ComponentMeta<typeof PasswordField>;

export const DefaultPasswordField = () => {
  const [value, setValue] = React.useState('');

  return (
    <PasswordField
      name="password"
      label="비밀번호"
      placeholder="비밀번호를 형식에 맞게 입력하세요."
      helperMessage="비밀번호를 형식에 맞게 입력하세요."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const ErrorPasswordField = () => {
  const [value, setValue] = React.useState('test@tttt');

  return (
    <PasswordField
      name="password"
      label="비밀번호"
      helperMessage="비밀번호를 형식에 맞게 입력하세요."
      error
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const DisabledPasswordField = () => {
  const [value, setValue] = React.useState('test@tttt');

  return (
    <PasswordField
      name="email"
      label="비밀번호"
      helperMessage="비밀번호를 형식에 맞게 입력하세요."
      disabled
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
