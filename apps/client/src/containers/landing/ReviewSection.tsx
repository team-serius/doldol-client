import { REVIEWS } from "@/common/constants/landing/review";
import React from "react";
import { ReviewBox } from "@/components/landing/ReviewBox";
import { Typography } from "@ui/components";

const ReviewSectionContainer: React.FC = () => {
  return (
    <>
      <Typography variant="h24-bold">돌돌's tory</Typography>
      <div className="py-12 px-5 flex flex-col items-center relative overflow-hidden bg-primary-light1 shadow-inner transform -skew-y-6">
        <div className="flex flex-col items-center gap-8 transform skew-y-6">
          {REVIEWS.map((review, index) => (
            <ReviewBox key={index} review={review} isRight={index % 2 === 1} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewSectionContainer;
