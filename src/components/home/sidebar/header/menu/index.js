import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import toast from 'react-hot-toast';

import HomeSidebarHeaderMenuItem from './item';
import { logoutAction } from 'store/slices/user';
import { signoutHandler } from 'api/auth';

const HomeSidebarHeaderMenu = ({ token }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const { err } = await signoutHandler(token);
    if (err) {
      console.log(err);
      return toast.error(err?.message);
    }
    Cookie.remove('token');
    dispatch(logoutAction());
    window.location.pathname = '/auth/signin';
  };
  return (
    <div className="absolute top-10 right-1 z-50 dark:bg-dark_bg_2 dark:text-dark_text_1 shadow-md w-52">
      <ul>
        <HomeSidebarHeaderMenuItem title={'New Group'} />
        <HomeSidebarHeaderMenuItem title={'New Community'} />
        <HomeSidebarHeaderMenuItem title={'Starred Message'} />
        <HomeSidebarHeaderMenuItem title={'Settings'} />
        <HomeSidebarHeaderMenuItem title={'Logout'} onClick={handleLogout} />
      </ul>
    </div>
  );
};

export default HomeSidebarHeaderMenu;
