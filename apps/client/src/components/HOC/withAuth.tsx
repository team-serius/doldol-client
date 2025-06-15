import { useRouter } from "next/navigation";
import { JSX, useEffect } from "react";
import useMe from "src/hooks/useMe";
import { useAuthStore } from "src/lib/store/auth";
import { getAccessToken, removeTokens } from "src/utils/token";

export function withAuth<P>(Page: React.ComponentType<P>, isPublic = false) {
  function AuthComponent(props: JSX.IntrinsicAttributes & P) {
    const { user, error, isLoading } = useMe();
    const accessToken = getAccessToken();
    const { setUserData } = useAuthStore();

    const router = useRouter();

    useEffect(() => {
      if (isLoading) return;

      if (isPublic) return; //공개 페이지

      if (!user) {
        router.replace("/auth/login");
        return;
      }

      if (!accessToken) {
        removeTokens();
        setUserData(null);
        router.replace("/auth/login");
        return;
      }
    }, [user, error, isLoading]);
    return <Page {...props} />;
  }
  return AuthComponent;
}
