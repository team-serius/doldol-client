'use client';

import { useState } from 'react';
import { Button, Typography } from '@ui/components';
import Image from 'next/image';

const sections = [
  {
    key: 'timecapsule',
    label: '타임캡슐',
    image: '/assets/logos/symbol-incase-admin.png',
    description:
      '소중한 이에게 보내는 메시지! 설정한 특정 조건이 충족될 때까지 안전하게 보관하는 타임캡슐 기능입니다.',
  },
  {
    key: 'customizing',
    label: '커스터마이징',
    image: '/assets/logos/symbol-incase-admin.png',
    description:
      '소중한 메시지에 어울리는 글씨체와 배경색으로 특별함을 더할 수 있습니다.',
  },
  {
    key: 'makingkit',
    label: '실물 키트 제작',
    image: '/assets/logos/symbol-incase-admin.png',
    description:
      '소중한 롤링페이퍼를 필름 롤처럼 돌돌 말아 영원히 간직할 수 있는 특별한 굿즈로 제작해 드립니다.',
  },
  // {
  //   key: 'anonymity',
  //   label: '자유로운 닉네임',
  //   image: '/assets/logos/symbol-incase-admin.png',
  //   description:
  //     '어떤 이름으로든 당신의 진심을 담아 메시지를 작성하고, 자유롭게 소통의 즐거움을 누려보세요.',
  // },
];

export function DetailFunctions() {
  const [selected, setSelected] = useState('timecapsule');

  const current = sections.find((s) => s.key === selected);

  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="flex gap-9 mb-8">
        {sections.map((s) => (
          <Button
            key={s.key}
            variant={selected === s.key ? 'primary' : 'ghost'}
            size="small"
            onClick={() => setSelected(s.key)}
          >
            {s.label}
          </Button>
        ))}
      </div>

      {current && (
        <div className="flex md:flex-row gap-8 px-10">
          <Image
            src={current.image}
            alt={current.label}
            width={300}
            height={650}
            className="rounded-xl shadow-md object-cover"
          />
          <div className="text-center md:text-left flex-grow">
            <Typography
              variant="b14"
              className="mt-4 text-gray-600 max-w-xl mx-auto md:mt- md:flex-grow"
            >
              {current.description}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}
