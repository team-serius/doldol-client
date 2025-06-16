"use client";
import { SocialType } from "@/enum/social.enum";
import { useEditProfileForm } from "@/hooks/form/useEditProfileForm";
import { EditProfileInputForm } from "@/interface/my-page/edit-profile/edit.interface";
import { IS_DEV } from "@/lib/config/env";
import { patchUserInfo } from "@/services/user";
import { KakaoSymbolLogo } from "@icons/KakaoSymbolLogo";
import { PASSWORD_REGEX } from "@libs/constants/regex";
import { ERROR_MESSAGES, HELPER_MESSAGES } from "@libs/utils/message";
import { Button, Notify, TextField, Toast, Typography } from "@ui/components";
import { Icon } from "@ui/components/Icon";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import useMe from "@/hooks/useMe";
interface Props {
  socialType: SocialType | undefined;
}
const EditProfileContainer: React.FC<Props> = ({ socialType }) => {
  const { register, handleSubmit, watch, errors } = useEditProfileForm();
  const router = useRouter();
  const onSubmit = async (data: EditProfileInputForm) => {
    try {
      await patchUserInfo(data);

      Notify.success(HELPER_MESSAGES.updateSuccess);
      router.replace("/my-page");
    } catch (e) {
      IS_DEV && console.error(e);
      Notify.error(ERROR_MESSAGES.updateFailure);
    }
  };

  // const { user } = useMe();

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
        {socialType === SocialType.Kakao && (
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
          })}
        />
        <Typography variant={"b16"} className="mt-10">
          비밀번호
        </Typography>
        <TextField
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
        <TextField
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

        <Button
          variant="secondary"
          size="large"
          wide
          className="mt-10"
          type="submit"
        >
          완료
        </Button>
      </form>
    </>
  );
};

export default EditProfileContainer;
