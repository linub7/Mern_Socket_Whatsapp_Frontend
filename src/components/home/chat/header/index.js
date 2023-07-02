import { getImage } from 'utils/helper';
import HomeChatScreenHeaderLeftSide from './left';
import HomeChatScreenHeaderRightSide from './right';

const HomeChatScreenHeader = ({ name, picture }) => {
  const source = getImage(picture?.url);
  return (
    <div className="h-[59px] dark:bg-dark_bg_2 flex items-center p16 select-none">
      <div className="w-full flex items-center justify-between">
        {/* <div className="flex items-center gap-x-4">
          <button className="btn">
            <img
              src={source}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          </button>
          <div className="flex flex-col">
            <h1 className="dark:text-white text-base font-bold">
              {name?.split(' ')[0]}
            </h1>
            <span className="text-xs dark:text-dark_svg_2">online</span>
          </div>
        </div> */}
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
