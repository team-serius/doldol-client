import { CommonLoginForm } from "@/interface/auth/login.interface";
import { apiClient } from "./apiClient";
import { ApiResponseLoginSuccess } from "@/types/auth";

export const postCheckId = (id: string) => {
  return apiClient.post("/auth/check-id", { id });
};

export const postLogin = (data: CommonLoginForm) => {
  return apiClient.post<ApiResponseLoginSuccess>("/auth/login", data);
};
