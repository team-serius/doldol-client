import { Button, Notify, Typography } from "@ui/components";

import Link from "next/link";
import { PaperCreateResponse } from "@/types/paper";
import dayjs from "dayjs";

interface Props {
  data: PaperCreateResponse;
}

const PaperCreateCompleteContainer: React.FC<Props> = ({ data }) => {
  const onCopyLink = () => {
    const link = `${window.location.origin}/invite/${data.code}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        Notify.success("초대 링크가 복사되었습니다.");
      })
      .catch(() => {
        Notify.error("초대 링크 복사에 실패했습니다.");
      });
  };

  return (
    <>
      <Typography variant="h24" className="mt-10">
        새로운 롤링페이퍼가
        <br />
        만들어졌어요!
      </Typography>
      <Typography variant="b20-medium" className="mt-10">
        롤링페이퍼 정보
      </Typography>
      <Typography variant="b16-medium" className="mt-4">
        단체 이름
      </Typography>
      <Typography variant="b16" className="mt-2">
        {data.name}
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
        {dayjs(data.openDate).format("YYYY년 MM월 DD일")}
      </Typography>

      <Button
        variant={"primary"}
        size={"large"}
        wide
        className="mt-10 mb-4"
        onClick={onCopyLink}
      >
        초대 링크 공유하기
      </Button>
      <Link href={"/paper"}>
        <Button variant={"secondary"} size={"large"} wide>
          완료
        </Button>
      </Link>
    </>
  );
};

export default PaperCreateCompleteContainer;
