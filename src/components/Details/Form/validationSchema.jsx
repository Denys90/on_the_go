import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name too short')
    .max(50, 'The name is too long')
    .required('This field is required'),
  email: Yup.string()
    .email('Incorrect email format')
    .required('This field is required'),
  bookingDate: Yup.date()
    .min(new Date(), 'The reservation date cannot be pas')
    .required('This field is required'),
  comment: Yup.string(),
});

export default validationSchema;
