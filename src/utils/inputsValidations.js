import * as yup from 'yup';

/* schema validation for name */
export const nameSchema = yup
  .string()
  .required('This is a required field')
  .nullable(false);

/* schema validation for email */
export const emailSchema = yup
  .string()
  .nullable(false)
  .email('Please Enter an valid Email')
  .required('This is a required field');

/* schema validation for password */
export const passwordSchema = yup
  .string()
  .required('This is a required field')
  .min(6, 'Minimum password length is 6');

/* schema validation for confirm password */
export const confirmPasswordSchema = yup
  .string()
  .required('This is a required field')
  .min(6, 'Minimum password length is 6');
