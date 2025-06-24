"use client";

import {
  Button,
  Notify,
  PasswordField,
  TextField,
  Typography,
} from "@ui/components";
import { ERROR_MESSAGES, HELPER_MESSAGES } from "@libs/utils/message";

import { EditProfileInputForm } from "@/interface/my-page/edit-profile/edit.interface";
import { Icon } from "@ui/components/Icon";
import Image from "next/image";
import { KakaoSymbolLogo } from "@icons/KakaoSymbolLogo";
import { PASSWORD_REGEX } from "@libs/constants/regex";
import { SocialType } from "@/enum/social.enum";
import { patchUserInfo } from "@/services/user";
import { useEditProfileForm } from "@/hooks/form/useEditProfileForm";
import { useRouter } from "next/navigation";

import useMe from "@/hooks/useMe";
import { useMutation } from "@tanstack/react-query";
import { ErrorDTO } from "@/types/error";
import { AxiosError, isAxiosError } from "axios";
import { UpdateUserInfoRequest } from "@/types/user";
import { KOREAN_NAME_REGEX } from "@libs/constants/regex";

const EditProfileContainer = () => {
  const { register, handleSubmit, watch, errors } = useEditProfileForm();
  const router = useRouter();
  const { refetch } = useMe();

  const { mutate: onEditProfileApi } = useMutation({
    mutationFn: (data: UpdateUserInfoRequest) => patchUserInfo(data),
    mutationKey: ["updateInfo", watch("name"), watch("password")],
    onSuccess: (res) => {
      if (res) {
        Notify.success(HELPER_MESSAGES.userInfoUpdateSuccess);
        refetch();
        router.replace("/my-page");
      }
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(ERROR_MESSAGES.updateFailure);
      }
    },
  });

  const onSubmit = (data: EditProfileInputForm) => {
    const payload: UpdateUserInfoRequest = isSocialUser
      ? { name: data.name }
      : { name: data.name, password: data.password };
    onEditProfileApi(payload);
  };

  const { user } = useMe();

  const isSocialUser = user?.socialType
    ? user?.socialType.toUpperCase() === SocialType.Kakao
    : false;
  const isNameValid = watch("name");
  const isPasswordFieldValid = watch("password") && watch("passwordConfirm");

  const isFormValid = isSocialUser
    ? isNameValid
    : isNameValid && isPasswordFieldValid;

  return (
    <>
      <div className="flex justify-between items-center w-96 h-20 my-8 mx-auto">
        <div className="flex items-center justify-center bg-gray-3 rounded-full p-2 w-16 h-16">
          <Image
            src="/assets/logos/symbol-incase.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        {isSocialUser && (
          <div className="flex items-center justify-center w-8 h-8 bg-[#FEE500] rounded-full ml-4">
            <Icon icon={KakaoSymbolLogo} className="w-6 h-6" />
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={"b16"} className="mt-10">
          이름
        </Typography>
        <TextField
          placeholder="친구들에게 보여질 이름을 정확히 입력해주세요."
          error={errors.name ? true : false}
          errorMessage={errors.name?.message}
          gutterBottom
          {...register("name", {
            required: ERROR_MESSAGES.usernameRequired,
            validate: (value) => {
              if (!KOREAN_NAME_REGEX.test(value)) {
                return ERROR_MESSAGES.usernameInvalid;
              }
            },
          })}
        />
        {!isSocialUser && (
          <>
            <Typography variant={"b16"} className="mt-10">
              비밀번호
            </Typography>
            <PasswordField
              placeholder="8~30자리 영대·소문자, 숫자, 특수문자 조합"
              error={errors.password ? true : false}
              errorMessage={errors.password?.message}
              gutterBottom
              {...register("password", {
                required: ERROR_MESSAGES.passwordRequired,
                validate: (value) => {
                  if (!PASSWORD_REGEX.test(value)) {
                    return ERROR_MESSAGES.passwordInvalid;
                  }
                },
              })}
            />
            <Typography variant={"b16"} className="mt-10">
              비밀번호 확인
            </Typography>
            <PasswordField
              placeholder="비밀번호를 한 번 더 입력해주세요."
              error={errors.passwordConfirm ? true : false}
              errorMessage={errors.passwordConfirm?.message}
              gutterBottom
              {...register("passwordConfirm", {
                required: ERROR_MESSAGES.passwordRequired,
                validate: (value) => {
                  if (watch("password") !== value) {
                    return ERROR_MESSAGES.passwordConfirmInvalid;
                  }
                },
              })}
            />
          </>
        )}

        <Button
          variant="secondary"
          size="large"
          wide
          className="mt-10"
          type="submit"
          disabled={!isFormValid || Object.keys(errors).length > 0}
        >
          완료
        </Button>
      </form>
    </>
  );
};

export default EditProfileContainer;
