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
  // TODO: 컨테이너 분기 추가
  // checkCode:
  // complete:
};

const AuthRegisterPage: React.FC = () => {
  const [stage, setStage] = useState<RegisterStage>('register');
  const [userData, setUserData] = useState<RegisterForm | undefined>(undefined);

  // FIXME: 완성 후 제거
  useEffect(() => {
    console.log('Current stage:', stage);
    console.log('User data:', userData);
  }, [userData]);

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
      {stage === 'checkCode' && <div>Check Code Component</div>}
      {stage === 'complete' && <div>Complete Component</div>}
    </>
  );
};

export default AuthRegisterPage;
