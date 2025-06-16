"use client";

import { OAuthButton } from "@/components/auth/OAuthButton";
import { RecentLoginBubble } from "@/components/auth/RecentLogin";
import { SupportMenu } from "@/components/auth/SupportMenu";
import { Logo } from "@/components/common/Logo";
import { SocialType } from "@/enum/social.enum";
import { getRecentLogin } from "@/utils/recentLogin";
import { Typography, Button } from "@ui/components";
import Link from "next/link";
import cx from "clsx";
import { useEffect, useState } from "react";

const AuthLoginContainer = () => {
  const [recentLogin, setRecentLogin] = useState<string | null>(null);

  useEffect(() => {
    // 클라이언트에서만 실행되도록
    const stored = getRecentLogin();
    setRecentLogin(stored);
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <Logo size="large" className="mt-10" />
      <Typography variant={"h24-bold"} className="text-center my-10">
        돌돌에 로그인하고
        <br />
        서로의 마음을 확인해보세요!
      </Typography>

      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col gap-4 relative">
          {recentLogin && (
            <div
              className={cx(
                "absolute right-4 z-10",
                recentLogin === "email" && "top-2",
                recentLogin === "KAKAO" && "top-20",
              )}
            >
              <RecentLoginBubble />
            </div>
          )}
          <Link href="/auth/login/id" className="w-full">
            <Button variant={"primary"} size={"large"} wide>
              아이디 로그인
            </Button>
          </Link>
          <OAuthButton social={SocialType.Kakao}></OAuthButton>
        </div>
      </div>
      <SupportMenu className="mt-4" />
    </div>
  );
};

export default AuthLoginContainer;
