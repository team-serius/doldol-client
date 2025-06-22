export const RecentLoginBubble = () => {
  return (
    <div className="relative inline-block bg-gray-1 text-white px-2 py-2 rounded-md text-sm">
      최근 로그인
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
        <div className="w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-gray-1"></div>
      </div>
    </div>
  );
};
