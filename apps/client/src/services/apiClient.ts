// server axios
import axios, { type AxiosError, isAxiosError as isAxiosErrorApp } from 'axios';

import { isClient } from 'src/utils/client';
import { getAccessToken, getRefreshToken, removeAccessToken, removeRefreshToken, setTokens } from 'src/utils/token';
import { ErrorDTO } from 'src/types/error';
import { API_URI, IS_DEV } from 'src/lib/config/env';
import { Token } from 'src/types/auth';
import { REVALIDATE_TIME } from '@/common/constants/variables';

export const apiClient = axios.create({ baseURL: `${API_URI}/api/v2` });

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
  (config) => config,
  (error) => {
    if (!isClient) return Promise.reject(error);
    if (isAxiosError<ErrorDTO>(error)) {
      // 토큰 만료시 refresh token으로 재발급
      if (
        // TODO: 에러 상태 코드로 변경 필요
        (error.response?.data.message === 'sign Failed' || error.response?.data.message === 'TOKEN_EMPTY') &&
        getRefreshToken()
      ) {
        if (IS_DEV) console.log('refresh');
        apiClient
          .post<Token>('auth/refresh', { accessToken: getAccessToken(), refreshToken: getRefreshToken() })
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

export const apiClientLocal = axios.create({ baseURL: `${process.env.ROUTE_HANDLER_HOST}/api` });

// fetch client
interface FetchOptions {
  cache?: 'force-cache' | 'no-store' | 'revalidate';
  revalidateTime?: number;
  tags?: string[];
}
type FetchClient = <T>(url: string, options?: FetchOptions) => Promise<T>;

export const fetchClient: FetchClient = async (url, options = { cache: 'force-cache' }) => {
  const { cache, revalidateTime, tags } = options;
  const cachePolicy = cache !== 'revalidate' ? cache : undefined;
  const next = !cachePolicy ? { revalidate: revalidateTime || REVALIDATE_TIME, tags } : undefined;

  const response = await fetch(url, {
    method: 'GET',
    cache: cachePolicy,
    next,
  });

  if (!response.ok) throw new Error('failed to fetch');

  const result = response.json();
  return result;
};

export const isAxiosError = <T>(err: unknown | AxiosError<T>): err is AxiosError<T> => {
  return isAxiosErrorApp(err);
};
