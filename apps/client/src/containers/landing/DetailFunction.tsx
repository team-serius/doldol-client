import { useState } from 'react';
import { Button, Typography } from '@ui/components';
import { DETAIL } from '@/common/constants/landing/detail';
import Image from 'next/image';

export function DetailFunctions() {
  const [selected, setSelected] = useState<string>('timecapsule');

  const current = DETAIL.find((d) => d.key === selected);

  return (
    <div className='mt-10 flex flex-col items-center'>
      <div className='flex gap-9 mb-8'>
        {DETAIL.map((d) => (
          <Button
            key={d.key}
            variant={selected === d.key ? 'primary' : 'ghost'}
            size='small'
            onClick={() => setSelected(d.key)}
          >
            {d.label}
          </Button>
        ))}
      </div>

      {current && (
        <div className='flex gap-8'>
          {current.type === 'video' ? (
            <video
              src={current.videoPath}
              autoPlay
              loop
              muted
              width={300}
              height={650}
              className='w-48 h-auto rounded-xl shadow-md'
            ></video>
          ) : (
            <Image
              src={current.image as string}
              alt={current.label}
              width={300}
              height={650}
              className='w-48 h-auto rounded-xl shadow-md'
            />
          )}
          <div className='text-center flex-grow'>
            <Typography variant='b14' className='mt-32'>
              {current.description}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}
