import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function NotLoggedInRoutes() {
  const user = useSelector((state) => state.user);
  console.log(user?.token !== null);
  return user?.token ? <Navigate to={'/'} /> : <Outlet />;
}
