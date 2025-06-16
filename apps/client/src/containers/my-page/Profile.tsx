import { Button, Typography } from '@ui/components';
import { Icon } from '@ui/components/Icon';
import { useState } from 'react';
import PrivacyPolicyContent from '@/components/serviceinfo/PrivacyPolicy';
import TermsOfServiceContent from '@/components/serviceinfo/TermsOfService';
import Link from 'next/link';
import { ArrowSLineRight } from '@icons/ArrowSLineRight';
import { PlusLine } from '@icons/PlusLine';
import { useRouter } from 'next/navigation';
import { Modal } from '@ui/components';

import useMe from '@/hooks/useMe';

import Chip from '@ui/components/Chip/Chip';
import { getColorFromString } from '@/utils/color';

interface Props {
  isLogoVisible?: boolean;
}

// chip 사용해서 이미지 배경색 유저별로 다르게 하기
const profileImageUrl = '/assets/logos/symbol-incase-small.png';

const ProfileContainer = () => {
  type ModalType = 'PP' | 'TS' | null;
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const router = useRouter();

  const { user, onLogout, onWithdraw } = useMe();

  // 유저 정보(프로필 배경색, 이름)
  const userName = user?.name || '돌돌';
  const userBackgroundColor = getColorFromString(user?.name || '');

  // 모달 열기
  const OpenModal = (target: ModalType) => {
    setOpenModal(target);
  };

  // 모달 닫기 - null
  const CloseModal = () => {
    setOpenModal(null);
  };

  // 로그아웃

  const handleLogout = async () => {
    onLogout();
  };

  // 회원 탈퇴
  const handleWithdraw = async () => {
    onWithdraw();
  };

  return (
    <div className=' flex flex-col  items-center w-full'>
      <div className='flex mt-5 justify-between w-full'>
        <div className='flex gap-5 '>
          <Chip
            src={profileImageUrl as string}
            size={56}
            bgColor={userBackgroundColor}
          />
          <Typography variant='b18-bold' className='mt-3'>
            {userName}님
          </Typography>
        </div>
        <Link href={'/my-page/edit-profile'}>
          <Button variant='primary' size='medium' className='mt-2'>
            정보 수정
          </Button>
        </Link>
      </div>
      <div className='w-full mt-5 px-0 border border-2 border-gray-3 py-5 rounded-lg'>
        <Link href={'/paper'}>
          <div className='flex justify-between px-6'>
            <div className='flex gap-10'>
              <Typography variant='b18-bold'>롤링페이퍼</Typography>
            </div>
            <Icon icon={ArrowSLineRight} color='black' />
          </div>
        </Link>
        <div className='flex justify-center gap-4 pt-5'>
          {/* 나중에 경로 지정 */}
          <Link href={'/'}>
            <Button variant='outlined' size='medium' className='!px-12'>
              <Icon icon={PlusLine} color='black' />
              만들기
            </Button>
          </Link>
          <Button variant='outlined' size='medium' className='!px-12'>
            작성한 페이퍼
          </Button>
        </div>
      </div>

      <Typography
        variant='b14-bold'
        className='mt-10 text-left text-gray-2 w-full'
      >
        서비스 정보
      </Typography>
      <div
        className='mt-5 text-left w-full cursor-pointer hover:text-green-1'
        onClick={() => OpenModal('PP')}
      >
        <Typography variant='b18-bold'>개인정보 처리방침</Typography>
      </div>
      <div
        className='mt-5 text-left w-full cursor-pointer hover:text-green-1'
        onClick={() => OpenModal('TS')}
      >
        <Typography variant='b18-bold' className='text-left w-full'>
          서비스 이용 약관
        </Typography>
      </div>

      {openModal === 'PP' && (
        <Modal isOpen={true} onClose={CloseModal}>
          <PrivacyPolicyContent />
        </Modal>
      )}
      {openModal === 'TS' && (
        <Modal isOpen={true} onClose={CloseModal}>
          <TermsOfServiceContent />
        </Modal>
      )}

      {/* 로그아웃 */}
      <Typography
        variant='b18-bold'
        className='mt-20 text-left w-full hover:text-green-1'
        onClick={handleLogout}
      >
        로그아웃
      </Typography>

      {/* 탈퇴 */}
      <Typography
        variant='b18-bold'
        className='mt-3 text-left w-full hover:text-green-1'
        onClick={handleWithdraw}
      >
        탈퇴하기
      </Typography>
    </div>
  );
};

export default ProfileContainer;
