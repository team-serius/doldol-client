import { Header } from '@/components/layout/Header';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md border border-black">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
};
export default AuthLayout;
