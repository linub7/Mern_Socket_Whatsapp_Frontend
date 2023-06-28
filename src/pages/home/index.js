import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';

import { logoutAction } from 'store/slices/user';

const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    Cookie.remove('token');
    dispatch(logoutAction());
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
