import { Button, Typography } from '@ui/components';
import Image from 'next/image';

const profileImageUrl = '/assets/logos/defaultprofile/profiledoldol.png';
const ProfileContainer = () => {
  return (
    <div className=' flex flex-col  items-center w-full'>
      <div className='flex mt-5 justify-between w-full'>
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
        <Button variant='primary' size='medium' className='mt-2'>
          정보 수정
        </Button>
      </div>
      <div className='w-full mt-5 px-6 border border-2 border-gray-3 py-5 rounded-lg'>
        <div className='flex justify-between'>
          <div className='flex gap-10 '>
            <Typography variant='b18-bold'>롤링페이퍼</Typography>
          </div>
          <Typography variant='b18-bold'>&gt;</Typography>
        </div>
        <div className='flex justify-center gap-8 pt-5'>
          <Button variant='outlined' size='medium' className='!px-12'>
            + 만들기
          </Button>
          <Button variant='outlined' size='medium' className='!px-12'>
            정보 수정
          </Button>
        </div>
      </div>

      <Typography
        variant='b14-bold'
        className='mt-10 text-left text-gray-2 w-full'
      >
        서비스 정보
      </Typography>
      <Typography variant='b18-bold' className='mt-5 text-left w-full'>
        개인정보 처리방침
      </Typography>
      <Typography variant='b18-bold' className='mt-3 text-left w-full'>
        서비스 이용 약관
      </Typography>
      <Typography variant='b18-bold' className='mt-20 text-left w-full'>
        로그아웃
      </Typography>
      <Typography variant='b18-bold' className='mt-3 text-left w-full'>
        탈퇴하기
      </Typography>
    </div>
  );
};
// 로그아웃 : -> landing page
// 탈퇴하기 : /auth/withdraw -> landing page
export default ProfileContainer;
