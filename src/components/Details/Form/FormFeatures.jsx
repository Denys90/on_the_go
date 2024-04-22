import { Formik, Form } from 'formik';

import {
  ButtonSubmit,
  ContainerCalendar,
  Error,
  Input,
  InputComment,
  Svg,
} from './FormFeatures.styled';
import CustomDatePicker from './CustomDatePicker';
import svg from 'assets/icons/symbol-defs.svg';
import validationSchema from './validationSchema';

const FormFeatures = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name"></label>
              <Input type="text" name="name" placeholder="Name" />
              <Error name="name" component="div" />
            </div>

            <div>
              <label htmlFor="email"></label>
              <Input type="email" name="email" placeholder="Email" />
              <Error name="email" component="div" />
            </div>

            <ContainerCalendar>
              <Svg>
                <use href={`${svg}#icon-calendar`}></use>
              </Svg>
              <label htmlFor="bookingDate"></label>
              <Input
                type="date"
                name="bookingDate"
                component={CustomDatePicker}
              />
              <Error name="bookingDate" component="div" />
            </ContainerCalendar>

            <div>
              <label htmlFor="comment"></label>
              <InputComment
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
              <Error name="comment" component="div" />
            </div>

            <ButtonSubmit type="submit" disabled={isSubmitting}>
              Send
            </ButtonSubmit>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormFeatures;
