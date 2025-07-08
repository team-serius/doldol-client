"use client";

import { CommonLayout } from "@/components/layout/CommonLayout";
import { DetailFunctions } from "@/containers/landing/DetailFunction";
import { FAQSection } from "@/containers/landing/FAQSection";
import { IntroSection } from "@/containers/landing/IntroSection";
import ReviewSectionContainer from "@/containers/landing/ReviewSection";
import { withAuth } from "@/components/HOC/withAuth";

function Home() {
  return (
    <CommonLayout isBackButton={false} isFullWidth>
      <IntroSection />
      <DetailFunctions />
      <ReviewSectionContainer />
      <FAQSection />
    </CommonLayout>
  );
}

export default withAuth(Home, true);
