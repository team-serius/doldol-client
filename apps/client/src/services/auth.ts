import { CommonLoginForm } from "@/interface/auth/login.interface";
import { apiClient } from "./apiClient";

export const postCheckId = (id: string) => {
  return apiClient.post("/auth/check-id", { id });
};

export const postLogin = (data: CommonLoginForm) => {
  return apiClient.post("/auth/login", data);
};
