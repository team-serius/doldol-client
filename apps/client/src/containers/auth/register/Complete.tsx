import { Button, Typography } from '@ui/components';
import Link from 'next/link';

const RegisterCompleteContainer: React.FC = () => {
  return (
    <>
      <Typography variant="h24" className="my-10">
        가입이 완료됐어요!
        <br />
        돌돌과 함께 마음을 나눠봐요.
      </Typography>
      <Link href={'/auth/login'} className="mt-10 w-full">
        <Button variant={'secondary'} size={'large'} type="submit" wide>
          로그인 하러 가기
        </Button>
      </Link>
    </>
  );
};

export default RegisterCompleteContainer;
