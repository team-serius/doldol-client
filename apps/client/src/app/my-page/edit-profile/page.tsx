"use client";

import React from "react";
import dynamic from "next/dynamic";
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
  return <Content.input />;
};

export default withAuth(EditProfilePage);
