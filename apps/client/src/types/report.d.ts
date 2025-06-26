export interface ReportRequest {
  messageId: number;
}

export interface ReportResponse {
  messageId: number;
  messageContent: string;
  title: string;
  content: string;
  createdAt: string;
  isAnswered: boolean;
}

export interface ReportListResponse {
  list: ReportResponse[];
  size: number;
  nextCursor: number;
  hasNext: boolean;
  empty: boolean;
}
