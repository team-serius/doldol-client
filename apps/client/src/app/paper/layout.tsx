import React from "react";
import { CommonLayout } from "@/components/layout/CommonLayout";

interface Props {
  children: React.ReactNode;
}

const PaperLayout = async ({ children }: Props) => {
  return <CommonLayout isFullWidth>{children}</CommonLayout>;
};
export default PaperLayout;
