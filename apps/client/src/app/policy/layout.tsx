import { CommonLayout } from "@/components/layout/CommonLayout";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const PaperLayout = async ({ children }: Props) => {
  return <CommonLayout>{children}</CommonLayout>;
};
export default PaperLayout;
