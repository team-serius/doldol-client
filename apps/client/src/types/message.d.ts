import { messageType } from "./message.d";
import { Message } from "@/types/message";
import { Dayjs } from "dayjs";

export type messageType = "RECEIVE" | "SENT";

export interface Message {
  messageId: number;
  messageType: messageType;
  content: string;
  fontStyle: string;
  backgroundColor: string;
  isDeleted: boolean;
  toName: string;
  fromName: string;
  createdAt: Dayjs;
  updatedAt: Dayjs;
}

// 메시지 목록 조회 GET /messages
export interface MessagePagination {
  data: Message[];
  size: number;
  nextCursor: number;
  hasNext: boolean;
  empty: boolean;
}

export interface MessageListRequest {
  paperId: number;
  messageType: "RECEIVE" | "SEND";
  cursorId?: number | null;
  size?: number;
}

export interface MessageListResponse {
  messageCount: number;
  message: MessagePagination;
}

// 메시지 작성 POST /messages
export interface CreateMessageRequest {
  paperId: number;
  receiverId: number;
  content: string;
  from: string;
  fontStyle: string;
  backgroundColor: string;
}

// 메시지 수정 PATCH /messages
export interface UpdateMessageRequest {
  messageId: number;
  fontStyle: string;
  backgroundColor: string;
  content: string;
  fromName: string;
}
