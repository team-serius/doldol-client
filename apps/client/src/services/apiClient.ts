// server axios
import axios, { type AxiosError, isAxiosError as isAxiosErrorApp } from "axios";
import { isClient } from "src/utils/client";
import { ErrorDTO } from "src/types/error";
import { API_URI } from "src/lib/config/env";

export const apiClient = axios.create({
  baseURL: `${API_URI}`,
  withCredentials: true, // 쿠키 자동 포함
});

apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (!isClient) return Promise.reject(error);
    if (!isAxiosError<ErrorDTO>(error)) return Promise.reject(error);

    const isAccessTokenExpired =
      error.response?.data.code === "A-014" ||
      error.response?.data.message === "토큰이 만료되었습니다.";

    if (isAccessTokenExpired && error.config) {
      try {
        await apiClient.post("/auth/refresh");
        return apiClient(error.config); // 원 요청 재시도
      } catch (refreshError) {
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export const apiClientLocal = axios.create({
  baseURL: `${process.env.ROUTE_HANDLER_HOST}/api`,
  withCredentials: true,
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
    ? { revalidate: revalidateTime || 60, tags }
    : undefined;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include", // 쿠키 포함
    cache: cachePolicy,
    next,
  });

  if (!response.ok) throw new Error("failed to fetch");

  return response.json();
};

export const isAxiosError = <T>(
  err: unknown | AxiosError<T>,
): err is AxiosError<T> => {
  return isAxiosErrorApp(err);
};
