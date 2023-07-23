import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { io } from 'socket.io-client';

import Signin from 'pages/auth/signin';
import Signup from 'pages/auth/signup';
import Home from 'pages/home';
import NotLoggedInRoutes from 'routes/NotLoggedInRoutes';
import LoggedInRoutes from 'routes/LoggedInRoutes';
import NotFound from 'pages/not-found';
import SocketContext from 'context/SocketContext';

const socket = io(
  process.env.REACT_APP_DEVELOPMENT
    ? process.env.REACT_APP_BACKEND_DEVELOPMENT_URL?.split('/api/v1')[0]
    : process.env.REACT_APP_BACKEND_PRODUCTION_URL?.split('/api/v1')[0]
);

const App = () => {
  return (
    <SocketContext.Provider value={socket}>
      <Toaster />
      <div className="dark">
        <Routes>
          <Route element={<NotLoggedInRoutes />}>
            <Route path="/auth/signin" element={<Signin />} />
            <Route path="/auth/signup" element={<Signup />} />
          </Route>
          <Route element={<LoggedInRoutes />}>
            <Route path="/" element={<Home socket={socket} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </SocketContext.Provider>
  );
};

export default App;
