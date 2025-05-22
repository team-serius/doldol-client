import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

// export const Default = () => <ProgressBar percentage={20} />;
const ProgressBarTemplate: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Default = ProgressBarTemplate.bind({});
