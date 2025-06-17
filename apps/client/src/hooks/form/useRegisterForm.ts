import { AxiosError, isAxiosError } from "axios";

import { ChangeEvent } from "react";
import { ErrorDTO } from "@/types/error";
import { RegisterForm } from "@/interface/auth/register.interface";
import { postCheckId } from "@/services/auth";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: "onChange",
    defaultValues: {
      id: "",
      idCheck: false,
      password: "",
      passwordConfirm: "",
      name: "",
      phone: "",
      email: "",
      termsOfUse: false,
      privacyPolicy: false,
      isOlderThan14: false,
    },
  });

  const { mutate: onCheckIdApi } = useMutation({
    mutationFn: (id: string) => postCheckId(id),
    mutationKey: ["checkId", watch("id")],
    onSuccess: () => {
      setValue("idCheck", true);
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        setError("id", {
          message: error.response?.data.message || "ID check failed",
        });
      }
    },
  });

  const onCheckIdDuplicate = async () => {
    const id = watch("id");
    if (!id) {
      setError("id", { message: "아이디를 입력해주세요." });
      return;
    }
    onCheckIdApi(id);
  };

  const onToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setValue(name as keyof RegisterForm, checked!);
  };

  const onToggleAll = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setValue("termsOfUse", checked);
    setValue("privacyPolicy", checked);
    setValue("isOlderThan14", checked);
  };

  const onCheckValidation = () => {
    const termsOfUse = watch("termsOfUse");
    const privacyPolicy = watch("privacyPolicy");
    const isOlderThan14 = watch("isOlderThan14");

    if (!termsOfUse) {
      setError("termsOfUse", { message: "이용 약관에 동의해주세요." });
    }
    if (!privacyPolicy) {
      setError("privacyPolicy", {
        message: "개인정보 처리방침에 동의해주세요.",
      });
    }
    if (!isOlderThan14) {
      setError("isOlderThan14", { message: "14세 이상임을 확인해주세요." });
    }
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onToggle,
    onToggleAll,
    onCheckIdDuplicate,
  };
};
