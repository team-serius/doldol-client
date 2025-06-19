import { FindUserInputForm } from "@/interface/auth/find.interface";
import { getFindId, patchResetPassword } from "@/services/auth";
import { ErrorDTO } from "@/types/error";
import { useMutation } from "@tanstack/react-query";
import { Button, Notify, Typography } from "@ui/components";
import { AxiosError, isAxiosError } from "axios";
import Link from "next/link";
import { useEffect } from "react";

interface Props {
  userData: FindUserInputForm;
}

const ResetPasswordComplete: React.FC<Props> = ({ userData }) => {
  const { mutate: onResetPassword } = useMutation({
    mutationFn: (email: string) => patchResetPassword(email),

    mutationKey: ["resetPassword", userData.email],
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(error.response?.data.message);
      }
    },
  });

  useEffect(() => {
    if (userData) {
      onResetPassword(userData.email);
    }
  }, [userData, onResetPassword]);

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
