import {
  EmailCodeVerifyRequest,
  LoginSuccessResponse,
  OAuthRegisterRequest,
  RegisterRequest,
  ValidatePasswordInfoRequest,
  ValidateUserInfoRequest,
} from "@/types/auth";

import { CommonLoginForm } from "@/interface/auth/login.interface";
import { apiClient } from "./apiClient";

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

export const postRegister = (data: RegisterRequest) => {
  return apiClient.post("/auth/register", data);
};

export const postOauthRegister = (data: OAuthRegisterRequest) => {
  return apiClient.post("/auth/oauth/register", data);
};

export const postValidateUserInfo = (data: ValidateUserInfoRequest) => {
  return apiClient.post("/auth/validate/user/info", data);
};

export const getFindId = (email: string) => {
  return apiClient.get("/auth/find/id", email ? { params: { email } } : {});
};

export const patchResetPassword = (email: string) => {
  return apiClient.patch(`/auth/reset/password?email=${email}`);
};

export const postCheckEmail = (email: string) => {
  return apiClient.post(`/auth/check-email?email=${email}`);
};

export const postCheckPasswordInfo = (data: ValidatePasswordInfoRequest) => {
  return apiClient.post("/auth/check-password-info", data);
};
