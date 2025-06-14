"use client";

import { TabMenu } from "@/components/common/TabMenu";
import { PaperDetailResponse } from "@/types/paper";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { use, useState } from "react";

const Content = {
  send: dynamic(() => import("@/containers/paper/detail/Send"), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  receive: dynamic(() => import("@/containers/paper/detail/Receive"), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
};

// FIXME: API 연동 후 TEST_DATA 제거
const TEST_DATA: PaperDetailResponse = {
  paper: {
    paperId: 1,
    name: "테스트 롤링페이퍼",
    description: "이것은 테스트 롤링페이퍼입니다.",
    participantsCount: 10,
    messageCount: 5,
    openDate: dayjs("2023-10-01T00:00:00Z"),
  },
  isMaster: true,
};

const PaperDetailPage = ({
  params,
}: {
  params: Promise<{ paperId: string }>;
}) => {
  const paperData = TEST_DATA;
  const [tab, setTab] = useState("보낸 메시지");
  const { paperId } = use(params);

  const onTabClick = (item: string) => {
    setTab(item);
  };

  return (
    <>
      <TabMenu
        menuItems={["보낸 메시지", "받은 메시지"]}
        activeItem={tab}
        onItemClick={onTabClick}
      />
      <div className="px-6 pb-6">
        {tab === "보낸 메시지" ? (
          <Content.send paperId={paperId} paperData={paperData} />
        ) : (
          <Content.receive paperId={paperId} />
        )}
      </div>
    </>
  );
};
export default PaperDetailPage;
