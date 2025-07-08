"use client";

import { CommonLayout } from "@/components/layout/CommonLayout";
import { DetailFunctions } from "@/containers/landing/DetailFunction";
import ReviewSectionContainer from "@/containers/landing/ReviewSection";
import { IntroSection } from "@/containers/landing/IntroSection";
import { FAQSection } from "@/containers/landing/FAQSection";
import { withAuth } from "@/components/HOC/withAuth";
import Image from "next/image";
import { Typography } from "@ui/components";

function Home() {
  return (
    <CommonLayout isLogoVisible isFullWidth>
      {/* <IntroSection />
      <DetailFunctions />
      <ReviewSectionContainer />
      <FAQSection /> */}
      <div className="flex flex-col items-center justify-center mt-10">
        <Image
          src="/assets/images/empty.png"
          alt="빈 롤링페이퍼 이미지"
          width={80}
          height={80}
          className="mb-4"
        />
        <Typography variant={"b20-medium"} className="mt-6 text-center">
          긴급 업데이트 중이에요!
          <br />
          조금만 기다려달라 돌돌 ㅠㅠ
          <br />
          예상 완료 시각 : 17:00
        </Typography>
      </div>
    </CommonLayout>
  );
}

export default withAuth(Home, true);
