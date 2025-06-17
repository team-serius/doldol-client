import { AxiosError, isAxiosError } from "axios";

import { ERROR_MESSAGES } from "@libs/utils/message";
import { ErrorDTO } from "@/types/error";
import { Notify } from "@ui/components";
import { PaperRequest } from "@/types/paper";
import { postPaper } from "@/services/paper";
import router from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

export const useCreatePaperForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<PaperRequest>({
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      openDate: "",
    },
  });

  const { mutate: onCreatePaperApi } = useMutation({
    mutationFn: (data: PaperRequest) => postPaper(data),

    mutationKey: ["createPaper", watch("name"), watch("description")],
    onSuccess: (res) => {
      if (res) {
        Notify.success("롤링페이퍼가 생성되었습니다.");
        // TODO: 서버 응답에 따라 리다이렉트 처리
        // router.push(`/paper/${res.data.id}`);
      }
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error("롤링페이퍼 생성에 실패했습니다.");
      }
    },
  });

  return {
    register,
    handleSubmit,
    watch,
    onCreatePaperApi,
    errors,
  };
};
