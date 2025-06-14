"use client";

import { Button, Typography } from "@ui/components";
import { CommonLayout } from "@/components/layout/CommonLayout";
import Link from "next/link";
import { DetailFunctions } from "@/containers/landing/DetailFunction";
import { Review } from "@/interface/landing/review.interface";
import ReviewSectionContainer from "@/containers/landing/ReviewSection";
import Image from "next/image";
import { Accordian } from "@ui/components/Accordian";
import { IntroSection } from "@/containers/landing/IntroSection";
import { FAQSection } from "@/containers/landing/FAQSection";

function Home() {
  return (
    <CommonLayout isLogoVisible>
      <IntroSection />

      <DetailFunctions />

      <Typography variant="h24-bold">돌돌's tory</Typography>
      <ReviewSectionContainer />

      <FAQSection />

      {/* <Typography variant="h36-bold">메인 페이지</Typography>
      <div className="flex flex-col gap-4 mt-8">
        <Typography variant="h24-bold">로그인 전용 페이지</Typography>
        <Link href={'/auth/login'}>
          <Button variant={'primary'} size={'small'}>
            로그인 페이지 가기
          </Button>
        </Link>
        <Link href={'/auth/register/common'}>
          <Button variant={'primary'} size={'small'}>
            회원가입
          </Button>
        </Link>
        {/* <Typography variant="h24-bold" className="border-t border-gray-2 mt-8">
          로그인 전용 페이지
        </Typography>
        <Link href={'/paper'}>
          <Button variant={'primary'} size={'small'}>
            롤링페이퍼
          </Button>
        </Link>
        <Link href={'/auth/login'}>
          <Button variant={'primary'} size={'small'}>
            로그인 페이지 가기
          </Button>
        </Link>
        <Link href={'/auth/login'}>
          <Button variant={'primary'} size={'small'}>
            로그인 페이지 가기
          </Button>
        </Link>
        <Link href={'/auth/login'}>
          <Button variant={'primary'} size={'small'}>
            로그인 페이지 가기
          </Button>
        </Link> */}
    </CommonLayout>
  );
}

export default Home;
