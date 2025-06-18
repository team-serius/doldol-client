import { Review } from "@/interface/landing/review.interface";
import { Typography } from "@ui/components";

interface Props {
  review: Review;
  isRight?: boolean;
}

export const ReviewBox: React.FC<Props> = ({ review, isRight }) => {
  return (
    <div
      key={review.id}
      // 홀수/짝수에 따라 좌우 정렬
      className={`
              bg-white rounded-xl p-5 shadow-md
              ${isRight ? "self-end md:mr-20" : "self-start md:ml-20"}
            `}
    >
      <Typography
        variant="b14"
        className=" text-gray-1 text-center break-words"
      >
        {review.text}
      </Typography>
      <Typography variant="b14" className=" text-gray-1 text-right">
        {review.user}
      </Typography>
    </div>
  );
};
