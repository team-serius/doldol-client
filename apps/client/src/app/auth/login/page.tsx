"use client";

import { withNoAuth } from "@/components/HOC/withNoAuth";
import AuthLoginContainer from "@/containers/auth/login";

const AuthLoginPage: React.FC = () => {
  return <AuthLoginContainer />;
};

export default withNoAuth(AuthLoginPage);
