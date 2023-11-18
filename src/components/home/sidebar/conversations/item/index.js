import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  getConversationName,
  getConversationPicture,
  getImage,
} from 'utils/helper';
import HomeSideBarConversationItemLeftSide from './left';
import HomeSideBarConversationItemRightSide from './right';
import HomeSideBarBorderBottom from '../../border-bottom';
import { DEFAULT_GROUP_CHAT_PICTURE } from 'constants';

const HomeSideBarConversationItem = ({
  onlineUsers,
  activeConversationId,
  item,
  onClick = () => {},
}) => {
  const [isOnline, setIsOnline] = useState(false);
  const [source, setSource] = useState();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const conversationImage = !item?.isGroup
      ? getConversationPicture(user, item?.users)
      : undefined;
    setSource(
      item?.isGroup ? DEFAULT_GROUP_CHAT_PICTURE : getImage(conversationImage)
    );

    return () => {};
  }, [item?.isGroup]);

  useEffect(() => {
    for (const el of item?.users) {
      if (el?.id !== user?.id) {
        const status = onlineUsers?.find(
          (onlineUser) => onlineUser?.userId === el?.id
        );
        const result = status !== undefined ? true : false;
        setIsOnline(result);
      }
    }
    return () => {};
  }, [onlineUsers?.length]);

  const convName =
    item?.name !== 'conversation name'
      ? item?.name
      : getConversationName(user, item?.users);

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
          online={isOnline}
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
