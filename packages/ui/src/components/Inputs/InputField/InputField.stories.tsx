import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { InputField } from './InputField';
import { GithubLine } from '@icons/GithubLine';
import { Button } from '@ui/Button';

export default {
  title: 'Inputs/InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>;

export const DefaultInputField = () => {
  const [value, setValue] = React.useState('test@tttt');

  return (
    <InputField
      name="email"
      placeholder="이메일 아이디를 입력하세요."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const DisabledInputField = () => {
  const [value, setValue] = React.useState('test@tttt');

  return (
    <InputField
      name="email"
      label="이메일"
      placeholder="이메일 아이디를 입력하세요."
      value={value}
      disabled
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const IconAdornmentInputField = () => {
  const [value, setValue] = React.useState('test@tttt');

  return (
    <InputField
      name="email"
      placeholder="이메일 아이디를 입력하세요."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      startIcon={GithubLine}
      endIcon={GithubLine}
    />
  );
};

export const EndButtonInputField = () => {
  const [value, setValue] = React.useState('test@tttt');

  return (
    <InputField
      name="email"
      placeholder="이메일 아이디를 입력하세요."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      endAdornment={
        <Button size="small" variant="primary">
          클릭
        </Button>
      }
    />
  );
};
