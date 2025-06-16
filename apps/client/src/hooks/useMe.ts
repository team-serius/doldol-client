import {
  useQuery,
  useQueryClient,
  type QueryObserverResult,
  type UseQueryOptions,
} from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import { useAuthStore } from 'src/lib/store/auth';
import { User } from 'src/types/user';
import { isClient } from 'src/utils/client';
// import { getMeApi } from 'src/services/user';
import { Notify } from '@ui/components';
import { HELPER_MESSAGES } from '@libs/utils/message';
// import { WithdrawApi } from '@/services/withdraw';

type QueryKey = ['getMe'];
type Option = Partial<UseQueryOptions<User, Error, User, QueryKey>>;

interface UseMe {
  user: User | null;
  error: unknown;
  refetchMe: () => Promise<QueryObserverResult<User, Error>>;
  onLogout(): void;
  onWithdraw(): Promise<void>;
  isLoading: boolean;
}

const useMe = (options?: Option): UseMe => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { user, setUserData } = useAuthStore();

  const {
    data: userData,
    refetch: refetchMe,
    error,
    isLoading,
  } = useQuery<User, Error, User, QueryKey>({
    queryKey: ['getMe'],
    queryFn: async () => {
      try {
        // const res = await getMeApi();
        // const data = res.data;
        const data: User = {
          id: '1',
          name: 'John Doe',
        };

        setUserData(data);

        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey[0] !== 'getMe',
        });

        return data;
      } catch (err) {
        setUserData(null);

        const message =
          err instanceof Error
            ? err.message
            : 'An error occurred while fetching user data';

        Notify.error(message);
        throw err;
      }
    },
    enabled: isClient && (options?.enabled ?? true),
    retry: false,
    staleTime: 1000 * 60 * 5,
    ...options,
  });

  const onLogout = () => {
    router.replace('/auth/login');
    setUserData(null);
    queryClient.clear();
    Notify.success(HELPER_MESSAGES.logoutSuccess);
  };

  const onWithdraw = async () => {
    if (!window.confirm('정말 탈퇴하시겠습니까?')) {
      return;
    }
    try {
      await WithdrawApi();
      console.log('탈퇴 성공');
      Notify.success('이용해주셔서 감사합니다.');
      setUserData(null);
      queryClient.clear();
      router.replace('/');
    } catch (error: any) {
      console.error('회원 탈퇴 오류 발생:', error);
      const errorMessage = error.message || '알 수 없는 오류가 발생했습니다.';
      Notify.error(`탈퇴 실패: ${errorMessage}`);
      throw error;
    }
  };

  return {
    user,
    error,
    refetchMe,
    onLogout,
    onWithdraw,
    isLoading,
  };
};

export default useMe;
