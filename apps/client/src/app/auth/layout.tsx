import React from "react";
import { CommonLayout } from "@/components/layout/CommonLayout";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = async ({ children }: Props) => {
  return <CommonLayout>{children}</CommonLayout>;
};
export default AuthLayout;
