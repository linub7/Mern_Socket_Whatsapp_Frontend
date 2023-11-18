import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import HomeChatScreenHeader from './header';
import HomeChatScreenMessages from './messages';
import { setStatusAction } from 'store/slices/status';
import { getConversationMessagesHandler } from 'api/messages';
import { setActiveConversationMessagesAction } from 'store/slices/chat';
import HomeChatScreenActions from './actions';
import {
  countOnlineUsersInGroupConversation,
  getConversationName,
  getConversationPicture,
  getImage,
  getReceiverId,
} from 'utils/helper';
import FilesPreview from './preview/files';
import { DEFAULT_GROUP_CHAT_PICTURE } from 'constants';

const HomeChatScreen = ({
  onlineUsers,
  isTyping,
  setIsTyping,
  handleCallUser,
}) => {
  const [userStatus, setUserStatus] = useState('offline');

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { messages, activeConversation, files } = useSelector(
    (state) => state.chat
  );

  const conversationImage = getConversationPicture(
    user,
    activeConversation?.users
  );
  const source = activeConversation?.isGroup
    ? DEFAULT_GROUP_CHAT_PICTURE
    : getImage(conversationImage);

  useEffect(() => {
    const handleGetActiveConversationMessages = async () => {
      dispatch(setStatusAction('loading'));
      const { err, data } = await getConversationMessagesHandler(
        activeConversation?._id,
        user?.token
      );
      if (err) {
        console.log(err);
        dispatch(setStatusAction('done'));
        return toast.error(err?.message);
      }
      dispatch(setActiveConversationMessagesAction(data?.data?.data));
    };

    if (activeConversation?._id) handleGetActiveConversationMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeConversation?._id]);

  const receiverId = getReceiverId(user, activeConversation?.users);

  useEffect(() => {
    const status = onlineUsers?.find(
      (onlineUser) => onlineUser?.userId === receiverId
    );
    const result = status !== undefined ? 'online' : 'offline';
    setUserStatus(result);

    return () => {};
  }, [receiverId, onlineUsers?.length]);

  const convName =
    activeConversation?.name !== 'conversation name'
      ? activeConversation?.name
      : getConversationName(user, activeConversation?.users);

  const onlineUsersCountInGroupConversation =
    countOnlineUsersInGroupConversation(onlineUsers, activeConversation?.users);

  return (
    <div className="relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      <div>
        <HomeChatScreenHeader
          name={convName}
          source={source}
          userStatus={
            activeConversation?.isGroup
              ? `${onlineUsersCountInGroupConversation} online users`
              : userStatus
          }
          handleCallUser={handleCallUser}
        />
        {files?.length > 0 ? (
          <FilesPreview
            conversationId={activeConversation?._id}
            token={user?.token}
          />
        ) : (
          <>
            <HomeChatScreenMessages
              messages={messages}
              user={user}
              isTyping={isTyping}
            />
            <HomeChatScreenActions
              conversationId={activeConversation?._id}
              token={user?.token}
              isTyping={isTyping}
              setIsTyping={setIsTyping}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeChatScreen;
