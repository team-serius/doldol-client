import { FindUserInputForm } from "@/interface/auth/find.interface";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

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
      name: "",
      phone: "",
      email: "",
    },
  });

  // TODO: 사용자 정보 조회 API 호출
  //     const { mutate: onVerifyCode } = useMutation({
  //     mutationFn: (data: CommonLoginForm) => postLogin(data),
  //     mutationKey: ['login', watch('id'), watch('password')],
  //     onSuccess: () => {
  //       router.push('/');
  //     },
  //     onError: (error: AxiosError) => {
  //       if (isAxiosError<ErrorDTO>(error)) {
  //         setError('password', {
  //           message: error.response?.data.message || '아이디 혹은 비밀번호가 일치하지 않습니다.',
  //         });
  //       }
  //     },
  //   });

  const onSubmit = async (data: FindUserInputForm) => {
    if (!data.name || !data.phone || !data.email) {
      setError("name", { message: "이름을 입력해주세요." });
      setError("phone", { message: "전화번호를 입력해주세요." });
      setError("email", { message: "이메일을 입력해주세요." });
      return;
    }
    // 다음 단계로 진행하는 로직을 여기에 추가
  };

  return {
    register,
    handleSubmit,
    errors,
  };
};
