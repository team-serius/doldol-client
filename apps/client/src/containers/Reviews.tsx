'use client';

import React from 'react';

export interface Review {
  id: number;
  text: string;
  user: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: '내 맘대로 글꼴이랑 배경색 바꿀 수 있어 좋았어요. 개성 만점 롤링 페이퍼 완성!',
    user: '-사용자1-',
  },
  {
    id: 2,
    text: '이런 아이디어라니! "돌돌" 덕분에 평생 기억할 추억 생겼어요.✨',
    user: '-사용자2-',
  },
  {
    id: 3,
    text: '온라인으로 편하게 메시지 쓰고, 굿즈로 선물해 주니 센스 있다는 칭찬 받았어요.',
    user: '-사용자3-',
  },
];
