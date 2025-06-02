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

type QueryKey = ['getMe'];
type Option = Partial<UseQueryOptions<User, Error, User, QueryKey>>;

interface UseMe {
  user: User | null;
  error: unknown;
  refetchMe: () => Promise<QueryObserverResult<User, Error>>;
  onLogout(): void;
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
          email: 'john@naver.com',
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

  return {
    user,
    error,
    refetchMe,
    onLogout,
    isLoading,
  };
};

export default useMe;
