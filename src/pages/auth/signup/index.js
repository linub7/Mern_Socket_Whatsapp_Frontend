import SignupForm from 'components/auth/forms/signup';
import CommonAuthLayout from 'components/auth/layout';

const Signup = () => {
  return (
    <CommonAuthLayout>
      <SignupForm
        title={'Welcome'}
        subtitle={'Enjoy realtime chat with your friends'}
      />
    </CommonAuthLayout>
  );
};

export default Signup;
