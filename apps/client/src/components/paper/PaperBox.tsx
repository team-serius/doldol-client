import { Paper } from "@/types/paper";
import { ArrowSLineRight } from "@icons/ArrowSLineRight";
import { convertDateToDateString } from "@libs/utils";
import { Typography } from "@ui/components";
import { Icon } from "@ui/components/Icon";
import cx from "clsx";
import Link from "next/link";

interface Props {
  data: Paper;
  className?: string;
}

const PaperBox: React.FC<Props> = ({ data, className }) => {
  return (
    <div className={cx("p-6 border border-gray-3 rounded-lg", className)}>
      <Link
        href={`/paper/${data.paperId}`}
        className="flex justify-between items-center gap-2"
      >
        <Typography variant={"b16-bold"}>{data.name}</Typography>
        <Icon icon={ArrowSLineRight} size={16} />
      </Link>
      <Typography variant={"b14"} className="mt-2">
        {data.description}
      </Typography>
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-1 items-center">
          <Typography variant="b12" color="gray-2">
            참여 인원{" "}
            <span className="font-medium">{data.participantsCount}</span>
          </Typography>
          <Typography variant="b12" color="gray-2">
            ·
          </Typography>
          <Typography variant="b12" color="gray-2">
            작성된 메시지{" "}
            <span className="font-medium">{data.messageCount}</span>
          </Typography>
        </div>
        <Typography variant="b12" color="gray-2">
          ~{" "}
          {data.openDate ? convertDateToDateString(data.openDate) : "기한 없음"}
        </Typography>
      </div>
    </div>
  );
};

export default PaperBox;
