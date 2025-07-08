"use client";

import { ArrowSLineLeft } from "@icons/ArrowSLineLeft";
import { Icon } from "@ui/components/Icon";
import { Logo } from "../common/Logo";
import { useRouter } from "next/navigation";

interface Props {
  isBlockRedirect?: boolean;
  isBackButton?: boolean;
  uplink?: string;
}

export const Header: React.FC<Props> = ({
  isBlockRedirect,
  isBackButton,
  uplink,
}) => {
  const router = useRouter();

  const onClickBack = () => {
    if (isBlockRedirect) {
      const confirmed = window.confirm(
        "현재 수정중인 사항이 사라집니다. 계속하시겠습니까?",
      );
      if (confirmed) {
        uplink ? router.push(uplink) : router.back();
      }
    } else {
      uplink ? router.push(uplink) : router.back();
    }
  };

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 max-w-md w-full flex items-center p-4 bg-primary-light1 text-white min-h-[66px] z-10">
      <div className="grid grid-cols-3 items-center w-full max-w-md mx-auto">
        <div className="flex justify-start items-center">
          {isBackButton && (
            <Icon icon={ArrowSLineLeft} onClick={onClickBack} color="black" />
          )}
        </div>

        <div className="flex items-center w-full max-w-md mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Logo size="small" />
          </div>
        </div>
      </div>
    </header>
  );
};
