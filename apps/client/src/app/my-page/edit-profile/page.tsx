"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { SocialType } from "@/enum/social.enum";
import { withAuth } from "@/components/HOC/withAuth";
const Content = {
  input: dynamic(
    () => import("@/containers/my-page/edit-profile/EditProfile"),
    {
      ssr: false,
      loading: () => <div>Loading...</div>, // 스켈레톤 대체
    },
  ),
};

const EditProfilePage = () => {
  // const dummyUser = {
  //   name: "홍길동",
  //   socialType: SocialType.Kakao,
  // };

  return <>{<Content.input />}</>;
};

export default withAuth(EditProfilePage);
