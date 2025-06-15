import { Button, Typography } from '@ui/components';
import Modal from '@/components/layout/Modal';
import Image from 'next/image';
import { Icon } from '@ui/components/Icon';
import { useState } from 'react';
import PrivacyPolicyContent from '@/components/serviceinfo/PrivacyPolicy';
import TermsOfServiceContent from '@/components/serviceinfo/TermsOfService';
import Link from 'next/link';
import { ArrowSLineRight } from '@icons/ArrowSLineRight';
import { PlusLine } from '@icons/PlusLine';
import { useRouter } from 'next/navigation';

import { LogoutApi } from '@/services/logout';
import { WithdrawApi } from '@/services/withdraw';

interface Props {
  isLogoVisible?: boolean;
}

// chip 사용해서 이미지 배경색 유저별로 다르게 하기
const profileImageUrl = '/assets/logos/symbol-incase.png';

const ProfileContainer = () => {
  const [isPPModalOpen, setIsPPModalOpen] = useState(false);
  const [isTSModalOpen, setIsTSModalOpen] = useState(false);
  const router = useRouter();

  // 개인정보처리방침
  const PPOpenModal = () => setIsPPModalOpen(true);
  const PPCloseModal = () => setIsPPModalOpen(false);

  // 서비스 이용 약관
  const TSOpenModal = () => setIsTSModalOpen(true);
  const TSCloseModal = () => setIsTSModalOpen(false);

  // 로그아웃
  const handleLogout = async () => {
    try {
      await LogoutApi();
      console.log('로그아웃 성공');

      alert('로그아웃되었습니다.');
      router.push('/');
    } catch (error: any) {
      console.error('로그아웃 오류 발생:', error);

      const errorMessage = error.message || '알 수 없는 오류가 발생했습니다.';
      alert(`로그아웃 실패: ${errorMessage}`);
    }
  };

  // 회원 탈퇴
  const handleWithdraw = async () => {
    if (!window.confirm('정말 탈퇴요? ㅜㅜ')) {
      return;
    }
    try {
      await WithdrawApi();
      console.log('탈퇴 성공');
      alert('이용해주셔서 감사합니다.');
      router.push('/');
    } catch (error: any) {
      console.error('회원 탈퇴 오류 발생: ', error);
      const errorMessage = error.message || '알 수 없는 오류가 발생했습니다.';
      alert(`탈퇴 실패: ${errorMessage}`);
    }
  };

  return (
    <div className=' flex flex-col  items-center w-full'>
      <div className='flex mt-5 justify-between w-full'>
        {/* GET /user/info */}
        <div className='flex gap-6 '>
          <Image
            src={profileImageUrl as string}
            width={100}
            height={100}
            className='w-14 h-14 rounded-full shadow-md'
            alt='기본 이미지'
          />
          <Typography variant='b18-bold' className='mt-3'>
            누구세요
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
        <div className='flex justify-center gap-5 pt-5'>
          <Button variant='outlined' size='medium' className='!px-12'>
            <Icon icon={PlusLine} color='black' />
            만들기
          </Button>
          {/* 롤링페이퍼 개별 조회api : '/papers/{id}' */}
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
        onClick={PPOpenModal}
      >
        <Typography variant='b18-bold'>개인정보 처리방침</Typography>
      </div>
      <div
        className='mt-5 text-left w-full cursor-pointer hover:text-green-1'
        onClick={TSOpenModal}
      >
        <Typography variant='b18-bold' className='text-left w-full'>
          서비스 이용 약관
        </Typography>
      </div>

      <Modal isOpen={isPPModalOpen} onClose={PPCloseModal}>
        <PrivacyPolicyContent />
      </Modal>
      <Modal isOpen={isTSModalOpen} onClose={TSCloseModal}>
        <TermsOfServiceContent />
      </Modal>

      {/* 로그아웃 */}
      <Typography
        variant='b18-bold'
        className='mt-20 text-left w-full hover:text-green-1'
        onClick={handleLogout}
      >
        로그아웃
      </Typography>

      {/* 탈퇴 */}
      {/* POST /auth/withdraw */}
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
