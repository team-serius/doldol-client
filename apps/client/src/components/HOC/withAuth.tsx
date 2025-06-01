// import { Role } from '@interface/Auth/user.interface';
import { ERROR_MESSAGES } from '@libs/utils/message';
import { Notify } from '@ui/components';
import { useRouter } from 'next/navigation';
import { JSX, useEffect } from 'react';
import useMe from 'src/hooks/useMe';
import { useAuthStore } from 'src/lib/store/auth';
import { getAccessToken, removeTokens } from 'src/utils/token';

// export function withAuth<P>(Page: React.ComponentType<P>, roles: Role[] = []) {
export function withAuth<P>(Page: React.ComponentType<P>) {
  function AuthComponent(props: JSX.IntrinsicAttributes & P) {
    const { user, error, isLoading } = useMe();
    // const isValid = hasValidRole(user?.role, roles);
    const accessToken = getAccessToken();
    const { setUserData } = useAuthStore();

    const router = useRouter();

    useEffect(() => {
      //   if (isLoading || isValid) return;
      if (isLoading) return;

      //   if (roles.length === 0) return; // for public page

      if (!user) {
        router.replace('/auth/login');
        Notify.error(ERROR_MESSAGES.unauthorized);
        return;
      }

      if (!accessToken) {
        removeTokens();
        setUserData(null);
        router.replace('/auth/login');
        Notify.error(ERROR_MESSAGES.unauthorized);
        return;
      }

      //   if (roles.includes('MUSICIAN') && user?.artistApproveStatus !== 'APPROVED') {
      //     router.replace('/auth/register/artist');
      //     Notify.error(ERROR_MESSAGES.musicianForbidden);
      //     return;
      //   }
    }, [user, error, isLoading]);
    return <Page {...props} />;
  }
  return AuthComponent;
}
