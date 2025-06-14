import {
  useQuery,
  useQueryClient,
  type QueryObserverResult,
  type UseQueryOptions,
} from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { useAuthStore } from "src/lib/store/auth";
import { MyInfoResponse } from "src/types/user";
import { isClient } from "src/utils/client";
import { Notify } from "@ui/components";
import { HELPER_MESSAGES } from "@libs/utils/message";
import { getUserInfo } from "@/services/user";

type QueryKey = ["getMe"];
type Option = Partial<
  UseQueryOptions<MyInfoResponse, Error, MyInfoResponse, QueryKey>
>;

interface UseMe {
  user: MyInfoResponse | null;
  error: unknown;
  refetchMe: () => Promise<QueryObserverResult<MyInfoResponse, Error>>;
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
  } = useQuery<MyInfoResponse, Error, MyInfoResponse, QueryKey>({
    queryKey: ["getMe"],
    queryFn: async () => {
      const response = await getUserInfo();
      if (!response.data || !response.data.data) {
        throw new Error("Failed to fetch user data");
      } else {
        setUserData(response.data.data);
      }
      // Adjust the path below to match your actual API response structure
      return response.data.data;
    },
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
    refetchMe,
    onLogout,
    isLoading,
  };
};

export default useMe;
