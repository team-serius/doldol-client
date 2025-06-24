"use client";

import { withAuth } from "@/components/HOC/withAuth";
import PaperInviteContainer from "@/containers/paper/Invite";
import { use } from "react";

const InvitedPaperPage = ({
  params,
}: {
  params: Promise<{ code: string }>;
}) => {
  const { code } = use(params);
  return <PaperInviteContainer code={code} />;
};

export default withAuth(InvitedPaperPage, true);
