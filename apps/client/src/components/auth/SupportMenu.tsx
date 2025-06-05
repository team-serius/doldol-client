import React from 'react';
import { Button, Typography } from '@ui/components';
import Link from 'next/link';
import cx from 'clsx';

type SupportMenuItem = '아이디 찾기' | '비밀번호 초기화' | '회원가입';

interface Props {
  menu?: SupportMenuItem[];
  className?: string;
}

const menuToLinks: Record<SupportMenuItem, string> = {
  '아이디 찾기': '/auth/find/id',
  '비밀번호 초기화': '/auth/reset/password',
  회원가입: '/auth/register',
};

export const SupportMenu: React.FC<Props> = ({
  menu = ['아이디 찾기', '비밀번호 초기화', '회원가입'],
  className,
}) => {
  return (
    <div className={cx('flex justify-center items-center', className)}>
      {menu.map((item, index) => (
        <React.Fragment key={item}>
          <Link href={menuToLinks[item]}>
            <Button variant="secondary-ghost" size="small">
              {item}
            </Button>
          </Link>
          {index < menu.length - 1 && (
            <Typography variant="b14" color="gray-2" className="mx-2">
              |
            </Typography>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
