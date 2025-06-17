import { EditProfileInputForm } from "@/interface/my-page/edit-profile/edit.interface";
import { useForm } from "react-hook-form";
import useMe from "../useMe";

export const useEditProfileForm = () => {
  const { user } = useMe();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EditProfileInputForm>({
    mode: "onChange",
    defaultValues: {
      name: user?.name ?? "",
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
