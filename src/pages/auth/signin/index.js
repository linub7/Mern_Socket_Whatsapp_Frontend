import SigninForm from 'components/auth/forms/signin';
import CommonAuthLayout from 'components/auth/layout';

const Signin = () => {
  return (
    <CommonAuthLayout>
      <SigninForm
        title={'Welcome Back'}
        subtitle={'It is nice to see you here again!'}
      />
    </CommonAuthLayout>
  );
};

export default Signin;
