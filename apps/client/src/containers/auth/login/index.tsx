import { OAuthButton } from "@/components/auth/OAuthButton";
import { SupportMenu } from "@/components/auth/SupportMenu";
import { Logo } from "@/components/common/Logo";
import { SocialType } from "@/enum/social.enum";
import { Typography, Button } from "@ui/components";
import Link from "next/link";

// TODO: 최근 로그인 관련 내용 추가 (LocalStorage)

const AuthLoginContainer = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <Logo size="large" className="mt-10" />
      <Typography variant={"h24-bold"} className="text-center my-10">
        돌돌에 로그인하고
        <br />
        서로의 마음을 확인해보세요!
      </Typography>
      <div className="flex flex-col w-full gap-4">
        <Link href="/auth/login/id" className="w-full">
          <Button variant={"primary"} size={"large"} wide>
            아이디 로그인
          </Button>
        </Link>
        <OAuthButton social={SocialType.Kakao}></OAuthButton>
      </div>
      <SupportMenu className="mt-4" />
    </div>
  );
};

export default AuthLoginContainer;
