import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import HomeSideBarConversationItem from './item';
import { setStatusAction } from 'store/slices/status';
import { openOrCreateConversationHandler } from 'api/conversations';
import {
  makeEmptyFilesAction,
  setActiveConversationAction,
} from 'store/slices/chat';
import { getReceiverId } from 'utils/helper';
import SocketContext from 'context/SocketContext';

const HomeSideBarConversations = ({ onlineUsers }) => {
  const socket = useContext(SocketContext);

  const dispatch = useDispatch();
  const { conversations, activeConversation } = useSelector(
    (state) => state.chat
  );
  const { user } = useSelector((state) => state.user);

  const handleClickConversation = async (item) => {
    if (activeConversation?._id === item?._id) return;
    dispatch(makeEmptyFilesAction());
    const receiverId = getReceiverId(user, item?.users);

    dispatch(setStatusAction('loading'));
    const { err, data } = await openOrCreateConversationHandler(
      receiverId,
      user?.token
    );
    if (err) {
      console.log(err);
      dispatch(setStatusAction('done'));
      return toast.error(err?.message);
    }
    // make sure to use await even vscode says it doesn't effect
    await dispatch(setStatusAction('done'));
    await dispatch(setActiveConversationAction(data?.data?.data));
    socket.emit('join-conversation', data?.data?.data?._id);
  };

  return (
    <div className="conversations custom-scrollbar">
      <ul>
        {conversations
          ?.filter(
            (conversation) =>
              conversation?.latestMessage ||
              conversation?._id === activeConversation?._id
          )
          .map((item, index) => (
            <HomeSideBarConversationItem
              key={index}
              item={item}
              onClick={() => handleClickConversation(item)}
              activeConversationId={activeConversation?._id}
              onlineUsers={onlineUsers}
            />
          ))}
      </ul>
    </div>
  );
};

export default HomeSideBarConversations;
