'use client';

import { Button, Typography } from '@ui/components';
import { CommonLayout } from '@/components/layout/CommonLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <CommonLayout isLogoVisible>
      <Typography variant="h36-bold">메인 페이지</Typography>
      <div className="flex flex-col gap-4 mt-8">
        <Typography variant="h24-bold">로그인 X 전용 페이지</Typography>
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
        <Typography variant="h24-bold" className="border-t border-gray-2 mt-8">
          로그인 전용 페이지
        </Typography>
        <Link href={'/auth/login'}>
          <Button variant={'primary'} size={'small'}>
            로그인
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
        </Link>
      </div>
    </CommonLayout>
  );
}
