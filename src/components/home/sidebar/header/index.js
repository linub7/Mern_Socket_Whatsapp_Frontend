import { useSelector } from 'react-redux';

import { ChatIcon, CommunityIcon, DotsIcon, StoryIcon } from 'assets/svg';
import { getImage } from 'utils/helper';
import HomeSidebarHeaderItem from './item';

const HomeSidebarHeader = () => {
  const { user } = useSelector((state) => state.user);
  const source = getImage(user.picture);
  return (
    <div className="h-[50px] dark:bg-dark_bg_2 flex items-center p16">
      <div className="w-full flex items-center justify-between">
        <button className="btn">
          <img
            src={source}
            alt={user.name}
            className="w-full h-full rounded-full object-cover"
          />
        </button>
        <ul className="flex items-center gap-x-2.5">
          <HomeSidebarHeaderItem>
            <CommunityIcon className={'dark:fill-dark_svg_1'} />
          </HomeSidebarHeaderItem>
          <HomeSidebarHeaderItem>
            <StoryIcon className={'dark:fill-dark_svg_1'} />
          </HomeSidebarHeaderItem>
          <HomeSidebarHeaderItem>
            <ChatIcon className={'dark:fill-dark_svg_1'} />
          </HomeSidebarHeaderItem>
          <HomeSidebarHeaderItem>
            <DotsIcon className={'dark:fill-dark_svg_1'} />
          </HomeSidebarHeaderItem>
        </ul>
      </div>
    </div>
  );
};

export default HomeSidebarHeader;
