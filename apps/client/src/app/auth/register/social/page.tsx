'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import { RegisterForm } from '@/interface/auth/register.interface';

const Content = {
  register: dynamic(() => import('@/containers/auth/register/CommonRegister'), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  // TODO: 컨테이너 분기 추가
  // checkCode:
  // complete:
};

const AuthSocialRegisterPage: React.FC = () => {
  const [test, setTest] = React.useState('input');

  return (
    <>
      {/* FIXME: 수정 */}
      <Content.register onNext={() => console.log('Next step')} />
      <input value={test} onChange={(e) => setTest(e.target.value)} />
      <p>Current input value: {test}</p>
    </>
  );
};

export default AuthSocialRegisterPage;
