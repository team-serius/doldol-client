'use client';

import { ArrowSLineDown } from '@icons/ArrowSLineDown';
import { ArrowSLineUp } from '@icons/ArrowSLineUp';
import { Icon } from '../Icon';
import React from 'react';
import { Typography } from '../Typography';
import { useState } from 'react';

interface Props {
  question: string;
  answer: string;
}

export const Accordian: React.FC<Props> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <button onClick={onToggle} className="w-full flex gap-1 items-center justify-between mb-5">
        <Typography variant={'b20-bold'} className="text-start mx-4">
          {question}
        </Typography>
        <Icon
          icon={ArrowSLineDown}
          size={24}
          className={`mx-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`
        overflow-hidden 
        transition-all 
        duration-500 ease-in-out
        mx-4
        ${isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}
      `}
      >
        <div className="bg-primary text-left p-4">
          <Typography variant={'b16'}>{answer}</Typography>
        </div>
      </div>
    </div>
  );
};
