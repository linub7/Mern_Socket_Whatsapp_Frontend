import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import HomeChatScreenHeader from './header';
import HomeChatScreenMessages from './messages';
import { setStatusAction } from 'store/slices/status';
import { getConversationMessagesHandler } from 'api/messages';
import { setActiveConversationMessagesAction } from 'store/slices/chat';

const HomeChatScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { messages, activeConversation } = useSelector((state) => state.chat);

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

  return (
    <div className="relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      <div>
        <HomeChatScreenHeader
          name={activeConversation?.name}
          picture={activeConversation?.picture}
        />
        <HomeChatScreenMessages messages={messages} user={user} />
      </div>
    </div>
  );
};

export default HomeChatScreen;
