"use client";

import { ArrowSLineLeft } from "@icons/ArrowSLineLeft";
import { Icon } from "@ui/components/Icon";
import { Logo } from "../common/Logo";
import { useRouter } from "next/navigation";

interface Props {
  title?: string;
  isLogoVisible?: boolean;
  isBlockRedirect?: boolean;
}

export const Header: React.FC<Props> = ({
  title,
  isLogoVisible = false,
  isBlockRedirect,
}) => {
  const router = useRouter();

  const onClickBack = () => {
    if (isBlockRedirect) {
      const confirmed = window.confirm("뒤로 갈거임?");
      if (confirmed) {
        router.back();
      }
    } else {
      router.back();
    }
  };

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 max-w-md w-full flex items-center p-4 bg-primary-light1 text-white min-h-[66px] z-10">
      <div className="flex items-center w-full max-w-md mx-auto">
        {isLogoVisible && <Logo size="small" />}
        {!isLogoVisible && (
          <Icon icon={ArrowSLineLeft} onClick={onClickBack} color="black" />
        )}
        <div className="flex items-center">
          {!isLogoVisible && (
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Logo size="small" />
            </div>
          )}
        </div>
      </div>
      {title && <h1 className="text-xl">{title}</h1>}
    </header>
  );
};
