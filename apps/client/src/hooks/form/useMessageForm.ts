import { useForm } from "react-hook-form";
import { CreateMessageRequest } from "@/types/message";

export const useMessageForm = () => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateMessageRequest>({
    mode: "onChange",
    defaultValues: {
      paperId: 0,
      receiverId: 0,
      content: "",
      from: "",
      fontStyle: "font-pretendard",
      backgroundColor: "bg-white",
    },
  });

  return {
    getValues,
    setValue,
    register,
    handleSubmit,
    watch,
    errors,
  };
};
