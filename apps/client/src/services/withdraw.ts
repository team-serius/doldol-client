import { apiClient } from "./apiClient";

export const withdraw = async () => {
  const res = await apiClient.post("/auth/withdraw");

  return res.data;
};
