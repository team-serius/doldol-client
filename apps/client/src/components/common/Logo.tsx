import Link from 'next/link';
import Image from 'next/image';

import cx from 'clsx';

interface Props {
  className?: string;
  size?: 'small' | 'large';
}

export const Logo: React.FC<Props> = ({ className, size = 'small' }) => {
  return (
    <>
      <Link
        className={cx('relative block', className, size === 'small' ? 'w-logo h-logo' : 'w-[142px] h-[64px]')}
        href="/"
      >
        <Image src="/assets/logos/symbol-letter-incase.png" alt="돌돌 로고 이미지" fill sizes="71px" priority />
      </Link>
    </>
  );
};
