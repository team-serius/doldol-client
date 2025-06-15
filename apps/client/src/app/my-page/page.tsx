'use client';

import ProfileContainer from '@/containers/my-page/Profile';
import dynamic from 'next/dynamic';

const Content = {
  input: dynamic(() => import('@/containers/my-page/Profile'), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
};

const MyPage: React.FC = () => {
  return <ProfileContainer />;
};

export default MyPage;
