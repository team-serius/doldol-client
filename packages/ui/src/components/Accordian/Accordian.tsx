'use client';

import { ArrowSLineDown } from '@icons/ArrowSLineDown';
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
        <Typography variant={'b20-bold'} className="text-start">
          {question}
        </Typography>
        <Icon icon={ArrowSLineDown} size={24} />
      </button>

      {isOpen && (
        <div className="bg-primary">
          <Typography variant={'b16'}>{answer}</Typography>
        </div>
      )}
    </div>
  );
};
