"use client";

import { Button, Notify, Typography } from "@ui/components";

import dayjs from "dayjs";
import useMe from "@/hooks/useMe";
import { useRouter } from "next/navigation";

const TEST_DATA = {
  paperId: "12345",
  name: "우리의 추억",
  description: "친구들과의 소중한 순간들을 기록하는 롤링페이퍼",
  openDate: dayjs("2025-10-04T11:45:00Z"),
};

interface Props {
  paperId: string;
}

const PaperInviteContainer: React.FC<Props> = ({ paperId }) => {
  const router = useRouter();

  // FIXME: 데이터 페칭 이후 삭제
  console.log("PaperInviteContainer", paperId);
  const data = TEST_DATA; // Replace with actual data fetching logic

  const { user } = useMe();

  const onClickParticipate = () => {
    if (!user) {
      Notify.error("서비스를 이용하려면 로그인이 필요해요.");
      router.push("/auth/login");
      return;
    } else {
      // TODO: 참여하기 API 호출
      Notify.success("롤링페이퍼에 참여했어요!");
      router.push(`/paper/${data.paperId}`);
    }
  };

  return (
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
      <Typography variant="b16-medium" className="mt-10">
        설명
      </Typography>
      <Typography variant="b16" className="mt-2">
        {data.description}
      </Typography>

      <Typography variant="b16-medium" className="mt-10">
        메시지 공개 날짜
      </Typography>
      <Typography variant="b16" className="mt-2">
        {data.openDate.format("YY년 MM월 DD일")}
      </Typography>

      <Button
        variant={"primary"}
        size={"large"}
        wide
        className="mt-10"
        onClick={onClickParticipate}
      >
        참여하기
      </Button>
    </>
  );
};

export default PaperInviteContainer;
