import PaperInviteContainer from "@/containers/paper/Invite";
import { use } from "react";

const InvitedPaperPage = ({
  params,
}: {
  params: Promise<{ paperId: string }>;
}) => {
  const { paperId } = use(params);
  return <PaperInviteContainer paperId={paperId} />;
};

export default InvitedPaperPage;
