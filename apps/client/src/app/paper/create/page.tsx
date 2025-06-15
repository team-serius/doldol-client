"use client";

import { withAuth } from "@/components/HOC/withAuth";
import dynamic from "next/dynamic";
import { useState } from "react";

type PaperCreateStage = "create" | "complete";

const Content = {
  create: dynamic(() => import("@/containers/paper/create/Create"), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
  complete: dynamic(() => import("@/containers/paper/create/Complete"), {
    ssr: false,
    loading: () => <div>Loading...</div>, // 스켈레톤 대체
  }),
};

const PaperCreatePage = () => {
  const [stage, setStage] = useState<PaperCreateStage>("create");

  const onNext = () => {
    setStage("complete");
  };

  return (
    <div className="px-6 pb-10">
      {stage === "create" && <Content.create onNext={onNext} />}
      {stage === "complete" && <Content.complete />}
    </div>
  );
};

export default withAuth(PaperCreatePage);
