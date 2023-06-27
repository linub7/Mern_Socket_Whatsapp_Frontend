import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthFormHeading from '../heading';
import { signinValidationSchema } from 'utils/validationSchema';
import AuthInput from '../input';
import AuthButton from '../button';
import AuthLink from '../link';

const SigninForm = ({ title, subtitle }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinValidationSchema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
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
