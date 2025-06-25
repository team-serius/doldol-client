import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AxiosError } from "axios";
import { ErrorDTO } from "@/types/error"; // 프로젝트의 실제 경로로 수정하세요
import { HELPER_MESSAGES } from "@libs/utils/message";
import { IS_DEV } from "@/lib/config/env";
import { Notify } from "@ui/components";
import { isAxiosError } from "@/services/apiClient"; // 프로젝트의 실제 경로로 수정하세요
import { isClient } from "src/utils/client";
import { postLogout } from "@/services/auth";
import { removeTokens } from "@/utils/token";
import { useAuthStore } from "src/lib/store/auth";
import { useRouter } from "next/navigation";

const useLogoutForm = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { setUserData } = useAuthStore();

  const { mutate: onLogoutApi } = useMutation({
    mutationFn: () => postLogout(),
    mutationKey: ["logout"],
    onSuccess: (res) => {
      IS_DEV && console.log("로그아웃 성공", res);
      if (!isClient) return;

      router.replace("/auth/login");
      setUserData(null);
      removeTokens();
      queryClient.clear();
      Notify.success(HELPER_MESSAGES.logoutSuccess);
    },
    onError: (err: AxiosError) => {
      if (isAxiosError<ErrorDTO>(err)) {
        Notify.error("로그아웃에 실패했습니다. 다시 시도해주세요.");
      }
    },
  });

  return {
    onLogoutApi,
  };
};

export default useLogoutForm;
