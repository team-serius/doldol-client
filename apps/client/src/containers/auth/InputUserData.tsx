import { SupportMenu, SupportMenuItem } from "@/components/auth/SupportMenu";
import { useFindUserInputForm } from "@/hooks/form/useFindIdForm";
import { FindUserInputForm } from "@/interface/auth/find.interface";
import {
  postCheckEmail,
  postCheckPasswordInfo,
  postSendEmailCode,
  postValidateUserInfo,
} from "@/services/auth";
import { ValidatePasswordInfoRequest } from "@/types/auth";
import { ErrorDTO } from "@/types/error";
import { EMAIL_REGEX } from "@libs/constants/regex";
import { ERROR_MESSAGES, HELPER_MESSAGES } from "@libs/utils/message";
import { useMutation } from "@tanstack/react-query";
import { Button, Notify, TextField, Typography } from "@ui/components";
import { AxiosError, isAxiosError } from "axios";
import { usePathname } from "next/navigation";

interface Props {
  onNext: (data?: FindUserInputForm) => void;
}

const AuthInputUserDataContainer: React.FC<Props> = ({ onNext }) => {
  const pathname = usePathname();

  const menu = pathname.includes("find/id")
    ? ["비밀번호 초기화"]
    : ["아이디 찾기"];

  const { register, errors, handleSubmit, watch, setError } =
    useFindUserInputForm();

  const {
    mutate: onCheckEmailApi,
    isPending: isCheckEmailLoading,
    isSuccess: isCheckEmailSuccess,
  } = useMutation({
    mutationFn: (email: string) => postCheckEmail(email),
    mutationKey: ["validateEmail", watch("email")],
    onSuccess: (res, variables) => {
      onSendEmailCodeApi(variables);
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(error.response?.data.message);
      }
    },
  });

  const {
    mutate: onCheckPasswordInfo,
    isPending: isCheckPasswordInfoPending,
    isSuccess: isCheckPasswordInfoSuccess,
  } = useMutation({
    mutationFn: (data: ValidatePasswordInfoRequest) =>
      postCheckPasswordInfo(data),
    mutationKey: ["validateEmailID", watch("email"), watch("id")],
    onSuccess: (res, variables) => {
      onSendEmailCodeApi(variables.email);
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(error.response?.data.message);
      }
    },
  });

  const {
    mutate: onSendEmailCodeApi,
    isPending: isEmailLoading,
    isSuccess: isSendEmailSuccess,
  } = useMutation({
    mutationFn: (email: string) => postSendEmailCode(email),
    mutationKey: ["sendEmailCode", watch("email")],
    onSuccess: (res, variables) => {
      if (res) {
        Notify.success(HELPER_MESSAGES.emailCodeSentSuccess);
        onNext({ email: variables });
      }
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(ERROR_MESSAGES.emailCodeSentFailed);
      }
    },
  });

  const onSubmit = (data: FindUserInputForm) => {
    if (pathname.includes("find/id")) {
      onCheckEmailApi(data.email);
    } else {
      if (data.id) {
        onCheckPasswordInfo({ id: data.id, email: data.email });
      }
      Notify.error("오류가 발생했습니다.");
    }
  };

  const isLoading =
    isCheckPasswordInfoPending ||
    isCheckPasswordInfoSuccess ||
    isCheckEmailLoading ||
    isCheckEmailSuccess ||
    isEmailLoading ||
    isSendEmailSuccess;

  return (
    <>
      <Typography variant="h24" className="mt-10">
        돌돌에 가입할 때 입력한
        <br />
        정보를 입력해 주세요.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="b20-medium" className="mt-10">
          계정 정보
        </Typography>

        {!pathname.includes("find/id") && (
          <>
            <Typography variant="b16" className="mt-10">
              아이디
            </Typography>
            <TextField
              placeholder="아이디를 입력해주세요."
              error={errors.id ? true : false}
              errorMessage={errors.id?.message}
              gutterBottom
              {...register("id", {
                required: ERROR_MESSAGES.emailCheckInvalid,
              })}
            />
          </>
        )}
        <Typography variant="b16" className="mt-10">
          이메일
        </Typography>
        <TextField
          placeholder="이메일을 입력해주세요."
          error={errors.email ? true : false}
          errorMessage={errors.email?.message}
          gutterBottom
          {...register("email", {
            required: ERROR_MESSAGES.emailRequired,
            validate: (value) => {
              if (!EMAIL_REGEX.test(value)) {
                return ERROR_MESSAGES.emailInvalid;
              }
            },
          })}
        />

        <Button
          variant="secondary"
          size="large"
          wide
          className="mt-10"
          type="submit"
          disabled={
            !watch("email") || Object.keys(errors).length > 0 || isLoading
          }
        >
          {isLoading ? "로딩 중..." : "다음"}
        </Button>

        <SupportMenu menu={menu as SupportMenuItem[]} className="mt-4" />
      </form>
    </>
  );
};

export default AuthInputUserDataContainer;
