import { CommonLayout } from "@/components/layout/CommonLayout";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const MyLayout = async ({ children }: Props) => {
  return <CommonLayout uplink="/">{children}</CommonLayout>;
};
export default MyLayout;
