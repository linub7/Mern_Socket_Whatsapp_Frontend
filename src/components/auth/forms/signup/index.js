import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthFormHeading from '../heading';
import { signupValidationSchema } from 'utils/validationSchema';
import AuthInput from '../input';
import AuthButton from '../button';
import AuthLink from '../link';

const SignupForm = ({ title, subtitle }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidationSchema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-y-scroll custom-scrollbar">
      <div className="max-w-md space-y-4 p-5 dark:bg-dark_bg_2 rounded-xl">
        <AuthFormHeading title={title} subtitle={subtitle} />
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-3">
          <AuthInput
            name={'name'}
            type={'text'}
            placeholder={'Full Name'}
            register={register}
            error={errors?.name?.message}
          />
          <AuthInput
            name={'email'}
            type={'text'}
            placeholder={'Email Address'}
            register={register}
            error={errors?.email?.message}
          />
          <AuthInput
            name={'status'}
            type={'text'}
            placeholder={'Status'}
            register={register}
            error={errors?.status?.message}
          />
          <AuthInput
            name={'password'}
            type={'password'}
            placeholder={'Password'}
            register={register}
            error={errors?.password?.message}
          />
          <AuthInput
            name={'passwordConfirm'}
            type={'password'}
            placeholder={'Password Confirm'}
            register={register}
            error={errors?.passwordConfirm?.message}
          />

          <AuthButton btnTitle={'Sign Up'} />
          <AuthLink
            span={'Have an account?'}
            path={'/auth/signin'}
            link={'Sign in'}
          />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
