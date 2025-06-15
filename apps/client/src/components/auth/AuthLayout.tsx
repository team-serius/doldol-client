"use client";

import { CommonLayout } from "@/components/layout/CommonLayout";
import { withAuth } from "../HOC/withAuth";

interface Props {
  className?: string;
  children?: React.ReactNode;
  isFooterVisible?: boolean;
  isLogoVisible?: boolean;
  isBlockRedirect?: boolean;
  isFullWidth?: boolean;
}

const AuthLayout = ({
  className,
  children,
  isBlockRedirect,
  isFooterVisible,
  isFullWidth,
  isLogoVisible,
}: Props) => {
  return (
    <CommonLayout
      className={className}
      isBlockRedirect={isBlockRedirect}
      isFooterVisible={isFooterVisible}
      isFullWidth={isFullWidth}
      isLogoVisible={isLogoVisible}
    >
      {children}
    </CommonLayout>
  );
};

export default withAuth(AuthLayout);
