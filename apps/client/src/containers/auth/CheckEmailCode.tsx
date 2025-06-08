import { FindUserInputForm } from '@/interface/auth/find.interface';
import { RegisterEmailCodeForm, RegisterForm } from '@/interface/auth/register.interface';
import { ERROR_MESSAGES } from '@libs/utils/message';
import { Button, TextField, Typography } from '@ui/components';
import { useForm } from 'react-hook-form';

interface Props {
  onNext: (data?: RegisterForm) => void;
  userData: RegisterForm | FindUserInputForm | undefined;
}

const CheckEmailCodeContainer: React.FC<Props> = ({ onNext, userData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterEmailCodeForm>();

  const onSubmit = (data: RegisterEmailCodeForm) => {
    //TODO: 인증번호 확인 로직 추가
    console.log('유저 데이터', userData);
    console.log('인증번호 제출:', data);
    onNext();
  };

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
          onClick={handleSubmit(onSubmit)}
        >
          인증 완료
        </Button>
      </div>
    </div>
  );
};

export default CheckEmailCodeContainer;
