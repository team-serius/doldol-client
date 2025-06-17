import { getRecentLogin, setRecentLogin } from "@/utils/recentLogin";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { HELPER_MESSAGES } from "@libs/utils/message";
import { IS_DEV } from "@/lib/config/env";
import { MyInfoResponse } from "src/types/user";
import { Notify } from "@ui/components";
import { getUserInfo } from "@/services/user";
import { isClient } from "src/utils/client";
import { useAuthStore } from "src/lib/store/auth";
import { useRouter } from "next/navigation";

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
