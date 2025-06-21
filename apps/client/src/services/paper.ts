import {
  PaperCreateResponse,
  PaperDetailResponse,
  PaperListRequest,
  PaperListResponse,
  PaperRequest,
} from "@/types/paper";

import { apiClient } from "./apiClient";

export const postPaper = (data: PaperRequest) => {
  return apiClient.post<PaperCreateResponse>("/papers", data);
};

export const getPaperList = (data: PaperListRequest) => {
  return apiClient.get<PaperListResponse>("/papers", {
    params: {
      cursorId: data.cursorId,
      size: data.size,
      sortDirection: data.sortDirection,
    },
  });
};

export const getPaperDetail = (paperId: string) => {
  return apiClient.get<PaperDetailResponse>(`/papers/${paperId}`);
};
