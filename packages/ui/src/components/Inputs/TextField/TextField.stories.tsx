import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { TextField } from './TextField';
import { Checkbox } from '../Checkbox';

export default {
  title: 'Inputs/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const DefaultTextFieldWithMessage = () => {
  const [value, setValue] = React.useState('');

  return (
    <TextField
      name="email"
      label="이메일"
      placeholder="이메일 아이디를 입력하세요."
      helperMessage="이메일을 형식에 맞게 입력하세요."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      gutterBottom
    />
  );
};

export const DefaultTextFieldWithLabel = () => {
  const [value, setValue] = React.useState('');

  return (
    <TextField
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

export const DefaultTextFieldWithLabelHelp = () => {
  const [value, setValue] = React.useState('');

  return (
    <TextField
      name="email"
      label="이메일"
      placeholder="이메일 아이디를 입력하세요."
      helperMessage="이메일을 형식에 맞게 입력하세요."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      labelComponent={<div>이메일*</div>}
      helpComponent={<Checkbox margin={4} checked name="" label="테스트" onToggle={() => {}} />}
    />
  );
};

export const ErrorTextField = () => {
  const [value, setValue] = React.useState('test@tttt');

  return (
    <TextField
      name="email"
      label="이메일"
      errorMessage="이메일을 형식에 맞게 입력하세요."
      error
      value={value}
      onChange={(e) => setValue(e.target.value)}
      gutterBottom
    />
  );
};

export const DisabledTextField = () => {
  const [value, setValue] = React.useState('test@tttt');

  return (
    <TextField
      name="email"
      label="이메일"
      disabled
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
