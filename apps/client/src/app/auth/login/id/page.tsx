'use client';

import { SupportMenu } from '@/components/auth/SupportMenu';
import { CommonLoginForm } from '@/interface/auth/login.interface';
import { PASSWORD_REGEX } from '@libs/constants/regex';
import { ERROR_MESSAGES } from '@libs/utils/message';
import { Button, PasswordField, TextField, Typography } from '@ui/components';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginIdPage: React.FC = () => {
  const {
    register,
    handleSubmit,
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
            required: ERROR_MESSAGES.usernameRequired,
          })}
        />
        <Typography variant="b16">비밀번호</Typography>
        <PasswordField
          placeholder="비밀번호를 입력해주세요."
          error={errors.password ? true : false}
          errorMessage={errors.password?.message}
          gutterBottom
          {...register('password', {
            required: ERROR_MESSAGES.passwordRequired,
            validate: (value) => {
              if (!PASSWORD_REGEX.test(value)) {
                return ERROR_MESSAGES.passwordInvalid;
              }
            },
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
      <SupportMenu className="mt-4" />
    </div>
  );
};

export default LoginIdPage;
