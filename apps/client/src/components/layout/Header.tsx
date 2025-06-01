interface Props {
  title?: string;
  isLogoVisible?: boolean;
}

export const Header: React.FC<Props> = ({ title, isLogoVisible = false }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white bg-black">
      {isLogoVisible && (
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">MyApp</span>
        </div>
      )}
      {title && <h1 className="text-xl">{title}</h1>}
    </header>
  );
};
