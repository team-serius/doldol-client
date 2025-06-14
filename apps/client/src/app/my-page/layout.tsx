import { CommonLayout } from '@/components/layout/CommonLayout';
import { cookies } from 'next/headers';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AuthLayout = async ({ children }: Props) => {
  return <CommonLayout>{children}</CommonLayout>;
};
export default AuthLayout;
