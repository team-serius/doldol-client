import { apiClient } from "./apiClient";

export const postWithdraw = async () => {
  return await apiClient.post("/auth/withdraw");
};
