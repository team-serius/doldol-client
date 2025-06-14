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
  list: Paper[];
  size: number;
  nextCursor: number;
  hasNext: boolean;
  empty: boolean;
}

export interface PaperListResponse {
  paperCount: number;
  rollingPaper: PaperPagination;
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

// 롤링페이퍼 개별 조회 GET /papers/{id}
export interface PaperDetailResponse {
  paper: Paper;
  isMaster: boolean;
}

// 롤링페이퍼 참여 POST /papers/join
export interface JoinPaperRequest {
  invitationCode: string;
}
