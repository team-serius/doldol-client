"use client";

import MessageDetailContainer from "@/containers/paper/message/Detail";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

const MessageDetailPage = ({
  params,
  searchParams,
}: {
  params: Promise<{ paperId: string }>;
  searchParams: Promise<{ index?: string; type?: string }>;
}) => {
  const router = useRouter();
  const { paperId } = use(params);
  const { index, type } = use(searchParams);

  const isValidType = type === "send" || type === "receive";
  const isValidCursor = !!index;

  // ❗ 비정상 접근일 경우 리디렉션
  useEffect(() => {
    if (!isValidType || !isValidCursor) {
      router.replace(`/paper/${paperId}`);
    }
  }, [isValidType, isValidCursor, router, paperId]);

  return (
    <MessageDetailContainer
      paperId={paperId}
      index={Number(index)}
      messageType={type === "send" ? "SEND" : "RECEIVE"}
    />
  );
};

export default MessageDetailPage;
