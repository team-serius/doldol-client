"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { SocialType } from "@/enum/social.enum";
import { getUserInfo } from "@/services/user";

const Content = {
  input: dynamic(
    () => import("@/containers/my-page/edit-profile/EditProfile"),
    {
      ssr: false,
      loading: () => <div>Loading...</div>, // 스켈레톤 대체
    }
  ),
};

const EditProfilePage = () => {
  const dummyUser = {
    name: "홍길동",
    socialType: SocialType.Kakao,
  };

  //   TODO: API연동 후 주석 제거
  //   useEffect(() => {
  //     getUserInfo().then((res) => setUserData(res.data));
  //   });

  return <>{<Content.input socialType={dummyUser.socialType} />}</>;
};

export default EditProfilePage;
