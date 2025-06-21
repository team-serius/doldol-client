"use client";

import { PaperDetailResponse } from "@/types/paper";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

const TEST_DATA: PaperDetailResponse = {
  paperId: 1,
  name: "테스트 롤링페이퍼",
  description: "이것은 테스트 롤링페이퍼입니다.",
  participantsCount: 10,
  messageCount: 5,
  openDate: dayjs("2023-10-01T00:00:00Z"),
  isMaster: true,
  code: "TEST123",
};

const MessageDetailPage = ({
  params,
  searchParams,
}: {
  params: Promise<{ paperId: string }>;
  searchParams: Promise<{ cursor?: string; type?: string }>;
}) => {
  const router = useRouter();
  const { paperId } = use(params);
  const { cursor, type } = use(searchParams);

  const isValidType = type === "send" || type === "receive";
  const isValidCursor = !!cursor;

  const pageData = TEST_DATA; // TODO: PageData API 호출로 변경 필요

  // ❗ 비정상 접근일 경우 리디렉션
  useEffect(() => {
    if (
      !isValidType ||
      !isValidCursor ||
      !pageData?.openDate.isBefore(dayjs())
    ) {
      router.replace(`/paper/${paperId}`);
    }
  }, [pageData, isValidType, isValidCursor, router, paperId]);

  if (pageData?.openDate.isBefore(dayjs())) return null;

  return <>✅ 메시지 상세 페이지 출력</>;
};

export default MessageDetailPage;
