"use client";

import React, { use, useState } from "react";

import dynamic from "next/dynamic";
import { RegisterSocialForm } from "@/interface/auth/register.interface";

type RegisterStage = "register" | "checkCode" | "complete";

const Content = {
  register: dynamic(() => import("@/containers/auth/register/SocialRegister"), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  checkCode: dynamic(() => import("@/containers/auth/CheckEmailCode"), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  complete: dynamic(() => import("@/containers/auth/register/Complete"), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
};

const AuthSocialRegisterPage = ({
  searchParams,
}: {
  searchParams: Promise<{ socialId?: string; socialType?: string }>;
}) => {
  const [stage, setStage] = useState<RegisterStage>("register");
  const [userData, setUserData] = useState<RegisterSocialForm | undefined>(
    undefined,
  );
  const { socialId, socialType } = use(searchParams);

  const onNext = (data?: RegisterSocialForm) => {
    if (data) {
      setUserData(data);
    }

    if (stage === "register") {
      console.log("Register Data:", data);
      setStage("checkCode");
    } else if (stage === "checkCode") {
      setStage("complete");
    }
  };

  return (
    <>
      {stage === "register" && socialId && socialType && (
        <Content.register
          onNext={onNext}
          socialId={socialId}
          socialType={socialType}
        />
      )}
      {stage === "checkCode" && (
        <Content.checkCode onNext={onNext} userData={userData} />
      )}
      {stage === "complete" && userData && (
        <Content.complete userData={userData} />
      )}
    </>
  );
};

export default AuthSocialRegisterPage;
