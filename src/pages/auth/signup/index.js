import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <h1 className="text-lg">Signup</h1>
      <Link to={'/auth/signin'}>Go Login</Link>
      <Link to={'/'}>Home</Link>
    </div>
  );
};

export default Signup;
