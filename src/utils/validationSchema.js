import * as Yup from 'yup';

export const signupValidationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required!')
    .matches(/^[a-zA-Z_ ]*$/, 'No Special character allowed')
    .trim('Name is required!')
    .min(2, 'Password must be at least 2 characters')
    .max(16, 'Password must be less than 17 characters'),
  email: Yup.string()
    .required('Email is required!')
    .trim('Email is required!')
    .email('Invalid Email'),
  status: Yup.string().max(64, 'Status must be between 20 and 64 characters'),
  password: Yup.string()
    .required('Password is required!')
    .trim('Password is required!')
    .min(8, 'Password is too short!')
    .max(30, 'Password is too long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      'Password must contain 1 uppercase, 1 lowercase, 1 special character, 1 number and between 8 and 30 characters!'
    ),
  passwordConfirm: Yup.string()
    .required('Password Confirm is required!')
    .trim('Password Confirm is required!')
    .min(8, 'Password Confirm is too shot!')
    .max(30, 'Password Confirm is too long')
    .oneOf([Yup.ref('password')], 'Password must match'),
});

export const signinValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required!')
    .trim('Email is required!')
    .email('Invalid Email'),
  password: Yup.string()
    .required('Password is required!')
    .trim('Password is required!')
    .min(8, 'Password is too shot!'),
});

export const lostPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required!')
    .trim('Email is required!')
    .email('Invalid Email'),
});
