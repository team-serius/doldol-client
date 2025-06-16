import {
  RegisterForm,
  RegisterSocialForm,
} from "@/interface/auth/register.interface";
import { IS_DEV } from "@/lib/config/env";
import { postOauthRegister } from "@/services/auth";
import { OAuthRegisterRequest } from "@/types/auth";
import { ErrorDTO } from "@/types/error";
import { ERROR_MESSAGES } from "@libs/utils/message";
import { useMutation } from "@tanstack/react-query";
import { Button, Notify, Typography } from "@ui/components";
import { AxiosError, isAxiosError } from "axios";
import Link from "next/link";
import { useEffect } from "react";

interface Props {
  userData: RegisterForm | RegisterSocialForm;
}

const RegisterCompleteContainer: React.FC<Props> = ({ userData }) => {
  const { mutate: onRegister } = useMutation({
    mutationFn: (data: OAuthRegisterRequest) => postOauthRegister(data),

    mutationKey: ["oauthRegister", userData],
    onSuccess: (res) => {
      IS_DEV && console.log("Register Success:", res);
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(ERROR_MESSAGES.oauthRegisterFailed);
      }
    },
  });

  useEffect(() => {
    if (userData) {
      onRegister(userData as OAuthRegisterRequest);
    }
  }, [userData, onRegister]);

  return (
    <>
      <Typography variant="h24" className="my-10">
        가입이 완료됐어요!
        <br />
        돌돌과 함께 마음을 나눠봐요.
      </Typography>
      <Link href={"/auth/login"} className="mt-10 w-full">
        <Button variant={"secondary"} size={"large"} type="submit" wide>
          로그인 하러 가기
        </Button>
      </Link>
    </>
  );
};

export default RegisterCompleteContainer;
