import React, { useRef } from 'react';
import { ComponentMeta } from '@storybook/react';
import { Switch } from './Switch';

export default {
  title: 'Inputs/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const DefaultSwitch = () => {
  const [checked, setChecked] = React.useState(false);
  const onToggle = (event: any) => {
    setChecked(!checked);
  };

  return (
    <Switch
      name="label"
      checked={checked}
      onToggle={onToggle}
      label="기본 라벨"
      labelChecked="체크했을 때"
    />
  );
};

export const DisabledSwitch = () => {
  const [checked, setChecked] = React.useState(false);

  const onToggle = () => {
    setChecked(!checked);
  };

  return (
    <Switch
      name="label"
      disabled
      checked={false}
      onToggle={onToggle}
      label="기본 라벨"
      labelChecked="체크했을 때"
    />
  );
};
