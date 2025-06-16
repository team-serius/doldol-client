"use client";

import { IS_DEV } from "@/lib/config/env";
import { useRouter } from "next/navigation";
import { JSX, useEffect } from "react";
import useMe from "src/hooks/useMe";
import { getTokens } from "src/utils/token";

export function withNoAuth<P>(Page: React.ComponentType<P>) {
  function NoAuthComponent(props: any) {
    const { user } = useMe();

    const router = useRouter();

    useEffect(() => {
      if (!getTokens().accessToken) {
        IS_DEV && console.log("accessToken이 없습니다.");
        return;
      }
      if (!user) {
        IS_DEV && console.log("user가 없습니다.");
        return;
      }

      // User 가 있을 경우 대시보드 페이지로 이동
      router.replace("/");
    }, [user, router]);

    return <Page {...props} />;
  }

  return NoAuthComponent;
}
