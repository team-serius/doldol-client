import { PaperCreateResponse, PaperRequest } from "@/types/paper";
import { apiClient } from "./apiClient";

export const postPaper = (data: PaperRequest) => {
  return apiClient.post<PaperCreateResponse>("/papers", data);
};
