import Image from "next/image";
import { Review } from "@/interface/landing/review.interface";
import { Typography } from "@ui/components";

interface Props {
  review: Review;
  isRight?: boolean;
}

export const ReviewBox: React.FC<Props> = ({ review, isRight }) => {
  return (
    <div
      // 홀수/짝수에 따라 좌우 정렬
      className={`flex gap-1 mb-8 
              ${isRight ? "flex-row self-end mr-auto" : "flex-row-reverse self-start ml-auto"}
            `}
    >
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        {review.image && (
          <Image
            src={review.image}
            alt="mimoticon"
            width={300}
            height={300}
            className="w-20 h-auto"
          />
        )}
        <Typography variant="b14-bold">{review.user}</Typography>
      </div>
      <div className="bg-white rounded-xl shadow-md w-48 h-24 px-3 flex items-center justify-center text-center">
        <Typography variant="b14" className=" text-gray-1 break-words">
          {review.text}
        </Typography>
      </div>
    </div>
  );
};
