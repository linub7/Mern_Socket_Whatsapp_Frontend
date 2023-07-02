import { getImage } from 'utils/helper';
import HomeSideBarConversationItemLeftSide from './left';
import HomeSideBarConversationItemRightSide from './right';
import HomeSideBarBorderBottom from '../../border-bottom';

const HomeSideBarConversationItem = ({ item, onClick = () => {} }) => {
  const source = getImage(item?.picture?.url);

  return (
    <li
      className="list-none h-[72px] w-full dark:bg-dark_bg_1 hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_text_1 px-[10px]"
      onClick={onClick}
    >
      <div className="relative w-full flex items-center justify-between py-[10px]">
        <HomeSideBarConversationItemLeftSide
          source={source}
          name={item?.name}
          message={item?.latestMessage?.message}
        />
        <HomeSideBarConversationItemRightSide
          messageCreatedDate={item?.latestMessage?.createdAt}
        />
      </div>
      <HomeSideBarBorderBottom />
    </li>
  );
};

export default HomeSideBarConversationItem;
