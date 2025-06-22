"use client";

import { AxiosError, isAxiosError } from "axios";
import { Button, Notify, Typography } from "@ui/components";
import { useEffect, useState } from "react";

import { ErrorDTO } from "@/types/error";
import { FindUserInputForm } from "@/interface/auth/find.interface";
import Link from "next/link";
import { getFindId } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

interface Props {
  userData: FindUserInputForm;
}

const FindIdComplete: React.FC<Props> = ({ userData }) => {
  const [result, setResult] = useState<string | null>(null);

  const { mutate: onFindIdApi } = useMutation({
    mutationFn: (email: string) => getFindId(email),

    mutationKey: ["findId", userData.email],
    onSuccess: (res) => {
      setResult(res.data.id);
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(error.response?.data.message);
      }
    },
  });

  useEffect(() => {
    if (userData) {
      onFindIdApi(userData.email);
    }
  }, [userData, onFindIdApi]);

  return (
    <>
      <Typography variant="h24" className="mt-10">
        돌돌에 가입된 정보를
        <br />
        확인한 결과입니다.
      </Typography>
      <Typography variant="b20-medium" className="mt-10">
        아이디
      </Typography>
      <Typography variant="b16" className="mt-4 mb-20">
        {result ?? "소셜 로그인으로 가입한 회원입니다."}
      </Typography>

      <Link href={"/auth/login"}>
        <Button variant={"secondary"} size={"large"} wide>
          로그인 하러가기
        </Button>
      </Link>
    </>
  );
};

export default FindIdComplete;
