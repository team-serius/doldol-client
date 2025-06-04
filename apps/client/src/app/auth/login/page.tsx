'use client';

import { Logo } from '@/components/common/Logo';
import { OAuthButton } from '@/components/login/OAuthButton';
import { SocialType } from '@/enum/social.enum';
import { Button, Typography } from '@ui/components';
import Link from 'next/link';

// TODO: 최근 로그인 관련 내용 추가

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <Logo size="large" className="mt-10" />
      <Typography variant={'h24-bold'} className="text-center my-10">
        돌돌에 로그인하고
        <br />
        서로의 마음을 확인해보세요!
      </Typography>
      <div className="flex flex-col w-full gap-4">
        <Link href="/auth/login/id" className="w-full">
          <Button variant={'primary'} size={'large'} wide>
            아이디 로그인
          </Button>
        </Link>
        <OAuthButton social={SocialType.Kakao}></OAuthButton>
      </div>
      <div className="flex justify-center items-center mt-4">
        <Button variant={'secondary-ghost'} size={'small'}>
          아이디 찾기
        </Button>
        <Typography variant="b14" color="gray-2">
          |
        </Typography>
        <Button variant={'secondary-ghost'} size={'small'}>
          비밀번호 초기화
        </Button>
        <Typography variant="b14" color="gray-2">
          |
        </Typography>
        <Button variant={'secondary-ghost'} size={'small'}>
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
