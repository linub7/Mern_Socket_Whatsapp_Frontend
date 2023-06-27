import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div>
      <h1>Signin</h1>
      <Link to={'/auth/signup'}>Go Register</Link>
      <Link to={'/'}>Home</Link>
    </div>
  );
};

export default Signin;
