import { FindIdForm } from '@/interface/auth/find.interface';
import { Button, Typography } from '@ui/components';
import Link from 'next/link';

interface Props {
  userData: FindIdForm;
}

const FindIdComplete: React.FC<Props> = ({ userData }) => {
  // TODO: 여기서 아이디 찾기 로직이 보내져야 함. (useQuery로 아이디 찾기 API 호출 후 결과를 받아와야 함)
  // 예시로 userData를 콘솔에 출력
  console.log('유저 데이터', userData);

  //   유저 정보에서 소셜 로그인 정보가 있다면 렌더링 수정

  return (
    <>
      <Typography variant="h24" className="mt-10">
        돌돌에 가입된 정보를
        <br />
        확인한 결과입니다.
      </Typography>
      <Typography variant="b20-medium" className="mt-10">
        아이디
      </Typography>
      <Typography variant="b16" className="mt-4 mb-20">
        {/* TODO: 마스킹 */}
        {userData ? 'doldo****' : '카카오 로그인으로 가입한 회원입니다.\n카카오로 로그인 해주세요.'}
      </Typography>

      <Link href={'/auth/login'}>
        <Button variant={'secondary'} size={'large'} wide>
          로그인 하러가기
        </Button>
      </Link>
    </>
  );
};

export default FindIdComplete;
