import { Header } from "./Header";
import cx from "clsx";

interface Props {
  className?: string;
  children?: React.ReactNode;
  isFooterVisible?: boolean;
  isBlockRedirect?: boolean;
  isBackButton?: boolean;
  uplink?: string;
  isFullWidth?: boolean;
}

export const CommonLayout: React.FC<Props> = ({
  className,
  children,
  isFooterVisible,
  isBlockRedirect = false,
  isBackButton = true,
  uplink,
  isFullWidth = false,
}) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Header
        isBlockRedirect={isBlockRedirect}
        isBackButton={isBackButton}
        uplink={uplink}
      />
      <main
        className={cx(
          "max-w-md w-full mx-auto pt-[66px]",
          isFullWidth ? "" : "p-6",
        )}
      >
        {children}
      </main>
      {isFooterVisible && (
        <footer className="bg-gray4 text-white p-4">
          <p>&copy; 2023 MyApp</p>
        </footer>
      )}
    </div>
  );
};
