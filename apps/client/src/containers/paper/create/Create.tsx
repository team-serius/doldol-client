import { Button, Notify, TextField, Typography } from "@ui/components";

import { ERROR_MESSAGES } from "@libs/utils/message";
import { Icon } from "@ui/components/Icon";
import { PaperCreateResponse, PaperRequest } from "@/types/paper";
import PopOver from "@ui/components/PopOver/PopOver";
import { QuestionFill } from "@icons/QuestionFill";
import cx from "clsx";
import { useCreatePaperForm } from "@/hooks/form/useCreatePaperForm";
import { postPaper } from "@/services/paper";
import { ErrorDTO } from "@/types/error";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, isAxiosError } from "axios";

interface Props {
  onNext: (data: PaperCreateResponse) => void;
}

const PaperCreateContainer: React.FC<Props> = ({ onNext }) => {
  const { register, handleSubmit, watch, errors } = useCreatePaperForm();

  const onSubmit = async (data: PaperRequest) => {
    onCreatePaperApi(data);
  };

  const { mutate: onCreatePaperApi } = useMutation({
    mutationFn: (data: PaperRequest) => postPaper(data),

    mutationKey: ["createPaper", watch("name"), watch("description")],
    onSuccess: (res) => {
      if (res) {
        Notify.success("롤링페이퍼가 생성되었습니다.");
        onNext(res.data);
      }
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error("롤링페이퍼 생성에 실패했습니다.");
      }
    },
  });

  return (
    <>
      <Typography variant="h24" className="mt-10">
        새로운 롤링페이퍼를 만들고
        <br />
        따뜻한 마음을 돌려보세요!
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="b20-medium" className="mt-10">
          롤링페이퍼 정보
        </Typography>

        <Typography variant="b16" className="mt-10">
          단체 이름
        </Typography>
        <TextField
          placeholder="단체 이름을 입력해주세요. (최대 20자)"
          error={errors.name ? true : false}
          errorMessage={errors.name?.message}
          gutterBottom
          {...register("name", {
            required: ERROR_MESSAGES.usernameRequired,
            validate: (value) => {
              if (watch("name") !== value) {
                return ERROR_MESSAGES.paperNameRequired;
              }
              if (value.length > 20) {
                return "단체 이름은 최대 20자까지 입력 가능합니다.";
              }
            },
          })}
        />

        <Typography variant="b16" className="mt-10">
          설명
        </Typography>
        <TextField
          placeholder="설명을 입력해주세요. (최대 50자)"
          error={errors.description ? true : false}
          errorMessage={errors.description?.message}
          gutterBottom
          {...register("description", {
            required: ERROR_MESSAGES.paperDescriptionRequired,
            validate: (value) => {
              if (value.length > 50) {
                return "설명은 최대 50자까지 입력 가능합니다.";
              }
            },
          })}
        />

        <Typography variant="b16" className="mt-10">
          메시지 공개 날짜 선택
        </Typography>
        <PopOver
          description={
            "메시지 공개 날짜는 받은 메시지를 볼 수 있는 날짜입니다. 해당 날짜 이전에는 메시지를 볼 수 없습니다."
          }
          from="left"
        >
          <div className="flex items-center gap-1.5">
            <Icon icon={QuestionFill} size={18} color="gray-3" />
            <Typography variant={"b12"} color="gray-2" className="mt-0.5">
              메시지 공개 날짜가 뭔가요?
            </Typography>{" "}
          </div>
        </PopOver>
        <input
          type="date"
          className={cx("w-48 mt-2 px-4 py-2 border rounded-lg shadow-lg")}
          min={new Date().toISOString().split("T")[0]} // 오늘 날짜 이후로 선택 가능
          {...register("openDate", {
            required: ERROR_MESSAGES.paperOpenDateRequired,
            validate: (value) => {
              const today = new Date();
              const selectedDate = new Date(value);
              if (selectedDate < today) {
                return "오픈 날짜는 오늘 이후로 선택해주세요.";
              }
            },
          })}
        />
        <Typography color="red-1" className="mt-2" variant="b12">
          {errors.openDate?.message}
        </Typography>

        <Button
          variant="secondary"
          size="large"
          wide
          className="mt-10"
          type="submit"
          disabled={
            watch("name") === "" ||
            watch("description") === "" ||
            watch("openDate") === "" ||
            Object.keys(errors).length > 0
          }
        >
          새로운 롤링페이퍼 생성
        </Button>
      </form>
    </>
  );
};

export default PaperCreateContainer;
