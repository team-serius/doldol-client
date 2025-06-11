import React from 'react';
import { Typography } from '@ui/components';
import { REVIEWS } from '@/common/constants/landing/review';

export function ReviewSection() {
  return (
    <div className=" py-12 px-5 flex flex-col items-center relative overflow-hidden bg-primary-light1 shadow-inner transform -skew-y-6">
      <div className="flex flex-col items-center gap-8 transform skew-y-6">
        {REVIEWS.map((review, index) => (
          <div
            key={review.id}
            // 홀수/짝수에 따라 좌우 정렬
            className={`
              bg-white rounded-xl p-5 shadow-md
              ${index % 2 === 0 ? 'self-end md:mr-20' : 'self-start md:ml-20'}
            `}
          >
            <Typography variant="b14" className=" text-gray-600 text-center">
              {review.text}
            </Typography>
            <Typography variant="b14" className=" text-gray-600 text-right">
              {review.user}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
