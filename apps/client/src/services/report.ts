import { ReportRequest } from "@/types/report";
import { apiClient } from "./apiClient";

export const postReport = (data: ReportRequest) => {
  return apiClient.post("/reports", data);
};
