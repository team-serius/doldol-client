import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { TextareaAutoresize } from './TextareaAutoresize';

export default {
  title: 'Inputs/TextareaAutoresize',
  component: TextareaAutoresize,
} as ComponentMeta<typeof TextareaAutoresize>;

export const Default = () => <TextareaAutoresize minRows={1} placeholder="댓글을 작성해주세요." />;
