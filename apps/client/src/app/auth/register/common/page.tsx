'use client';

import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { RegisterForm } from '@/interface/auth/register.interface';

type RegisterStage = 'register' | 'checkCode' | 'complete';

const Content = {
  register: dynamic(() => import('@/containers/auth/register/CommonRegister'), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  checkCode: dynamic(() => import('@/containers/auth/register/CheckEmailCode'), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  complete: dynamic(() => import('@/containers/auth/register/Complete'), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
};

const AuthRegisterPage: React.FC = () => {
  const [stage, setStage] = useState<RegisterStage>('register');
  const [userData, setUserData] = useState<RegisterForm | undefined>(undefined);

  const onNext = (data?: RegisterForm) => {
    if (data) {
      setUserData(data);
    }

    if (stage === 'register') {
      setStage('checkCode');
    } else if (stage === 'checkCode') {
      setStage('complete');
    }
  };

  return (
    <>
      {stage === 'register' && <Content.register onNext={onNext} />}
      {stage === 'checkCode' && <Content.checkCode onNext={onNext} userData={userData} />}
      {stage === 'complete' && <Content.complete />}
    </>
  );
};

export default AuthRegisterPage;
