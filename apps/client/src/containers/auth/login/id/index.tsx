import { SupportMenu } from "@/components/auth/SupportMenu";
import { useLoginForm } from "@/hooks/form/useLoginForm";
import { ERROR_MESSAGES } from "@libs/utils/message";
import { Typography, TextField, PasswordField, Button } from "@ui/components";

const AuthLoginIdContainer = () => {
  const { register, handleSubmit, watch, errors, onSubmit } = useLoginForm();

  return (
    <div>
      <Typography variant="b20" className="mt-10">
        로그인
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="b16" className="mt-10">
          아이디
        </Typography>
        <TextField
          placeholder="아이디를 입력해주세요."
          error={errors.id ? true : false}
          errorMessage={errors.id?.message}
          gutterBottom
          {...register("id", {
            required: ERROR_MESSAGES.usernameRequired,
          })}
        />
        <Typography variant="b16">비밀번호</Typography>
        <PasswordField
          placeholder="비밀번호를 입력해주세요."
          error={errors.password ? true : false}
          errorMessage={errors.password?.message}
          gutterBottom
          {...register("password", {
            required: ERROR_MESSAGES.passwordRequired,
          })}
        />
        <Button
          variant={"primary"}
          size={"large"}
          type="submit"
          className="mt-10"
          wide
          disabled={
            !watch("id") || !watch("password") || Object.keys(errors).length > 0
          }
        >
          로그인
        </Button>
      </form>
      <SupportMenu className="mt-4" />
    </div>
  );
};

export default AuthLoginIdContainer;
