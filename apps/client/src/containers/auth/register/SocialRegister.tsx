import { AxiosError, isAxiosError } from "axios";
import {
  Button,
  Checkbox,
  Notify,
  TextField,
  Typography,
} from "@ui/components";
import {
  EMAIL_REGEX,
  KOREAN_NAME_REGEX,
  PHONE_REGEX,
} from "@libs/constants/regex";
import { ERROR_MESSAGES, HELPER_MESSAGES } from "@libs/utils/message";

import { ArrowSLineRight } from "@icons/ArrowSLineRight";
import { ErrorDTO } from "@/types/error";
import { Icon } from "@ui/components/Icon";
import Link from "next/link";
import { RegisterSocialForm } from "@/interface/auth/register.interface";
import { postSendEmailCode } from "@/services/auth";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useSocialRegisterForm } from "@/hooks/form/useSocialRegisterForm";

interface Props {
  onNext: (data?: RegisterSocialForm) => void;
  socialType: string;
  socialId: string;
}

const SocialRegisterContainer: React.FC<Props> = ({
  onNext,
  socialType,
  socialId,
}) => {
  const {
    register,
    errors,
    handleSubmit,
    watch,
    onToggle,
    onToggleAll,
    onAddSocialData,
  } = useSocialRegisterForm();

  const { mutate: onSendEmailCodeApi, isPending } = useMutation({
    mutationFn: (data: RegisterSocialForm) => postSendEmailCode(data.email),

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

  const onSubmit = (data: RegisterSocialForm) => {
    if (isPending) {
      return;
    }
    onSendEmailCodeApi(data);
  };

  useEffect(() => {
    onAddSocialData(socialId, socialType);
  }, [socialId, socialType, onAddSocialData]);

  return (
    <div>
      <Typography variant="h24" className="mt-10">
        돌돌에 가입하고
        <br />
        진심을 전해볼까요?
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
          disabled={isPending}
          {...register("name", {
            required: ERROR_MESSAGES.usernameRequired,
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
          disabled={isPending}
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
          disabled={isPending}
          {...register("email", {
            required: ERROR_MESSAGES.emailRequired,
            validate: (value) => {
              if (!EMAIL_REGEX.test(value)) {
                return ERROR_MESSAGES.emailInvalid;
              }
            },
          })}
        />

        <Typography variant="b20-medium" className="mt-10 mb-4">
          약관 동의
        </Typography>
        <Checkbox
          name={"all"}
          label="전체 동의합니다."
          onToggle={onToggleAll}
          checked={
            watch("termsOfUse") &&
            watch("privacyPolicy") &&
            watch("isOlderThan14")
          }
          disabled={isPending}
        />
        <div className="my-2 border-b border-gray-3" />
        <div className="flex justify-between items-center">
          <Checkbox
            name={"termsOfUse"}
            label="개인정보 수집 및 이용에 동의합니다. (필수)"
            onToggle={onToggle}
            checked={watch("termsOfUse")}
            disabled={isPending}
          />
          <Link href={"/policy/privacy"} target="_blank" className="ml-auto">
            <Icon icon={ArrowSLineRight} size={20} />
          </Link>
        </div>

        <div className="flex justify-between items-center">
          <Checkbox
            name={"privacyPolicy"}
            label="이용약관에 동의 합니다. (필수)"
            onToggle={onToggle}
            checked={watch("privacyPolicy")}
            classes={{ root: "mt-2" }}
            disabled={isPending}
          />
          <Link href={"/policy/use"} target="_blank" className="ml-auto">
            <Icon icon={ArrowSLineRight} size={20} />
          </Link>
        </div>

        <Checkbox
          name={"isOlderThan14"}
          label="만 14세 이상입니다. (필수)"
          onToggle={onToggle}
          checked={watch("isOlderThan14")}
          classes={{ root: "mt-2" }}
          disabled={isPending}
        />
        <Button
          variant={"secondary"}
          size={"large"}
          type="submit"
          className="mt-10"
          disabled={
            !watch("name") ||
            !watch("phone") ||
            !watch("email") ||
            !watch("termsOfUse") ||
            !watch("privacyPolicy") ||
            !watch("isOlderThan14") ||
            !watch("socialId") ||
            !watch("socialType") ||
            isPending ||
            Object.keys(errors).length > 0
          }
          wide
        >
          {isPending ? "처리중..." : "다음"}
        </Button>
      </form>
    </div>
  );
};

export default SocialRegisterContainer;
