import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './Typography';

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const ShortTemplate: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>텍스트</Typography>
);

export const ShortTypography = ShortTemplate.bind({});

const LongTemplate: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>
    텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
    텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
    텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
    텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
    텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
    텍스트 텍스트{' '}
  </Typography>
);

export const LongTypography = LongTemplate.bind({});

const LineBreakTemplate: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>{`안녕 \n나는 break야 하이하이 \n ㅎㅎㅎㅎ \n ㅋㅎㅋㅎ`}</Typography>
);

export const LineBreakTypography = LineBreakTemplate.bind({});
