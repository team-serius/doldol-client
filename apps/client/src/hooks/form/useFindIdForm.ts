import { FindUserInputForm } from "@/interface/auth/find.interface";
import { useForm } from "react-hook-form";

export const useFindUserInputForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<FindUserInputForm>({
    mode: "onChange",
    defaultValues: {
      id: "",
      email: "",
    },
  });

  return {
    register,
    handleSubmit,
    errors,
    watch,
    setError,
  };
};
