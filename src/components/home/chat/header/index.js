import { getImage } from 'utils/helper';
import HomeChatScreenHeaderLeftSide from './left';
import HomeChatScreenHeaderRightSide from './right';

const HomeChatScreenHeader = ({ name, picture }) => {
  const source = getImage(picture?.url);
  return (
    <div className="h-[59px] dark:bg-dark_bg_2 flex items-center p16 select-none">
      <div className="w-full flex items-center justify-between">
        <HomeChatScreenHeaderLeftSide
          name={name}
          source={source}
          status={'online'}
        />
        <HomeChatScreenHeaderRightSide />
      </div>
    </div>
  );
};

export default HomeChatScreenHeader;
