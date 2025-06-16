import { isClient } from "./client";

export const getRecentLogin = (): string | null => {
  if (!isClient) return null;
  return localStorage.getItem("doldol-recentLogin");
};

export const setRecentLogin = (loginType: string) => {
  if (!isClient) return;
  localStorage.setItem("doldol-recentLogin", loginType);
};

export const removeRecentLogin = () => {
  if (!isClient) return;
  localStorage.removeItem("doldol-recentLogin");
};
