"use client";

import { setTokens } from "@/utils/token";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

const SocialLoginSuccessPage = ({
  searchParams,
}: {
  searchParams: Promise<{ accessToken?: string; refreshToken?: string }>;
}) => {
  const { accessToken, refreshToken } = use(searchParams);
  const router = useRouter();

  useEffect(() => {
    if (accessToken && refreshToken) {
      setTokens({ accessToken, refreshToken });
      router.replace("/");
    }
  }, [accessToken, refreshToken]);

  return (
    <>
      소셜 로그인을 성공했습니다. <br />
    </>
  );
};
export default SocialLoginSuccessPage;
