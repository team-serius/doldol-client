import React from 'react';
import { Typography } from '@ui/components';
import { ColorPalette } from '@ui/theme';

interface Review {
  id: number;
  text: string;
  user: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: '내 맘대로 글꼴이랑 배경색 바꿀 수 있어 좋았어요. 개성 만점 롤링 페이퍼 완성!',
    user: '-인어맨-',
  },
  {
    id: 2,
    text: '이런 아이디어라니! "돌돌" 덕분에 평생 남을 추억이 생겼어요.✨',
    user: '-조개공주-',
  },
  {
    id: 3,
    text: '온라인으로 편하게 메시지 쓰고, 굿즈로 선물해 주니 센스 있다는 칭찬 받았어요.',
    user: '-조개구이-',
  },
];

export function ReviewSection() {
  return (
    <div className=" py-12 px-5 flex flex-col items-center relative overflow-hidden bg-primary-light1 shadow-inner transform -skew-y-6">
      <div className="flex flex-col items-center gap-8 w-full max-w-2xl relative z-10 transform skew-y-6">
        {reviews.map((review, index) => (
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
