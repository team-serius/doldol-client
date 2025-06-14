'use client';

import { PAPER_DETAIL_TABS } from '@/common/constants/tab';
import { TabButtonMenu } from '@/components/common/TabButton';
import dynamic from 'next/dynamic';
import { use, useState } from 'react';

type PaperDetailTab = 'send' | 'receive';

const Content = {
  send: dynamic(() => import('@/containers/paper/detail/Send'), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  receive: dynamic(() => import('@/containers/paper/detail/Receive'), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
};

const PaperDetailPage = ({
  params,
}: {
  params: Promise<{ paperId: string }>;
}) => {
  const [tab, setTab] = useState<PaperDetailTab>('send');
  const { paperId } = use(params);

  return (
    <>
      <TabButtonMenu
        tabMenus={PAPER_DETAIL_TABS}
        onClick={(id: string) => {
          setTab(id as PaperDetailTab);
        }}
      />
      {tab === 'send' ? (
        <Content.send paperId={paperId} />
      ) : (
        <Content.receive paperId={paperId} />
      )}
    </>
  );
};
export default PaperDetailPage;
