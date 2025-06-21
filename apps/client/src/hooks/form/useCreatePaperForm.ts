import { PaperRequest } from "@/types/paper";
import { useForm } from "react-hook-form";

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

  return {
    register,
    handleSubmit,
    watch,
    errors,
  };
};
