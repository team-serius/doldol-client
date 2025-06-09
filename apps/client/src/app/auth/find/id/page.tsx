'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { FindUserInputForm } from '@/interface/auth/find.interface';

type FindIdStage = 'input' | 'checkCode' | 'complete';

const Content = {
  input: dynamic(() => import('@/containers/auth/InputUserData'), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  checkCode: dynamic(() => import('@/containers/auth/CheckEmailCode'), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  complete: dynamic(() => import('@/containers/auth/find/id/Complete'), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
};

const AuthFindIdPage = () => {
  const [stage, setStage] = React.useState<FindIdStage>('input');
  const [userData, setUserData] = React.useState<FindUserInputForm | undefined>(undefined); // 타입을 구체적으로 정의할 수 있음

  const onNext = (data?: FindUserInputForm) => {
    if (data) {
      setUserData(data);
    }

    if (stage === 'input') {
      setStage('checkCode');
    } else if (stage === 'checkCode') {
      setStage('complete');
    }
  };

  return (
    <>
      {stage === 'input' && <Content.input onNext={onNext} />}
      {stage === 'checkCode' && <Content.checkCode onNext={onNext} userData={userData} />}
      {stage === 'complete' && userData && <Content.complete userData={userData} />}
    </>
  );
};

export default AuthFindIdPage;
