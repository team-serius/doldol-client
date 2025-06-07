import { MessageResponse } from './message';

export interface RollingPaper {
  paperId: number;
  name: string;
  description: string;
  participantsCount: number;
  messageCount: number;
  openDate: string;
}

export interface RollingPaperPagination {
  data: RollingPaper[];
  size: number;
  nextCursor: number;
  hasNext: boolean;
  empty: boolean;
}

export interface PaperListResponse {
  paperCount: number;
  rollingPaper: RollingPaperPagination;
}

export interface PaperRequest {
  name: string;
  description: string;
  openDate: string;
}

export interface PaperResponse {
  name: string;
  description: string;
  openDate: string;
  link: string;
}

export interface JoinPaperRequest {
  invitationCode: string;
}
