import { AxiosError, isAxiosError } from "axios";
import { Button, Notify, TextField, Typography } from "@ui/components";
import { ERROR_MESSAGES, HELPER_MESSAGES } from "@libs/utils/message";
import {
  RegisterForm,
  RegisterSocialForm,
} from "@/interface/auth/register.interface";

import { EmailCodeVerifyRequest } from "@/types/auth";
import { ErrorDTO } from "@/types/error";
import { FindUserInputForm } from "@/interface/auth/find.interface";
import { postVerifyEmailCode } from "@/services/auth";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

interface Props {
  onNext: (data?: any) => void;
  userData: RegisterForm | RegisterSocialForm | FindUserInputForm | undefined;
}

const CheckEmailCodeContainer: React.FC<Props> = ({ onNext, userData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EmailCodeVerifyRequest>();

  const { mutate: onVerifyEmailCodeApi, isPending } = useMutation({
    mutationFn: (data: EmailCodeVerifyRequest) => {
      console.log("onVerifyEmailCodeApi", data);
      return postVerifyEmailCode(data);
    },

    mutationKey: ["verifyEmailCode", userData?.email],
    onSuccess: (res) => {
      if (res) {
        Notify.success(HELPER_MESSAGES.emailCodeCheckSuccess);
        onNext();
      }
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(error.response?.data.message);
      }
    },
  });

  const onSubmit = (data: EmailCodeVerifyRequest) => {
    if (userData?.email) {
      onVerifyEmailCodeApi({ email: userData.email, code: data.code });
    }
  };

  return (
    <div>
      <Typography variant="h24" className="mt-10">
        이메일로 전송된
        <br />
        인증번호를 입력해주세요!
      </Typography>
      <Typography variant="b16" className="mt-4">
        인증번호
      </Typography>
      <div className="flex gap-2 items-start">
        <TextField
          placeholder="인증번호를 입력해주세요."
          error={errors.code ? true : false}
          errorMessage={errors.code?.message}
          gutterBottom
          disabled={isPending}
          {...register("code", {
            required: ERROR_MESSAGES.phoneNumberCodeInvalid,
          })}
        />
        <Button
          className="shrink-0"
          variant={"primary"}
          size={"medium"}
          disabled={!watch("code") || isPending}
          type="button"
          onClick={handleSubmit(onSubmit)}
        >
          {isPending ? "인증 중..." : "인증 완료"}
        </Button>
      </div>
    </div>
  );
};

export default CheckEmailCodeContainer;
