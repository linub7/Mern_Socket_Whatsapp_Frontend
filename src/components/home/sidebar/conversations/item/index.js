import { useSelector } from 'react-redux';

import {
  getConversationName,
  getConversationPicture,
  getImage,
} from 'utils/helper';
import HomeSideBarConversationItemLeftSide from './left';
import HomeSideBarConversationItemRightSide from './right';
import HomeSideBarBorderBottom from '../../border-bottom';

const HomeSideBarConversationItem = ({
  activeConversationId,
  item,
  onClick = () => {},
}) => {
  const { user } = useSelector((state) => state.user);
  const convName = getConversationName(user, item?.users);
  const conversationImage = getConversationPicture(user, item?.users);
  const source = getImage(conversationImage);

  return (
    <li
      className={`list-none h-[72px] w-full dark:bg-dark_bg_1 hover:${
        activeConversationId === item?._id ? '' : 'dark:bg-dark_bg_2'
      } cursor-pointer dark:text-dark_text_1 px-[10px] ${
        activeConversationId === item?._id ? 'dark:bg-dark_hover_1' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative w-full flex items-center justify-between py-[10px]">
        <HomeSideBarConversationItemLeftSide
          source={source}
          name={item?.name}
          message={item?.latestMessage?.message}
          convName={convName}
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
