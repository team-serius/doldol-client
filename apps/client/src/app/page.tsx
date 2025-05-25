'use client';

import { Button } from '@ui/Button/Button';
import { Checkbox } from '@ui/Inputs/Checkbox';
import { InputField } from '@ui/Inputs/InputField';
import { Icon } from '@ui/components/Icon';
import { ArrowSLineUp } from '@icons/ArrowSLineUp';
import Dropdown from '@ui/Dropdown/Dropdown';
import { TEST_SORT } from '@/common/constants/menu';

export default function Home() {
  return (
    <main className="w-full p-8">
      <div className="flex gap-4 pt-8">
        <Button variant={'primary'} size={'small'}>
          테스트
        </Button>
        <Button variant={'primary'} size={'medium'}>
          테스트
        </Button>
        <Button variant={'primary'} size={'large'}>
          테스트
        </Button>
        <Button variant={'primary'} size={'large'} disabled>
          테스트
        </Button>
        <Button variant={'primary'} size={'small'} shape={'circle'}>
          테스트
        </Button>
        <Button variant={'primary'} size={'medium'} shape={'circle'}>
          테스트
        </Button>
        <Button variant={'primary'} size={'large'} shape={'circle'}>
          테스트
        </Button>
      </div>
      <div className="flex gap-4 mt-4">
        <Button variant={'secondary'} size={'small'}>
          테스트
        </Button>
        <Button variant={'secondary'} size={'medium'}>
          테스트
        </Button>
        <Button variant={'secondary'} size={'large'}>
          테스트
        </Button>
        <Button variant={'secondary'} size={'large'} disabled>
          테스트
        </Button>
      </div>
      <div className="flex gap-4 mt-8">
        <Button variant={'error'} size={'small'}>
          테스트
        </Button>
        <Button variant={'error'} size={'medium'}>
          테스트
        </Button>
        <Button variant={'error'} size={'large'}>
          테스트
        </Button>
        <Button variant={'error'} size={'large'} disabled>
          테스트
        </Button>
      </div>
      <div className="flex gap-4 mt-8">
        <Button variant={'outlined'} size={'small'}>
          테스트
        </Button>
        <Button variant={'outlined'} size={'medium'}>
          테스트
        </Button>
        <Button variant={'outlined'} size={'large'}>
          테스트
        </Button>
        <Button variant={'outlined'} size={'large'} disabled>
          테스트
        </Button>
      </div>
      <div className="flex gap-4 mt-8">
        <Button variant={'ghost'} size={'small'}>
          테스트
        </Button>
        <Button variant={'ghost'} size={'medium'}>
          테스트
        </Button>
        <Button variant={'ghost'} size={'large'}>
          테스트
        </Button>
        <Button variant={'ghost'} size={'large'} disabled>
          테스트
        </Button>
      </div>
      <div className="flex gap-4 mt-8">
        <Button variant={'secondary-ghost'} size={'small'}>
          테스트
        </Button>
        <Button variant={'secondary-ghost'} size={'medium'}>
          테스트
        </Button>
        <Button variant={'secondary-ghost'} size={'large'}>
          테스트
        </Button>
        <Button variant={'secondary-ghost'} size={'large'} disabled>
          테스트
        </Button>
      </div>
      <div className="flex gap-4 mt-8">
        <Checkbox label={'테스트'} name={''} onChange={() => alert('테스트')} />
        <Checkbox label={'테스트'} checked name={''} onChange={() => alert('테스트')} />
        <Checkbox label={'테스트'} disabled name={''} onChange={() => alert('테스트')} />
        <InputField name={''}></InputField>
      </div>
      <div className="flex gap-4 mt-8">
        <Dropdown items={TEST_SORT} displayKey="label" valueKey="id" placeholder="정렬" />
      </div>

      <div className="flex w-full justify-center">
        <Button variant={'primary'} size={'large'} shape={'circle'}>
          <Icon icon={ArrowSLineUp} className="text-white" />
        </Button>
      </div>
    </main>
  );
}
