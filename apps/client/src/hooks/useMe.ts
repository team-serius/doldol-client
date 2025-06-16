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
  user: MyInfoResponse | null;
  error: unknown;
  onLogout(): void;
  isLoading: boolean;
}

const useMe = (): UseMe => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { user, setUserData } = useAuthStore();

  const { data, refetch, error, isLoading } = useQuery({
    queryKey: ["getMe"],
    queryFn: async () => {
      const response = await getUserInfo();
      const userData = response.data;
      IS_DEV && console.log("useMe 쿼리 응답:", userData);

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
    retry: false,
    enabled: isClient,
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
  });

  const onLogout = () => {
    // TODO: 로그아웃 API 호출
    if (!isClient) return;
    router.replace("/auth/login");
    setUserData(null);
    queryClient.clear();
    Notify.success(HELPER_MESSAGES.logoutSuccess);
  };

  return {
    user,
    error,
    onLogout,
    isLoading,
  };
};

export default useMe;
