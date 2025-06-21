import { MessageListRequest } from "@/types/message";
import { apiClient } from "./apiClient";

export const getMessageList = (data: MessageListRequest) => {
  return apiClient.get("/messages", {
    params: {
      paperId: data.paperId,
      messageType: data.messageType,
      openDate: data.openDate,
      cursorId: data.cursorId ?? null,
      size: data.size ?? 10, // 기본값 설정
    },
  });
};
