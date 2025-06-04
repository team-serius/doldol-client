'use client';

import { CommonLoginForm } from '@/interface/auth/login.interface';
import {
  Button,
  InputField,
  PasswordField,
  TextField,
  Typography,
} from '@ui/components';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginIdPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CommonLoginForm>();

  return (
    <div>
      <Typography variant="b20" className="mt-10">
        로그인
      </Typography>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Typography variant="b16" className="mt-10">
          아이디
        </Typography>
        <TextField
          placeholder="아이디를 입력해주세요."
          error={errors.id ? true : false}
          errorMessage={errors.id?.message}
          gutterBottom
          {...register('id', {
            // required: ERROR_MESSAGES.usernameRequired,
            // validate: (value) => {
            //   if (!EMAIL_REGEX.test(value)) {
            //     return ERROR_MESSAGES.emailInvalid;
            //   }
            // },
          })}
        />
        <PasswordField
          placeholder="비밀번호를 입력해주세요."
          error={errors.password ? true : false}
          errorMessage={errors.password?.message}
          gutterBottom
          {...register('password', {
            // required: ERROR_MESSAGES.passwordRequired,
            // validate: (value) => {
            //   if (!PASSWORD_REGEX.test(value)) {
            //     return ERROR_MESSAGES.passwordInvalid;
            //   }
            // },
          })}
        />
        <Button
          variant={'primary'}
          size={'large'}
          type="submit"
          className="mt-10"
          wide
        >
          로그인
        </Button>
      </form>
    </div>
  );
};

export default LoginIdPage;
