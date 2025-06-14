"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { EditProfileInputForm } from "@/interface/my-page/edit-profile/edit.interface";
import { SocialType } from "@/enum/social.enum";
import { getUserInfo } from "@/services/user";
import { MyInfoResponse } from "@/types/user";
// import { Router, useRouter } from "next/router";

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
  const [userData, setUserData] = React.useState<MyInfoResponse | undefined>(
    undefined
  );

  const dummyUser = {
    name: "홍길동",
    socialType: SocialType.Kakao, // 또는 Google, Naver
  };

  //   const router = useRouter();
  const onNext = () => {
    console.log("수정 완료됨 → 마이페이지 이동 예정");
    // router.push("/my-page");
  };

  //   TODO: API연동 후 주석 제거
  //   useEffect(() => {
  //     getUserInfo().then((res) => setUserData(res.data));
  //   });

  //   TODO: 추후 user의 socialType으로 변경
  //   return (
  //     <>{<Content.input onNext={onNext} socialType={userData?.socialType} />}</>
  //   );

  return (
    <>{<Content.input onNext={onNext} socialType={dummyUser.socialType} />}</>
  );
};

export default EditProfilePage;
