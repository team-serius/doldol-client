import { useRegisterForm } from "@/hooks/form/useRegisterForm";
import { RegisterForm } from "@/interface/auth/register.interface";
import { ArrowSLineRight } from "@icons/ArrowSLineRight";
import {
  PASSWORD_REGEX,
  PHONE_REGEX,
  EMAIL_REGEX,
} from "@libs/constants/regex";
import { ERROR_MESSAGES } from "@libs/utils/message";
import {
  Typography,
  TextField,
  Button,
  PasswordField,
  Checkbox,
} from "@ui/components";
import { Icon } from "@ui/components/Icon";
import Link from "next/link";

interface Props {
  onNext: (data?: RegisterForm) => void;
}

const CommonRegisterContainer: React.FC<Props> = ({ onNext }) => {
  const {
    register,
    errors,
    handleSubmit,
    watch,
    onToggle,
    onToggleAll,
    onCheckIdDuplicate,
  } = useRegisterForm();

  const onSubmit = (data: RegisterForm) => {
    onNext(data);
  };

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
        <Typography variant="b16" className="mt-4">
          아이디
        </Typography>
        <div className="flex gap-2 items-start">
          <TextField
            placeholder="아이디를 입력해주세요."
            error={errors.id ? true : false}
            errorMessage={errors.id?.message}
            helperMessage={
              watch("idCheck") ? "사용 가능한 아이디입니다." : undefined
            }
            gutterBottom
            {...register("id", {
              required: ERROR_MESSAGES.usernameRequired,
            })}
          />
          <Button
            className="shrink-0"
            variant={"primary"}
            size={"medium"}
            disabled={!watch("id")}
            type="button"
            onClick={onCheckIdDuplicate}
          >
            중복 확인
          </Button>
        </div>

        <Typography variant="b16" className="mt-10">
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

        <Typography variant="b16" className="mt-10">
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

        <Typography variant="b16" className="mt-10">
          이름
        </Typography>
        <TextField
          placeholder="친구들에게 보여질 이름을 정확히 입력해주세요."
          error={errors.name ? true : false}
          errorMessage={errors.name?.message}
          gutterBottom
          {...register("name", {
            required: ERROR_MESSAGES.usernameRequired,
            // validate: (value) => {
            //   if (watch('password') !== value) {
            //     return ERROR_MESSAGES.user;
            //   }
            // },
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
        />
        <div className="my-2 border-b border-gray-3" />
        <div className="flex justify-between items-center">
          <Checkbox
            name={"termsOfUse"}
            label="개인정보 수집 및 이용에 동의합니다. (필수)"
            onToggle={onToggle}
            checked={watch("termsOfUse")}
          />
          <Link href={"naver.com"} target="_blank" className="ml-auto">
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
          />
          <Link href={"naver.com"} target="_blank" className="ml-auto">
            <Icon icon={ArrowSLineRight} size={20} />
          </Link>
        </div>

        <Checkbox
          name={"isOlderThan14"}
          label="만 14세 이상입니다. (필수)"
          onToggle={onToggle}
          checked={watch("isOlderThan14")}
          classes={{ root: "mt-2" }}
        />
        <Button
          variant={"secondary"}
          size={"large"}
          type="submit"
          className="mt-10"
          wide
        >
          다음
        </Button>
      </form>
    </div>
  );
};

export default CommonRegisterContainer;
