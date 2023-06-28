const CommonAuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[15px]">
      {/* Container */}
      <div className="flex w-[1600px] mx-auto h-full">{children}</div>
    </div>
  );
};

export default CommonAuthLayout;
