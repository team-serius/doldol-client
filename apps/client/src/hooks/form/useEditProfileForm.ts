import { EditProfileInputForm } from "@/interface/my-page/edit-profile/edit.interface";
import { useForm } from "react-hook-form";

export const useEditProfileForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EditProfileInputForm>({
    mode: "onChange",
    defaultValues: {
      name: "",
      password: "",
      passwordConfirm: "",
    },
  });

  return {
    register,
    handleSubmit,
    watch,
    errors,
  };
};
