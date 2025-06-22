import { SupportMenu, SupportMenuItem } from "@/components/auth/SupportMenu";
import { useFindUserInputForm } from "@/hooks/form/useFindIdForm";
import { FindUserInputForm } from "@/interface/auth/find.interface";
import { postSendEmailCode, postValidateUserInfo } from "@/services/auth";
import { ValidateUserInfoRequest } from "@/types/auth";
import { ErrorDTO } from "@/types/error";
import {
  PHONE_REGEX,
  EMAIL_REGEX,
  KOREAN_NAME_REGEX,
} from "@libs/constants/regex";
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

  const { mutate: onVerifyUserInfoApi } = useMutation({
    mutationFn: (data: ValidateUserInfoRequest) => postValidateUserInfo(data),
    mutationKey: [
      "validateUserInfo",
      watch("email"),
      watch("phone"),
      watch("name"),
    ],
    onSuccess: (res, variables) => {
      onSendEmailCodeApi(variables);
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(error.response?.data.message);
      }
    },
  });

  const { mutate: onSendEmailCodeApi } = useMutation({
    mutationFn: (data: ValidateUserInfoRequest) =>
      postSendEmailCode(data.email),
    mutationKey: ["sendEmailCode", watch("email")],
    onSuccess: (res, variables) => {
      if (res) {
        Notify.success(HELPER_MESSAGES.emailCodeSentSuccess);
        onNext(variables);
      }
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(ERROR_MESSAGES.emailCodeSentFailed);
      }
    },
  });

  const onSubmit = (data: FindUserInputForm) => {
    onVerifyUserInfoApi(data);
  };

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

        <Typography variant="b16" className="mt-10">
          이름
        </Typography>
        <TextField
          placeholder="친구들에게 보여질 이름을 정확히 입력해주세요."
          error={errors.name ? true : false}
          errorMessage={errors.name?.message}
          gutterBottom
          {...register("name", {
            required: ERROR_MESSAGES.usernameInvalid,
            validate: (value) => {
              if (!KOREAN_NAME_REGEX.test(value)) {
                return ERROR_MESSAGES.usernameInvalid;
              }
            },
          })}
        />

        <Typography variant="b16" className="mt-10">
          휴대 전화 번호
        </Typography>
        <TextField
          placeholder="휴대 전화 번호를 입력해주세요."
          error={errors.phone ? true : false}
          errorMessage={errors.phone?.message}
          gutterBottom
          {...register("phone", {
            required: ERROR_MESSAGES.phoneNumberRequired,
            validate: (value) => {
              if (!PHONE_REGEX.test(value)) {
                return ERROR_MESSAGES.phoneNumberInvalid;
              }
            },
          })}
        />

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
            !watch("name") ||
            !watch("phone") ||
            !watch("email") ||
            Object.keys(errors).length > 0
          }
        >
          다음
        </Button>

        <SupportMenu menu={menu as SupportMenuItem[]} className="mt-4" />
      </form>
    </>
  );
};

export default AuthInputUserDataContainer;
