"use client";

import { CommonLayout } from "@/components/layout/CommonLayout";
import { DetailFunctions } from "@/containers/landing/DetailFunction";
import ReviewSectionContainer from "@/containers/landing/ReviewSection";
import { IntroSection } from "@/containers/landing/IntroSection";
import { FAQSection } from "@/containers/landing/FAQSection";
import { withAuth } from "@/components/HOC/withAuth";

function Home() {
  return (
    <CommonLayout isLogoVisible>
      <IntroSection />

      <DetailFunctions />

      {/* 사용자 후기 섹션 */}

      <ReviewSectionContainer />

      <FAQSection />
    </CommonLayout>
  );
}

export default withAuth(Home, true);
