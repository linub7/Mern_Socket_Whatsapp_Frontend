import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Signin from 'pages/auth/signin';

export default function LoggedInRoutes() {
  const user = useSelector((state) => state.user);
  return user?.token ? <Outlet /> : <Signin />;
}
