import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import HomeChatScreenHeader from './header';
import HomeChatScreenMessages from './messages';
import { setStatusAction } from 'store/slices/status';
import { getConversationMessagesHandler } from 'api/messages';
import { setActiveConversationMessagesAction } from 'store/slices/chat';
import HomeChatScreenActions from './actions';
import {
  getConversationName,
  getConversationPicture,
  getImage,
} from 'utils/helper';

const HomeChatScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { messages, activeConversation } = useSelector((state) => state.chat);

  const conversationImage = getConversationPicture(
    user,
    activeConversation?.users
  );
  const source = getImage(conversationImage);

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

  const convName = getConversationName(user, activeConversation?.users);

  return (
    <div className="relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      <div>
        <HomeChatScreenHeader
          name={convName}
          picture={activeConversation?.picture}
          source={source}
        />
        <HomeChatScreenMessages messages={messages} user={user} />
        <HomeChatScreenActions
          conversationId={activeConversation?._id}
          token={user?.token}
        />
      </div>
    </div>
  );
};

export default HomeChatScreen;
