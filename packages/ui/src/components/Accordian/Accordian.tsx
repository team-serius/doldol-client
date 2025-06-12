'use client';

import React from 'react';
import { useState } from 'react';
import { ArrowSLineDown } from '@icons/ArrowSLineDown';
import { Typography } from '../Typography';
import { Icon } from '../Icon';

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
      <button onClick={onToggle} className="w-full flex justify-center gap-1 items-center">
        <Typography variant={'b18-bold'}>{question}</Typography>
        <Icon icon={ArrowSLineDown} size={24} />
      </button>

      {isOpen && (
        <div>
          <Typography variant={'b16'}>{answer}</Typography>
        </div>
      )}
    </div>
  );
};
