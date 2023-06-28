import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStatusAction } from 'store/slices/status';
import Cookie from 'js-cookie';
import toast from 'react-hot-toast';

import AuthFormHeading from '../heading';
import { signinValidationSchema } from 'utils/validationSchema';
import AuthInput from '../input';
import AuthButton from '../button';
import AuthLink from '../link';
import { signinHandler } from 'api/auth';
import { authenticationAction } from 'store/slices/user';

const SigninForm = ({ title, subtitle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinValidationSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    dispatch(setStatusAction('loading'));

    const { err, data } = await signinHandler(values);
    if (err) {
      console.log(err);
      dispatch(setStatusAction('done'));
      return toast.error(err?.message);
    }
    Cookie.set('token', JSON.stringify(data?.token));
    const payload = {
      id: data?.data?.user?.id,
      name: data?.data?.user?.name,
      email: data?.data?.user?.email,
      status: data?.data?.user?.status,
      picture: data?.data?.user?.picture?.url,
      token: data?.token,
    };
    dispatch(setStatusAction('done'));
    dispatch(authenticationAction(payload));
    toast.success('Signed Up successfully 👌');
    navigate('/');
  };
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        <AuthFormHeading title={title} subtitle={subtitle} />
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <AuthInput
            name={'email'}
            type={'text'}
            placeholder={'Email Address'}
            register={register}
            error={errors?.email?.message}
          />
          <AuthInput
            name={'password'}
            type={'password'}
            placeholder={'Password'}
            register={register}
            error={errors?.password?.message}
          />

          <AuthButton btnTitle={'Sign in'} />
          <AuthLink
            span={'Do not have an account?'}
            path={'/auth/signup'}
            link={'Sign Up'}
          />
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
