import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const DefaultCheckbox = () => {
  const [checked, setChecked] = React.useState(false);

  const onToggle = () => {
    setChecked(!checked);
  };

  return <Checkbox name="" checked={checked} onToggle={onToggle} label="기본 라벨" />;
};
