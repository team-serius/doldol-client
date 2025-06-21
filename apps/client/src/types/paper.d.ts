// import { MessageResponse } from './message';

import { PaperListSort } from "@/enum/sort.enum";
import { Dayjs } from "dayjs";

export interface Paper {
  paperId: number;
  name: string;
  description: string;
  participantsCount: number;
  messageCount: number;
  openDate: Dayjs;
}

// 롤링페이퍼 리스트 GET /papers
export interface PaperPagination {
  data: Paper[];
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
  openDate: Dayjs;
  code: string;
}

// 롤링페이퍼 개별 조회 GET /papers/{id}
export interface PaperDetailResponse {
  paperId: number;
  name: string;
  description: string;
  participantsCount: number;
  messageCount: number;
  openDate: Dayjs;
  isMaster: boolean;
  code: string;
}

export interface JoinPaperRequest {
  invitationCode: string;
}

export interface PaperListRequest {
  cursorId: number | null;
  size: number;
  sortDirection: PaperListSort;
}

export interface PaperInviteResponse {
  paperId: number;
  name: string;
  description: string;
  participantsCount: number;
  messageCount: number;
  openDate: Dayjs;
}
