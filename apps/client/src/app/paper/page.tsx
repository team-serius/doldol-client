"use client";

import { withAuth } from "@/components/HOC/withAuth";
import PaperListContainer from "@/containers/paper/PaperList";

const PaperPage = () => {
  return (
    <div className="px-6 pb-10">
      <PaperListContainer />
    </div>
  );
};

export default withAuth(PaperPage);
