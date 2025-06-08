export interface Message {
  messageId: number;
  messageType: string;
  content: string;
  fontStyle: string;
  backgroundColor: string;
  isDeleted: boolean;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// 메시지 목록 조회 GET /messages
export interface MessagePagination {
  data: Message[];
  size: number;
  nextCursor: number;
  hasNext: boolean;
  empty: boolean;
}

export interface MessageListData {
  messageCount: number;
  message: MessagePagination;
}

export interface ApiResponseMessageListResponse {
  data: MessageListData;
  status: number;
  message: string;
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
