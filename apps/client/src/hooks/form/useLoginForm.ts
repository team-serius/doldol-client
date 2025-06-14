// hooks/useLoginForm.ts
import { CommonLoginForm } from "@/interface/auth/login.interface";
import { useMutation } from "@tanstack/react-query";
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
    mutationFn: async (data: CommonLoginForm) => {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // 쿠키 포함
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorBody = await res.json();
        throw new Error(errorBody.message);
      }

      return res.json();
    },
    mutationKey: ["login", watch("id"), watch("password")],
    onSuccess: () => {
      router.push("/");
    },
    onError: (error: Error) => {
      setError("password", {
        message: error.message || "아이디 혹은 비밀번호가 일치하지 않습니다.",
      });
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
