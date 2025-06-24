"use client";

import { Button, Notify, Typography } from "@ui/components";

import useMe from "@/hooks/useMe";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getPaperInvite, postJoinPaper } from "@/services/paper";
import { HELPER_MESSAGES } from "@libs/utils/message";
import { AxiosError, isAxiosError } from "axios";
import { ErrorDTO } from "@/types/error";
import Image from "next/image";
import dayjs from "dayjs";

interface Props {
  code: string;
}

const PaperInviteContainer: React.FC<Props> = ({ code }) => {
  const router = useRouter();

  const { user } = useMe();

  const { data: paperData, isLoading } = useQuery({
    queryKey: ["paperInvite", code],
    queryFn: async () => {
      const response = await getPaperInvite(code);
      return response.data;
    },
    retry: false,
  });

  const {
    mutate: onJoinPaperApi,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (invitationCode: string) => {
      return postJoinPaper(invitationCode);
    },
    mutationKey: ["joinPaper", code],
    onSuccess: (res) => {
      if (res) {
        Notify.success(HELPER_MESSAGES.joinPaperSuccess);
        router.push(`/paper/${paperData?.paperId}`);
      }
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(error.response?.data.message);
      }
    },
  });

  const onClickParticipate = () => {
    if (!user) {
      Notify.error("서비스를 이용하려면 로그인이 필요해요.");
      router.push("/auth/login");
      return;
    } else {
      onJoinPaperApi(code);
    }
  };

  const isLoadingAll = isSuccess || isPending;

  return (
    <>
      {isLoading && <Typography variant="b16">로딩 중...</Typography>}
      {!paperData && !isLoading && (
        <div className="flex flex-col items-center justify-center h-full mt-10">
          <Image
            src="/assets/images/empty.png"
            alt="빈 롤링페이퍼 이미지"
            width={80}
            height={80}
            className="mb-4"
            priority
          />
          <Typography variant="h24" className="mt-10">
            요청한 롤링페이퍼가 없거나 <br />
            이미 참여한 롤링페이퍼에요!
          </Typography>
        </div>
      )}
      {paperData && (
        <>
          <Typography element="h1" variant={"h24"} className="mt-10">
            롤링페이퍼 초대장이 <br />
            도착했어요!
          </Typography>
          <Typography element="h2" variant="b20-medium" className="mt-10">
            롤링페이퍼 정보
          </Typography>
          <Typography element="h3" variant="b16-medium" className="mt-4">
            단체 이름
          </Typography>
          <Typography variant="b16" className="mt-2">
            {paperData?.name}
          </Typography>

          <Typography element="h3" variant="b16-medium" className="mt-10">
            설명
          </Typography>
          <Typography variant="b16" className="mt-2">
            {paperData?.description}
          </Typography>

          <Typography element="h3" variant="b16-medium" className="mt-10">
            메시지 공개 날짜
          </Typography>
          <Typography variant="b16" className="mt-2">
            {dayjs(paperData?.openDate).format("YY년 MM월 DD일")}
          </Typography>

          <Button
            variant={"primary"}
            size={"large"}
            wide
            className="mt-10"
            onClick={onClickParticipate}
            disabled={isLoadingAll}
          >
            참여하기
          </Button>
        </>
      )}
    </>
  );
};

export default PaperInviteContainer;
