import { REVIEWS } from "@/common/constants/landing/review";
import React from "react";
import { ReviewBox } from "@/components/landing/ReviewBox";
import { Typography } from "@ui/components";

const ReviewSectionContainer: React.FC = () => {
  return (
    <>
      <section className="mb-48">
        {/* <Typography variant="h24-bold">돌돌's tory</Typography> */}
        <div className="py-24 flex flex-col overflow-hidden bg-primary-light1 shadow-inner transform -skew-y-6">
          <div className="flex flex-col gap-4 transform skew-y-6">
            {REVIEWS.map((review, index) => (
              <ReviewBox
                key={index}
                review={review}
                isRight={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewSectionContainer;
