import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthFormHeading from '../heading';
import { signinValidationSchema } from 'utils/validationSchema';

const SigninForm = ({ title, subtitle }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinValidationSchema),
  });

  console.log('values: ', watch());
  console.log('errors: ', errors);
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        <AuthFormHeading title={title} subtitle={subtitle} />
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <input type="text" {...register('name')} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
