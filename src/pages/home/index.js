import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import HomeSideBar from 'components/home/sidebar';
import { setStatusAction } from 'store/slices/status';
import { getConversationsHandler } from 'api/conversations';
import { getConversationsAction } from 'store/slices/chat';
import HomeWelcomeMessage from 'components/home/welcome';
import HomeChatScreen from 'components/home/chat';
import SocketContext from 'context/SocketContext';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('join', user?.id);
  }, [user]);

  useEffect(() => {
    if (user?.token) handleGetConversations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
        <HomeSideBar />
        {activeConversation?._id ? <HomeChatScreen /> : <HomeWelcomeMessage />}
      </div>
    </div>
  );
};

export default Home;
