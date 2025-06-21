import { AxiosError, isAxiosError } from "axios";
import { Button, Notify, TextField, Typography } from "@ui/components";
import {
  EMAIL_REGEX,
  KOREAN_NAME_REGEX,
  PHONE_REGEX,
} from "@libs/constants/regex";
import { ERROR_MESSAGES, HELPER_MESSAGES } from "@libs/utils/message";
import { SupportMenu, SupportMenuItem } from "@/components/auth/SupportMenu";
import { postSendEmailCode, postValidateUserInfo } from "@/services/auth";

import { ErrorDTO } from "@/types/error";
import { FindUserInputForm } from "@/interface/auth/find.interface";
import { ValidateUserInfoRequest } from "@/types/auth";
import { useFindUserInputForm } from "@/hooks/form/useFindIdForm";
import { useMutation } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  const { mutate: onVerifyUserInfoApi, isPending: InfoPending } = useMutation({
    mutationFn: (data: ValidateUserInfoRequest) => {
      return postValidateUserInfo(data);
    },
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

  const { mutate: onSendEmailCodeApi, isPending: EmailPending } = useMutation({
    mutationFn: (data: ValidateUserInfoRequest) => {
      return postSendEmailCode(data.email);
    },
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

  const isLoadingAll = InfoPending || EmailPending;

  const onSubmit = (data: FindUserInputForm) => {
    if (isLoadingAll) {
      return;
    }

    onVerifyUserInfoApi(data);
  };

  const getButtonText = () => {
    if (isLoadingAll) return "처리중...";
    return "다음";
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
          disabled={isLoadingAll}
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
          disabled={isLoadingAll}
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
          disabled={isLoadingAll}
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
            isLoadingAll ||
            Object.keys(errors).length > 0
          }
        >
          {getButtonText()}
        </Button>

        <SupportMenu menu={menu as SupportMenuItem[]} className="mt-4" />
      </form>
    </>
  );
};

export default AuthInputUserDataContainer;
