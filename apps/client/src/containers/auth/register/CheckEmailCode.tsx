import { RegisterEmailCodeForm } from '@/interface/auth/register.interface';
import { ERROR_MESSAGES } from '@libs/utils/message';
import { Button, TextField, Typography } from '@ui/components';
import { useForm } from 'react-hook-form';

const CheckEmailCodeContainer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterEmailCodeForm>();

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
          {...register('code', {
            required: ERROR_MESSAGES.phoneNumberCodeInvalid,
          })}
        />
        <Button
          className="shrink-0"
          variant={'primary'}
          size={'medium'}
          disabled={!watch('code')}
          type="button"
          // TODO: API 연동 후 중복 확인 로직 추가
          onClick={() => console.log('인증 완료')}
        >
          인증 완료
        </Button>
      </div>
    </div>
  );
};

export default CheckEmailCodeContainer;
