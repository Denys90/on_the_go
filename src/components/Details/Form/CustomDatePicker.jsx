import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ field, form, ...rest }) => {
  return (
    <DatePicker
      {...field}
      {...rest}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => form.setFieldValue(field.name, val)}
      placeholderText="Booking date"
    />
  );
};

export default CustomDatePicker;
