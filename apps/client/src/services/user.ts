import { ApiResponseMyInfo } from "@/types/user";
import { apiClient } from "./apiClient";

export const getUserInfo = () => {
  return apiClient.get<ApiResponseMyInfo>("/user/info");
};
