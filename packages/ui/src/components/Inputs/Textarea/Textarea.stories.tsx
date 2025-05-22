import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Textarea } from './Textarea';

export default {
  title: 'Inputs/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

export const Default = () => (
  <Textarea style={{ height: 80 }} maxLength={1000} rows={1} placeholder="댓글을 작성해주세요." />
);
