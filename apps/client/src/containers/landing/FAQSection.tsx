"use client";

import { Typography } from "@ui/components";
import { Accordian } from "@ui/components/Accordian";
import { FAQ_LIST } from "@/common/constants/landing/faq";

export const FAQSection = () => {
  return (
    <section className="flex flex-col gap-10 items-center text-center w-full">
      <Typography variant={"h32-bold"} className="mb-5">
        FAQ
      </Typography>
      {FAQ_LIST.map((faqItem) => (
        <Accordian
          key={faqItem.id}
          question={faqItem.question}
          answer={faqItem.answer}
        ></Accordian>
      ))}
    </section>
  );
};
