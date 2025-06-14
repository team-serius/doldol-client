import { CommonLoginForm } from "@/interface/auth/login.interface";
import { apiClient } from "./apiClient";
import { LoginSuccessResponse } from "@/types/auth";

export const postCheckId = (id: string) => {
  return apiClient.post("/auth/check-id", { id });
};

export const postLogin = (data: CommonLoginForm) => {
  return apiClient.post<LoginSuccessResponse>("/auth/login", data);
};

export const postLogout = () => {
  return apiClient.post("/auth/logout");
};
