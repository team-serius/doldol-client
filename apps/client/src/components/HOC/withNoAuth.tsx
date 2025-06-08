import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const withNoAuth =
  <P,>(WrappedComponent: React.ComponentType<P>) =>
  (props: React.PropsWithChildren<P>) => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const router = useRouter();

    useEffect(() => {
      const accessToken = cookies['Access-Token'];

      if (accessToken) {
        router.push('/');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

export default withNoAuth;
