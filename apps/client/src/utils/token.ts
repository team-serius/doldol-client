import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/lib/config/env";
import { isClient } from "./client";
import { Token } from "@/types/auth";

export const getAccessToken = (): string | null => {
  if (!isClient) return null;
  return localStorage.getItem(ACCESS_TOKEN);
};

export const getRefreshToken = (): string | null => {
  if (!isClient) return null;
  return localStorage.getItem(REFRESH_TOKEN);
};

export const setAccessToken = (token: string) => {
  if (!isClient) return null;
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const setRefreshToken = (token: string) => {
  if (!isClient) return null;
  localStorage.setItem(REFRESH_TOKEN, token);
};

export const getTokens = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  return { accessToken, refreshToken };
};

export const setTokens = (tokens: Token) => {
  if (!isClient) return;
  setAccessToken(tokens.accessToken);
  setRefreshToken(tokens.refreshToken);
};

export const removeAccessToken = () => {
  if (!isClient) return;
  localStorage.removeItem(ACCESS_TOKEN);
};

export const removeRefreshToken = () => {
  if (!isClient) return;
  localStorage.removeItem(REFRESH_TOKEN);
};

export const removeTokens = () => {
  removeAccessToken();
  removeRefreshToken();
};
