"use client";

import { withAuth } from "@/components/HOC/withAuth";
import PaperListContainer from "@/containers/paper/PaperList";
import { ArrowSLineUp } from "@icons/ArrowSLineUp";
import { Button } from "@ui/components";

const PaperPage = () => {
  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="px-6 pb-10">
      <Button
        className="fixed bottom-6 right-6 z-10"
        variant={"primary"}
        size={"medium"}
        shape="circle"
        onClick={onScrollToTop}
        icon={{ DefaultComponent: ArrowSLineUp }}
      />
      <PaperListContainer />
    </div>
  );
};

export default withAuth(PaperPage);
