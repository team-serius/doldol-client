// import { MessageResponse } from './message';

export interface Paper {
  paperId: number;
  name: string;
  description: string;
  participantsCount: number;
  messageCount: number;
  openDate: string;
}

// 롤링페이퍼 리스트 GET /papers
export interface PaperPagination {
  data: Paper[];
  size: number;
  nextCursor: number;
  hasNext: boolean;
  empty: boolean;
}

export interface PaperListData {
  paperCount: number;
  rollingPaper: PaperPagination;
}

export interface ApiResponsePaperListResponse {
  data: PaperListData;
  status: number;
  message: string;
}

// 롤링페이퍼 생성 POST /papers
export interface PaperRequest {
  name: string;
  description: string;
  openDate: string;
}

export interface PaperCreateResponse {
  name: string;
  description: string;
  openDate: string;
  link: string;
}

export interface ApiResponsePaperCreateResponse {
  data: PaperCreateResponse;
  status: number;
  message: string;
}

// 롤링페이퍼 단건 조회 GET /papers/invite
export interface PaperDetailResponse {
  paperId: number;
  name: string;
  description: string;
  participantsCount: number;
  messageCount: number;
  openDate: string;
}
export interface ApiResponsePaperResponse {
  data: PaperDetailResponse;
  status: number;
  message: string;
}

// 롤링페이퍼 참여 POST /papers/join
export interface JoinPaperRequest {
  invitationCode: string;
}
