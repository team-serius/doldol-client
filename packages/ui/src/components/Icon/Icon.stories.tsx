import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Icon } from '../Icon';
import * as Icons from '../../../../1bee-icons/src/icons';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const IconList = () => {
  const icons = [{ name: 'LeftArrow', icon: Icons.Left }];

  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {React.Children.toArray(
        icons.map((icon) => <Icon size={20} color="green-brand" icon={icon.icon} />)
      )}
    </div>
  );
};
