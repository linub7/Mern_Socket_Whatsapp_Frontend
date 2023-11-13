import { CallIcon, DotsIcon, SearchLargeIcon, VideoIcon } from 'assets/svg';
import HomeMenuItem from 'components/shared/menu-item';

const HomeChatScreenHeaderRightSide = ({ handleCallUser }) => {
  return (
    <ul className="flex items-center gap-x-2.5">
      <HomeMenuItem onClick={handleCallUser}>
        <VideoIcon color={'white'} />
      </HomeMenuItem>
      {/* <HomeMenuItem>
        <CallIcon />
      </HomeMenuItem> */}
      <HomeMenuItem>
        <SearchLargeIcon className={'dark:fill-dark_svg_1'} />
      </HomeMenuItem>

      <HomeMenuItem>
        <DotsIcon className={'dark:fill-dark_svg_1'} />
      </HomeMenuItem>
    </ul>
  );
};

export default HomeChatScreenHeaderRightSide;
