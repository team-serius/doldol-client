import { Typography } from '@ui/components';
import { MouseEventHandler } from 'react';
import { SocialType } from 'src/enum/social.enum';

import Image from 'next/image';
import { SocialTheme } from '@/interface/auth/social.interface';
import cx from 'clsx';
import { API_URI } from 'src/lib/config/env';

interface Props {
  social: SocialType;
  isRegister?: boolean;
}

export const OAuthButton: React.FC<Props> = ({ social, isRegister }) => {
  const Theme: SocialTheme = {
    kakao: {
      label: '카카오',
      background: 'bg-[#FEE500]',
      textColor: 'black',
    },
    naver: {
      label: '네이버',
      background: 'bg-[#03C75A]',
      textColor: 'white',
    },
    google: {
      label: 'Google',
      background: 'border border-gray-2',
      textColor: 'black',
    },
  };

  const onClickSocialButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    const social = e.currentTarget.dataset.social;

    window.open(`${API_URI}/api/v2/auth/social/${social}`, '_self');
  };

  return (
    <button
      className={cx('relative flex justify-center items-center w-full h-[56px] rounded-lg', Theme[social].background)}
      onClick={onClickSocialButton}
      type="button"
      data-social={social}
    >
      <div className="absolute left-4 top-4">
        <div className="relative w-[24px] h-[24px]">
          <Image
            src={`/assets/logos/social/${social}.png`}
            alt="소셜 로고 이미지"
            fill
            className="left-4"
            sizes="24px"
          />
        </div>
      </div>
      <Typography variant="b18-medium" color={Theme[social].textColor}>
        {Theme[social].label} {isRegister ? '계정으로 가입하기' : '로그인'}
      </Typography>
    </button>
  );
};
