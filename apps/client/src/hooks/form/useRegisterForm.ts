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
    clearErrors,
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

  const { mutate: onCheckIdApi, isPending } = useMutation({
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
    if (isPending) return;

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

  const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue("id", value);
    setValue("idCheck", false);
    if (value.length < 4 || value.length > 20) {
      setError("id", {
        message: "아이디는 4자 이상 20자 이하로 입력해주세요.",
      });
    } else {
      clearErrors("id");
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
    onChangeId,
    isPending,
  };
};
