"use client";

import { withNoAuth } from "@/components/HOC/withNoAuth";
import AuthLoginIdContainer from "@/containers/auth/login/id";
import React from "react";

const AuthLoginIdPage: React.FC = () => {
  return <AuthLoginIdContainer />;
};

export default withNoAuth(AuthLoginIdPage);
