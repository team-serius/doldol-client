import { FindUserInputForm } from "@/interface/auth/find.interface";
import {
  RegisterForm,
  RegisterSocialForm,
} from "@/interface/auth/register.interface";
import { postVerifyEmailCode } from "@/services/auth";
import { EmailCodeVerifyRequest } from "@/types/auth";
import { ErrorDTO } from "@/types/error";
import { ERROR_MESSAGES, HELPER_MESSAGES } from "@libs/utils/message";
import { useMutation } from "@tanstack/react-query";
import { Button, Notify, TextField, Typography } from "@ui/components";
import { AxiosError, isAxiosError } from "axios";
import { useForm } from "react-hook-form";

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

  const { mutate: onVerifyEmailCodeApi } = useMutation({
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
        Notify.error(ERROR_MESSAGES.emailCodeInvalid);
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
          {...register("code", {
            required: ERROR_MESSAGES.phoneNumberCodeInvalid,
          })}
        />
        <Button
          className="shrink-0"
          variant={"primary"}
          size={"medium"}
          disabled={!watch("code")}
          type="button"
          onClick={handleSubmit(onSubmit)}
        >
          인증 완료
        </Button>
      </div>
    </div>
  );
};

export default CheckEmailCodeContainer;
