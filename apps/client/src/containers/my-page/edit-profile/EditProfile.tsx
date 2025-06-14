import { SocialType } from "@/enum/social.enum";
import { useEditProfileForm } from "@/hooks/form/useEditProfileForm";
import { EditProfileInputForm } from "@/interface/my-page/edit-profile/edit.interface";
import { GoogleSymbolLogo } from "@icons/GoogleSymbolLogo";
import { KakaoSymbolLogo } from "@icons/KakaoSymbolLogo";
import { NaverSymbolLogo } from "@icons/NaverSymbolLogo";
// import { Logo } from "@icons/Logo";
import { PASSWORD_REGEX } from "@libs/constants/regex";
import { ERROR_MESSAGES } from "@libs/utils/message";
import { Button, TextField, Typography } from "@ui/components";
import { Icon } from "@ui/components/Icon";
import Image from "next/image";

interface Props {
  onNext: () => void;
  socialType: SocialType | undefined;
}
const EditProfileContainer: React.FC<Props> = ({ onNext, socialType }) => {
  const { register, handleSubmit, watch, errors } = useEditProfileForm();

  const onSubmit = async (data: EditProfileInputForm) => {
    try {
      //   await patchUserInfo(data);
      alert("수정 완료");
      onNext();
    } catch (e) {
      console.error("수정 실패", e);
      alert("수정 실패");
    }
  };
  //   const onSubmit = (data: EditProfileInputForm) => {
  //     onNext(data);
  //   };

  return (
    <>
      <div className="flex justify-between items-center w-96 my-8 mx-auto">
        <Image
          src="/assets/logos/symbol-incase-profile.png"
          alt="Logo"
          width={60}
          height={60}
        ></Image>
        {socialType === SocialType.Kakao && (
          <Icon icon={KakaoSymbolLogo} className="w-6 h-6" />
        )}
        {socialType === SocialType.Google && (
          <Icon icon={GoogleSymbolLogo} className="w-6 h-6" />
        )}
        {socialType === SocialType.Naver && (
          <Icon icon={NaverSymbolLogo} className="w-6 h-6" />
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
