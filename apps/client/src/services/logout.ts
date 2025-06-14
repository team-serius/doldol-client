import { API_URI } from '@/lib/config/env';
import { apiClient, isAxiosError } from './apiClient';

const LOGOUT_PATH = '/auth/logout';

export const LogoutApi = async () => {
  try {
    const response = await apiClient.post(`LOGOUT_PATH`);

    if (response.status === 204) {
      console.log('백엔드 로그아웃 API 호출 성공!');
      return { message: '로그아웃 겅공' };
    } else {
      throw Promise.reject(new Error(`로그아웃 실패: ${response.status}`));
    }
  } catch (error: any) {
    console.error('백엔드 로그아웃 API 호출 중 오류 발생: ', error);
    if (isAxiosError(error) && error.response) {
      return Promise.reject(error);
    }
  }
  return Promise.reject(new Error(`로그아웃 실패: 알 수 없음`));
};
