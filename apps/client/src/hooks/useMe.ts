import {
  QueryObserverResult,
  RefetchOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getRecentLogin, setRecentLogin } from "@/utils/recentLogin";

import { IS_DEV } from "@/lib/config/env";
import { MyInfoResponse } from "src/types/user";
import { getUserInfo } from "@/services/user";
import { isClient } from "src/utils/client";
import { useAuthStore } from "src/lib/store/auth";

interface UseMe {
  user: MyInfoResponse | null;
  error: unknown;
  isLoading: boolean;
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<MyInfoResponse, Error>>;
}

const useMe = (): UseMe => {
  const queryClient = useQueryClient();
  const { user, setUserData } = useAuthStore();

  const { data, refetch, error, isLoading } = useQuery({
    queryKey: ["getMe"],
    queryFn: async () => {
      const response = await getUserInfo();
      const userData = response.data;
      IS_DEV && console.log("useMe 쿼리 응답:", userData);

      // 소셜 로그인 시 최근 로그인 정보 저장
      const recentLogin = getRecentLogin();
      if (!recentLogin || recentLogin !== userData.socialType) {
        if (userData.socialType) {
          setRecentLogin(userData.socialType);
        } else {
          setRecentLogin("email");
        }
      }

      setUserData(response.data); // ✅ 항상 호출 보장
      return userData;
    },
    retry: false,
    enabled: isClient,
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
  });

  return {
    user,
    error,
    isLoading,
    refetch,
  };
};

export default useMe;
