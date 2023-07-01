import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';

import { logoutAction } from 'store/slices/user';
import HomeSideBar from 'components/home/sidebar';

const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    Cookie.remove('token');
    dispatch(logoutAction());
    window.location.pathname = '/auth/signin';
  };
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      <div className="container min-h-screen flex">
        <HomeSideBar />
      </div>
    </div>
  );
};

export default Home;
