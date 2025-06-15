// server axios
import axios, { type AxiosError, isAxiosError as isAxiosErrorApp } from "axios";

import { REVALIDATE_TIME } from "../common/constants/variables";
import { isClient } from "src/utils/client";
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setTokens,
} from "src/utils/token";
import { API_URI, IS_DEV } from "src/lib/config/env";
import { ErrorDTO } from "@/types/error";
import { Token } from "@/types/auth";

export const apiClient = axios.create({ baseURL: `${API_URI}` });

apiClient.interceptors.request.use(
  // Authorization header 등의 요청에 공통헤더가 들어가는 경우 여기서 set
  (config) => {
    if (!isClient) return config;

    const accessToken = getAccessToken();

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
);

apiClient.interceptors.response.use(
  (res) => res.data,
  (error) => {
    if (!isClient) return Promise.reject(error);

    if (isAxiosError<ErrorDTO>(error)) {
      const isAccessTokenExpired =
        error.response?.data.code === "A-014" ||
        error.response?.data.message === "토큰이 만료되었습니다.";

      if (isAccessTokenExpired && getRefreshToken()) {
        // 토큰 만료시 refresh token으로 재발급
        if (IS_DEV) console.log("refresh");
        apiClient
          .post<Token>("auth/reissue", {
            refreshToken: getRefreshToken(),
          })
          .then((res) => {
            if (res.data.accessToken && res.data.refreshToken) {
              setTokens(res.data);
            }
          })
          .catch((err) => {
            removeAccessToken();
            removeRefreshToken();
            if (IS_DEV) {
              console.log(err);
            }
          });
      }
    }
    return Promise.reject(error);
  },
);

export const apiClientLocal = axios.create({
  baseURL: `${process.env.ROUTE_HANDLER_HOST}/api`,
});

// fetch client
interface FetchOptions {
  cache?: "force-cache" | "no-store" | "revalidate";
  revalidateTime?: number;
  tags?: string[];
}
type FetchClient = <T>(url: string, options?: FetchOptions) => Promise<T>;

export const fetchClient: FetchClient = async (
  url,
  options = { cache: "force-cache" },
) => {
  const { cache, revalidateTime, tags } = options;
  const cachePolicy = cache !== "revalidate" ? cache : undefined;
  const next = !cachePolicy
    ? { revalidate: revalidateTime || REVALIDATE_TIME, tags }
    : undefined;

  const response = await fetch(url, {
    method: "GET",
    cache: cachePolicy,
    next,
  });

  if (!response.ok) throw new Error("failed to fetch");

  const result = response.json();
  return result;
};

export const isAxiosError = <T>(
  err: unknown | AxiosError<T>,
): err is AxiosError<T> => {
  return isAxiosErrorApp(err);
};
