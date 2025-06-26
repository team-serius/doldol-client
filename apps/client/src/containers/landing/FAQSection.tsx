"use client";

import { Accordian } from "@ui/components/Accordian";
import { FAQ_LIST } from "@/common/constants/landing/faq";
import { Typography } from "@ui/components";

export const FAQSection = () => {
  return (
    <section className="flex flex-col gap-10 w-full mb-40">
      <div className="relative flex justify-center mb-5">
        <img
          src="/assets/images/sh.png"
          alt="FAQ Icon"
          className="w-40 absolute left-0 top-1/2 transform -translate-y-1/2"
        />
        <Typography variant={"h32-bold"}>FAQ</Typography>
      </div>

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
