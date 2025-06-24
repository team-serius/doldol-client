import {
  CreateMessageRequest,
  MessageListRequest,
  MessageListResponse,
} from "@/types/message";
import { apiClient } from "./apiClient";

export const getMessageList = (data: MessageListRequest) => {
  return apiClient.get<MessageListResponse>("/messages", {
    params: {
      paperId: data.paperId,
      messageType: data.messageType,
      cursorId: data.cursorId ?? null,
      size: data.size ?? 10, // 기본값 설정
    },
  });
};

export const postMessage = (data: CreateMessageRequest) => {
  return apiClient.post("/messages", data);
};

export const deleteMessage = (messageId: number) => {
  return apiClient.delete("/messages", { data: { messageId: messageId } });
};
