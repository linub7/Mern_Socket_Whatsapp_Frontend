import HomeChatScreenHeaderLeftSide from './left';
import HomeChatScreenHeaderRightSide from './right';

const HomeChatScreenHeader = ({ name, source, userStatus }) => {
  return (
    <div className="h-[59px] dark:bg-dark_bg_2 flex items-center p16 select-none">
      <div className="w-full flex items-center justify-between">
        <HomeChatScreenHeaderLeftSide
          name={name}
          source={source}
          userStatus={userStatus}
        />
        <HomeChatScreenHeaderRightSide />
      </div>
    </div>
  );
};

export default HomeChatScreenHeader;
