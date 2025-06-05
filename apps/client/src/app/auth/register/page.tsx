'use client';

import React from 'react';

import CommonRegisterContainer from '@/containers/auth/register/CommonRegister';
import dynamic from 'next/dynamic';

const AuthRegisterPage: React.FC = () => {
  const [test, setTest] = React.useState('input');
  const CommonRegister = () => {
    dynamic(() => import('@/containers/auth/register/CommonRegister'), {
      ssr: false,
    });
    return <CommonRegisterContainer />;
  };

  return (
    test === 'input' && CommonRegister(),
    test === '' && CommonRegister(),
    test === 'input' && CommonRegister()
  );
};

export default AuthRegisterPage;
