import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import HomeSideBar from 'components/home/sidebar';
import { setStatusAction } from 'store/slices/status';
import { getConversationsHandler } from 'api/conversations';
import {
  getConversationsAction,
  updateActiveConversationAndItsMessagesAction,
} from 'store/slices/chat';
import HomeWelcomeMessage from 'components/home/welcome';
import HomeChatScreen from 'components/home/chat';
import SocketContext from 'context/SocketContext';

const Home = () => {
  const [onlineUsers, setOnlineUsers] = useState([]);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  const socket = useContext(SocketContext);

  // join user into the socket io
  useEffect(() => {
    socket.emit('join', user?.id);
    // get online users
    socket.on('get-online-users', (onlineUsers) => {
      setOnlineUsers(onlineUsers);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // get conversations
  useEffect(() => {
    if (user?.token) handleGetConversations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    socket.on('receive-message', (message) => {
      dispatch(updateActiveConversationAndItsMessagesAction(message));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetConversations = async () => {
    dispatch(setStatusAction('loading'));
    const { err, data } = await getConversationsHandler(user?.token);
    if (err) {
      console.log(err);
      dispatch(setStatusAction('done'));
      return toast.error(err?.message);
    }
    dispatch(setStatusAction('done'));
    dispatch(getConversationsAction(data?.data?.data));
  };

  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center pt-[19px] overflow-hidden">
      <div className="container h-screen flex">
        <HomeSideBar onlineUsers={onlineUsers} />
        {activeConversation?._id ? (
          <HomeChatScreen onlineUsers={onlineUsers} />
        ) : (
          <HomeWelcomeMessage />
        )}
      </div>
    </div>
  );
};

export default Home;
