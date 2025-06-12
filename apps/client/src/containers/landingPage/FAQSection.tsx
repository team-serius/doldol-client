'use client';

import { Typography } from '@ui/components';
import { Accordian } from '@ui/components/Accordian';
import { FAQList } from '@/common/constants/faq';

export const FAQSection = () => {
  return (
    <div className="flex flex-col gap-10 items-center mt-[400px] text-center w-full">
      <Typography variant={'h32-bold'} className="mb-5">
        FAQ
      </Typography>
      {FAQList.map((m) => (
        <Accordian
          key={m.key}
          question={m.question}
          answer={m.answer}
        ></Accordian>
      ))}
    </div>
  );
};
