import { Header } from './Header';

interface Props {
  className?: string;
  children?: React.ReactNode;
  isFooterVisible?: boolean;
  isLogoVisible?: boolean;
}

export const CommonLayout: React.FC<Props> = ({
  className,
  children,
  isLogoVisible = false,
  isFooterVisible,
}) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Header isLogoVisible={isLogoVisible} />
      <main className="max-w-md w-full mx-auto p-6 pt-16">{children}</main>
      {isFooterVisible && (
        <footer className="bg-gray4 text-white p-4">
          <p>&copy; 2023 MyApp</p>
        </footer>
      )}
    </div>
  );
};
