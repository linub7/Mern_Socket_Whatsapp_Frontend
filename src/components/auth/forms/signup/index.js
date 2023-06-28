import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import AuthFormHeading from '../heading';
import { signupValidationSchema } from 'utils/validationSchema';
import AuthInput from '../input';
import AuthButton from '../button';
import AuthLink from '../link';
import { setStatusAction } from 'store/slices/status';
import { signupHandler } from 'api/auth';
import { authenticationAction } from 'store/slices/user';
import AuthFormPicture from '../picture';

const SignupForm = ({ title, subtitle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidationSchema),
  });

  const [picture, setPicture] = useState();
  const [readablePicture, setReadablePicture] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    dispatch(setStatusAction('loading'));

    const formData = new FormData();
    formData.append('name', values?.name);
    formData.append('email', values?.email);
    formData.append('status', values?.status);
    formData.append('password', values?.password);
    formData.append('passwordConfirm', values?.passwordConfirm);
    if (picture) {
      formData.append('picture', picture);
    }

    const { err, data } = await signupHandler(formData);
    if (err) {
      console.log(err);
      dispatch(setStatusAction('done'));
      return toast.error(
        err?.message === 'Duplicate fields value entered'
          ? 'This email is in used! Please sign in or enter a new email😟'
          : err?.message
      );
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
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-md space-y-4 p-5 dark:bg-dark_bg_2 rounded-xl">
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
            placeholder={'Status (Optional)'}
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

          <AuthFormPicture
            readablePicture={readablePicture}
            setReadablePicture={setReadablePicture}
            setPicture={setPicture}
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
