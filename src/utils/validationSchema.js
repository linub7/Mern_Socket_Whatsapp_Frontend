import * as Yup from 'yup';

export const signupValidationSchema = Yup.object({
  name: Yup.string()
    .trim('Name is required!')
    .min(2, 'Invalid Name')
    .required('Name is required!'),
  email: Yup.string()
    .trim('Email is required!')
    .email('Invalid Email')
    .required('Email is required!'),
  password: Yup.string()
    .trim('Password is required!')
    .min(8, 'Password is too short!')
    .max(30, 'Password is too long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      'Password must contain 1 uppercase, 1 lowercase, 1 special character, 1 number and between 8 and 30 characters!'
    )
    .required('Password is required!'),
  passwordConfirm: Yup.string()
    .trim('Password Confirm is required!')
    .min(8, 'Password Confirm is too shot!')
    .max(30, 'Password Confirm is too long')
    .required('Password Confirm is required!')
    .oneOf([Yup.ref('password')], 'Password must match'),
});

export const signinValidationSchema = Yup.object({
  email: Yup.string()
    .trim('Email is required!')
    .email('Invalid Email')
    .required('Email is required!'),
  password: Yup.string()
    .trim('Password is required!')
    .min(8, 'Password is too shot!')
    .required('Password is required!'),
});

export const lostPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .trim('Email is required!')
    .email('Invalid Email')
    .required('Email is required!'),
});
