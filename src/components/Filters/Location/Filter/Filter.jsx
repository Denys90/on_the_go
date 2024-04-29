import { Formik, Form } from 'formik';
import {
  CheckBoxButton,
  CheckBoxInput,
  CheckBoxLabel,
  ContainerForEquipment,
  FirstTitle,
  SecondTitle,
} from './Filter.styled';

export const Filter = () => {
  const initialValues = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  };

  return (
    <div>
      <FirstTitle>Filters</FirstTitle>
      <SecondTitle>Vehicle equipment</SecondTitle>
      <ContainerForEquipment>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {({ values, setFieldValue }) => (
            <Form>
              <CheckBoxButton>
                <CheckBoxInput
                  type="checkbox"
                  name="option1"
                  checked={values.option1}
                  onChange={(e) => setFieldValue('option1', e.target.checked)}
                />
                <CheckBoxLabel option={values.option1}>Option 1</CheckBoxLabel>
              </CheckBoxButton>

              <CheckBoxButton>
                <CheckBoxInput
                  type="checkbox"
                  name="option2"
                  checked={values.option2}
                  onChange={(e) => setFieldValue('option2', e.target.checked)}
                />
                <CheckBoxLabel option={values.option2}>Option 2</CheckBoxLabel>
              </CheckBoxButton>

              <CheckBoxButton>
                <CheckBoxInput
                  type="checkbox"
                  name="option3"
                  checked={values.option3}
                  onChange={(e) => setFieldValue('option3', e.target.checked)}
                />
                <CheckBoxLabel option={values.option3}>Option 3</CheckBoxLabel>
              </CheckBoxButton>

              <CheckBoxButton>
                <CheckBoxInput
                  type="checkbox"
                  name="option4"
                  checked={values.option4}
                  onChange={(e) => setFieldValue('option4', e.target.checked)}
                />
                <CheckBoxLabel option={values.option4}>Option 4</CheckBoxLabel>
              </CheckBoxButton>

              <CheckBoxButton>
                <CheckBoxInput
                  type="checkbox"
                  name="option5"
                  checked={values.option5}
                  onChange={(e) => setFieldValue('option5', e.target.checked)}
                />
                <CheckBoxLabel option={values.option5}>Option 5</CheckBoxLabel>
              </CheckBoxButton>
            </Form>
          )}
        </Formik>
      </ContainerForEquipment>
    </div>
  );
};
