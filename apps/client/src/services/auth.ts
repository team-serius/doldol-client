import { CommonLoginForm } from "@/interface/auth/login.interface";
import { apiClient } from "./apiClient";
import {
  EmailCodeVerifyRequest,
  LoginSuccessResponse,
  OAuthRegisterRequest,
} from "@/types/auth";

export const postCheckId = (id: string) => {
  return apiClient.post("/auth/check-id", { id });
};

export const postLogin = (data: CommonLoginForm) => {
  return apiClient.post<LoginSuccessResponse>("/auth/login", data);
};

export const postLogout = () => {
  return apiClient.post("/auth/logout");
};

export const postSendEmailCode = (email: string) => {
  return apiClient.post("/auth/email/send-code", { email });
};

export const postVerifyEmailCode = (data: EmailCodeVerifyRequest) => {
  return apiClient.post("/auth/email/verify-code", data);
};

export const postOauthRegister = (data: OAuthRegisterRequest) => {
  return apiClient.post("/auth/oauth/register", data);
};
