import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

const withAuth =
  <P,>(WrappedComponent: React.ComponentType<P>) =>
  (props: React.PropsWithChildren<P>) => {
    const [cookies] = useCookies();
    const router = useRouter();

    useEffect(() => {
      const accessToken = cookies["Access-Token"];

      if (!accessToken) {
        router.push("/auth/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

export default withAuth;
