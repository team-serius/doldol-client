"use client";

import { TabMenu } from "@/components/common/TabMenu";
import { getPaperDetail } from "@/services/paper";
import { PaperDetailResponse } from "@/types/paper";
import { ShareFill } from "@icons/ShareFill";
import { useQuery } from "@tanstack/react-query";
import { Button, Notify } from "@ui/components";
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

const PaperDetailPage = ({
  params,
}: {
  params: Promise<{ paperId: string }>;
}) => {
  const [tab, setTab] = useState("보낸 메시지");
  const { paperId } = use(params);

  const {
    data: paperData,
    refetch,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getMe"],
    queryFn: async () => {
      const response = await getPaperDetail(paperId);
      return response.data;
    },
    retry: false,
  });

  const onTabClick = (item: string) => {
    setTab(item);
  };

  const onCopyInviteLink = () => {
    if (paperData) {
      const link = `${window.location.origin}/paper/join/${paperData.code}`;
      navigator.clipboard.writeText(link).then(() => {
        Notify.success("초대 링크가 클립보드에 복사되었습니다.");
      });
    }
  };

  return (
    <>
      <Button
        className="absolute bottom-6 right-6 z-10"
        variant={"primary"}
        size={"medium"}
        shape="circle"
        onClick={onCopyInviteLink}
        icon={{ DefaultComponent: ShareFill }}
      />
      <TabMenu
        menuItems={["보낸 메시지", "받은 메시지"]}
        activeItem={tab}
        onItemClick={onTabClick}
      />
      <div className="px-6 pb-6">
        {tab === "보낸 메시지" && paperData && paperId && (
          <Content.send paperId={Number(paperId)} paperData={paperData} />
        )}
        {tab === "받은 메시지" && paperData && paperId && (
          <Content.receive paperId={Number(paperId)} paperData={paperData} />
        )}
      </div>
    </>
  );
};
export default PaperDetailPage;
