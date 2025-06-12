'use client';

import { Button, Typography } from '@ui/components';
import Link from 'next/link';
import Image from 'next/image';
import '../../../../../packages/ui/src/scss/mixins/_transition.scss';

export const IntroSection = () => {
  return (
    <section className="flex flex-col items-center mt-12">
      <div className="animate-bounce w-[132px] h-[117px]">
        <Image
          src="/assets/logos/symbol-incase.png"
          alt="Incase Logo"
          fill
          sizes="100vw"
        ></Image>
      </div>
      <div className="rise-in flex flex-col items-center mt-5 text-center">
        <Typography variant={'h24-bold'}>
          모이면 완성되는 마음의 종이,
        </Typography>
        <Typography variant={'h32-bold'}>돌돌</Typography>
      </div>
      <div className="grid place-items-center bg-gray-2 shadow-xl rounded-lg p-4 text-white text-center mt-10">
        <div className="flex justify-center">
          <Typography variant={'b14-bold'}>돌돌</Typography>
          <Typography variant={'b14-medium'}>은 모두가 함께 만드는</Typography>
          <Typography variant="b14-medium">&nbsp;</Typography>
          <Typography variant={'b14-bold'}>온라인 롤링페이퍼</Typography>
          <Typography variant={'b14-medium'}>입니다.</Typography>
        </div>
        <div className="flex justify-center">
          <Typography variant={'b14-bold'}>생일, 졸업, 이별, 감사</Typography>
          <Typography variant={'b14-medium'}>
            의 순간을 따뜻하게 기억하세요.
          </Typography>
        </div>
      </div>
      <Link href={'/auth/login'} className="block">
        <Button
          variant={'secondary'}
          size={'large'}
          shape="circle"
          className="mt-10"
        >
          지금 시작해보기
        </Button>
      </Link>
    </section>
  );
};
