import { apiClient } from './apiClient';

const WITHDRAW_PATH = '/auth/withdraw';

export const WithdrawApi = async () => {
  try {
    // console.log(`백엔드 탈퇴 API 호출 시도: ${WITHDRAW_PATH}`);
    // const response = await apiClient.post(WITHDRAW_PATH);

    // if (response.status === 200) {
    //   // 백엔드에서 204 No Content를 반환할 때
    //   console.log('백엔드 탈퇴 API 호출 성공');
    //   return { message: '탈퇴 성공' };
    // } else {
    //   console.log(`백엔드 탈퇴 API 호출 성공 (HTTP ${response.status})`);
    //   return { message: '탈퇴 성공', data: response.data };
    // }

    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('탈퇴 성공');
    return { message: '탈퇴 성공' } as { message: string };
  } catch (error: any) {
    console.error('탈퇴 처리 중 오류 발생:', error);
  }
};
