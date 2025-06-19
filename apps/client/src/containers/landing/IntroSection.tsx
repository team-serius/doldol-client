"use client";

import "../../../../../packages/ui/src/scss/mixins/_transition.scss";

import { Button, Typography } from "@ui/components";

import Image from "next/image";
import Link from "next/link";
import useMe from "@/hooks/useMe";

export const IntroSection = () => {
  const { user } = useMe();

  return (
    <section className="flex flex-col items-center mt-12 mb-48">
      <div className="rise-in flex flex-col items-center mt-1 text-center mb-24">
        <Typography variant={"h24-bold"}>
          모이면 완성되는 마음의 종이,
        </Typography>
        <Typography variant={"h32-bold"}>돌돌</Typography>
      </div>
      <div className="animate-bounce w-[132px] h-[117px]">
        <Image
          src="/assets/logos/symbol-incase.png"
          alt="Incase Logo"
          fill
          sizes="100vw"
        ></Image>
      </div>

      <Link href={user ? "/my-page" : "/auth/login"} className="block">
        <Button
          variant={"secondary"}
          size={"large"}
          shape="circle"
          className="mt-10"
        >
          지금 시작해보기
        </Button>
      </Link>

      <div className="grid place-items-center rounded-lg p-4 text-center mt-10">
        <div className="flex justify-center">
          <Typography variant="b14">
            <strong>돌돌</strong>은 모두가 함께 만드는
            <strong>온라인 롤링페이퍼</strong>입니다.
            <br /> <strong>생일, 졸업, 이별, 감사</strong>의 순간을 따뜻하게
            기억하세요.
          </Typography>
        </div>
      </div>
    </section>
  );
};
