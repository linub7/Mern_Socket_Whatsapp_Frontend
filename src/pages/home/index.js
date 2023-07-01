import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie';
import toast from 'react-hot-toast';

import { logoutAction } from 'store/slices/user';
import HomeSideBar from 'components/home/sidebar';
import { setStatusAction } from 'store/slices/status';
import { getConversationsHandler } from 'api/conversations';
import { getConversationsAction } from 'store/slices/chat';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
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

    if (user?.token) handleGetConversations();
  }, [user]);

  const handleLogout = async () => {
    Cookie.remove('token');
    dispatch(logoutAction());
    window.location.pathname = '/auth/signin';
  };
  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      <div className="container h-screen flex">
        {/* <button onClick={handleLogout}>logout</button> */}
        <HomeSideBar />
      </div>
    </div>
  );
};

export default Home;
