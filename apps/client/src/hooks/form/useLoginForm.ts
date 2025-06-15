import { ACCESS_TOKEN, IS_DEV, REFRESH_TOKEN } from "./../../lib/config/env";
// hooks/useLoginForm.ts
import { CommonLoginForm } from "@/interface/auth/login.interface";
import { postLogin } from "@/services/auth";
import { ErrorDTO } from "@/types/error";
import { setTokens } from "@/utils/token";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const useLoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<CommonLoginForm>({
    mode: "onChange",
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const { mutate: onLoginApi } = useMutation({
    mutationFn: (data: CommonLoginForm) => postLogin(data),

    mutationKey: ["login", watch("id"), watch("password")],
    onSuccess: (res) => {
      IS_DEV && console.log("로그인 성공", res.data);
      if (res) {
        setTokens(res.data);
      }
      router.push("/");
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        setError("password", {
          message:
            error.response?.data.message ||
            "아이디 혹은 비밀번호가 일치하지 않습니다.",
        });
      }
    },
  });

  const onSubmit = async (data: CommonLoginForm) => {
    if (!data.id || !data.password) {
      setError("id", { message: "아이디를 입력해주세요." });
      setError("password", { message: "비밀번호를 입력해주세요." });
      return;
    }
    onLoginApi(data);
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
  };
};
