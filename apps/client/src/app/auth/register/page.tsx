'use client';

import React from 'react';

import CommonRegisterContainer from '@/containers/auth/register/CommonRegister';
import dynamic from 'next/dynamic';

const CommonRegister = () => {
  dynamic(() => import('@/containers/auth/register/CommonRegister'), {
    ssr: false,
  });
  return <CommonRegisterContainer />;
};

const Content = {
  register: dynamic(() => import('@/containers/auth/register/CommonRegister'), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  // TODO: 컨테이너 분기 추가
  // checkCode:
  // complete:
};

const AuthRegisterPage: React.FC = () => {
  //유저 정보 저장
  const [test, setTest] = React.useState('input');

  return test === 'input' && CommonRegister(), test === '' && CommonRegister(), test === 'input' && CommonRegister();
};

export default AuthRegisterPage;
