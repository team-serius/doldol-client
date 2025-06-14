import { FindUserInputForm } from "@/interface/auth/find.interface";
import { Button, Typography } from "@ui/components";
import Link from "next/link";

interface Props {
  userData: FindUserInputForm;
}

const ResetPasswordComplete: React.FC<Props> = ({ userData }) => {
  // TODO: 여기서 비밀번호 초기화 로직이 보내져야 함. (useQuery로 비밀번호 초기화 API 호출)
  // 예시로 userData를 콘솔에 출력
  console.log("유저 데이터", userData);

  //   유저 정보에서 소셜 로그인 정보가 있다면 렌더링 수정

  return (
    <>
      <Typography variant="h24" className="my-10">
        이메일로 초기화된
        <br />
        비밀번호를 전송했어요!
      </Typography>

      <Link href={"/auth/login"}>
        <Button variant={"secondary"} size={"large"} wide>
          로그인 하러가기
        </Button>
      </Link>
    </>
  );
};

export default ResetPasswordComplete;
