import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ChatIcon, CommunityIcon, DotsIcon, StoryIcon } from 'assets/svg';
import { getImage } from 'utils/helper';
import HomeSidebarHeaderMenu from './menu';
import HomeMenuItem from 'components/shared/menu-item';

const HomeSidebarHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

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
          <HomeMenuItem>
            <CommunityIcon className={'dark:fill-dark_svg_1'} />
          </HomeMenuItem>
          <HomeMenuItem>
            <StoryIcon className={'dark:fill-dark_svg_1'} />
          </HomeMenuItem>
          <HomeMenuItem>
            <ChatIcon className={'dark:fill-dark_svg_1'} />
          </HomeMenuItem>
          <HomeMenuItem
            className="relative"
            btnStyle={showMenu ? 'bg-dark_hover_1' : ''}
            onClick={() => setShowMenu(!showMenu)}
          >
            <DotsIcon className={'dark:fill-dark_svg_1'} />
            {showMenu ? <HomeSidebarHeaderMenu token={user?.token} /> : null}
          </HomeMenuItem>
        </ul>
      </div>
    </div>
  );
};

export default HomeSidebarHeader;
