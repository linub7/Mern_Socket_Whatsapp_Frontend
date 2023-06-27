import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={'/auth/signup'}>Go Register</Link>
      <Link to={'/auth/signin'}>Go Login</Link>
    </div>
  );
};

export default Home;
