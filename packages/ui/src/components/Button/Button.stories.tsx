import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { ThumbUpFill } from '@icons/ThumbUpFill';
import { ThumbUpLine } from '@icons/ThumbUpLine';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonsTemplate: ComponentStory<typeof Button> = ({ variant, ...args }) => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Button variant="primary" {...args}>
      텍스트
    </Button>
    <Button variant="outlined" {...args}>
      텍스트
    </Button>
    <Button variant="borderless" {...args}>
      텍스트
    </Button>
    <Button variant="ghost" {...args}>
      텍스트
    </Button>
    <Button variant="secondary" {...args}>
      텍스트
    </Button>
  </div>
);
export const Buttons = ButtonsTemplate.bind({});

const TextTemplate: ComponentStory<typeof Button> = ({ variant = 'primary', size = 'small', ...args }) => (
  <Button variant={variant} size={size} {...args}>
    텍스트
  </Button>
);
export const TextButton = TextTemplate.bind({});

const IconBeforeTextTemplate: ComponentStory<typeof Button> = ({ variant = 'primary', size = 'small', ...args }) => (
  <Button icon={{ DefaultComponent: ThumbUpFill, placement: 'start' }} variant={variant} size={size} {...args}>
    텍스트
  </Button>
);

export const IconBeforeTextButton = IconBeforeTextTemplate.bind({});

const IconAfterTextTemplate: ComponentStory<typeof Button> = ({ variant = 'primary', size = 'small', ...args }) => (
  <Button
    icon={{
      placement: 'end',
      DefaultComponent: ThumbUpLine,
      ActiveComponent: ThumbUpFill,
      color: 'secondary-blue',
      // activeColor: "primary",
    }}
    variant={variant}
    size={size}
    {...args}
  >
    텍스트
  </Button>
);

export const IconAfterTextButton = IconAfterTextTemplate.bind({});

const IconOnlyTemplate: ComponentStory<typeof Button> = ({ variant = 'primary', size = 'small', ...args }) => (
  <Button
    icon={{
      placement: 'start',
      DefaultComponent: ThumbUpLine,
      ActiveComponent: ThumbUpFill,
    }}
    variant={variant}
    size={size}
    {...args}
  />
);

export const IconOnlyButton = IconOnlyTemplate.bind({});
