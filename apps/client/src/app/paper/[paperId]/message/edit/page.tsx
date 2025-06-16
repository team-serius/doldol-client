"use client";

import dynamic from "next/dynamic";
import { use, useEffect, useState } from "react";
import { set } from "react-hook-form";

type MessageEditStage =
  | "selectPerson"
  | "editMessage"
  | "checkMessage"
  | "complete";

const Content = {
  selectPerson: dynamic(
    () => import("@/containers/paper/message/SelectPerson"),
    {
      ssr: false,
      loading: () => <div>Loading...</div>, // 스켈레톤 대체
    },
  ),
  // editMessage: dynamic(() => import("@/containers/paper/message/Edit"), {
  //     ssr: false,
  //     loading: () => <div>Loading...</div>, // 스켈레톤 대체
  // }),
  // checkMessage: dynamic(() => import("@/containers/paper/message/Check"), {
  //     ssr: false,
  //     loading: () => <div>Loading...</div>, // 스켈레톤 대체
  // }),
  // complete: dynamic(() => import("@/containers/paper/message/Complete"), {
  //     ssr: false,
  //     loading: () => <div>Loading...</div>, // 스켈레톤 대체
  // }),
};

const MessageEditPage = ({
  params,
  searchParams,
}: {
  params: Promise<{ paperId: string }>;
  searchParams: Promise<{ messageId?: string }>;
}) => {
  const { paperId } = use(params);
  const { messageId } = use(searchParams);
  const [stage, setStage] = useState<MessageEditStage>("selectPerson");
  const [targetPerson, setTargetPerson] = useState<string | null>(null);

  useEffect(() => {
    if (messageId) {
      // TODO: API 호출로 메시지 데이터 가져오기, 대상 유저 설정
      setTargetPerson("exampleUserId"); // 예시로 설정, 실제로는 API 호출 후 설정
      setStage("editMessage");
    }
  }, [messageId]);

  const onNext = (userId?: string) => {
    switch (stage) {
      case "selectPerson":
        if (userId) {
          setTargetPerson(userId);
          setStage("editMessage");
        }
        break;
      // case "editMessage":
    }
  };

  return (
    <div className="px-6 pb-10">
      {stage === "selectPerson" && (
        <Content.selectPerson paperId={paperId} onNext={onNext} />
      )}
    </div>
  );
};

export default MessageEditPage;
