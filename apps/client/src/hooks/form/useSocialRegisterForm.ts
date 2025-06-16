import { RegisterSocialForm } from "@/interface/auth/register.interface";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

export const useSocialRegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm<RegisterSocialForm>({
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      termsOfUse: false,
      privacyPolicy: false,
      isOlderThan14: false,
    },
  });

  const onToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setValue(name as keyof RegisterSocialForm, checked!);
  };

  const onToggleAll = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setValue("termsOfUse", checked);
    setValue("privacyPolicy", checked);
    setValue("isOlderThan14", checked);
  };

  const onAddSocialData = (socialId: string, socialType: string) => {
    setValue("socialId", socialId);
    setValue("socialType", socialType);
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onToggle,
    onToggleAll,
    onAddSocialData,
  };
};
