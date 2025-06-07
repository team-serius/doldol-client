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

export interface MessageListResponse {
  date: Message[];
}

export interface CreateMessageRequest {
  paperId: number;
  receiverId: number;
  content: string;
  from: string;
  fontStyle: string;
  backgroundColor: string;
}

export interface UpdateMessageRequest {
  messageId: number;
  fontStyle: string;
  backgroundColor: string;
  content: string;
  fromName: string;
}
