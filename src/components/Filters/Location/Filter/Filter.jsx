import { Formik, Form } from 'formik';
import {
  CheckBoxButton,
  CheckBoxButtonVan,
  CheckBoxInput,
  CheckBoxLabel,
  ContainerForEquipment,
  Equipment,
  EquipmentBox,
  FirstTitle,
  SecondTitle,
  SvgStyles,
  SvgStylesVan,
  VehicleBox,
} from './Filter.styled';
import svg from 'assets/icons/symbol-defs.svg';

export const Filter = () => {
  const initialValues = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    Van: false,
    Fully: false,
    Alcove: false,
  };

  return (
    <div>
      <FirstTitle>Filters</FirstTitle>
      <SecondTitle>Vehicle equipment</SecondTitle>
      <ContainerForEquipment>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {({ values, setFieldValue }) => (
            <Form>
              <EquipmentBox>
                <CheckBoxButton>
                  <CheckBoxInput
                    type="checkbox"
                    name="option1"
                    checked={values.option1}
                    onChange={(e) => setFieldValue('option1', e.target.checked)}
                  />
                  <CheckBoxLabel option={values.option1}>
                    <SvgStyles>
                      <use href={`${svg}#icon-wind`}></use>
                    </SvgStyles>
                    <Equipment>AC</Equipment>
                  </CheckBoxLabel>
                </CheckBoxButton>

                <CheckBoxButton>
                  <CheckBoxInput
                    type="checkbox"
                    name="option2"
                    checked={values.option2}
                    onChange={(e) => setFieldValue('option2', e.target.checked)}
                  />
                  <CheckBoxLabel option={values.option2}>
                    <SvgStyles>
                      <use href={`${svg}#icon-conect`}></use>
                    </SvgStyles>
                    <Equipment>Automatic</Equipment>
                  </CheckBoxLabel>
                </CheckBoxButton>

                <CheckBoxButton>
                  <CheckBoxInput
                    type="checkbox"
                    name="option3"
                    checked={values.option3}
                    onChange={(e) => setFieldValue('option3', e.target.checked)}
                  />
                  <CheckBoxLabel option={values.option3}>
                    <SvgStyles>
                      <use href={`${svg}#icon-fork`}></use>
                    </SvgStyles>
                    <Equipment>Kitchen</Equipment>
                  </CheckBoxLabel>
                </CheckBoxButton>

                <CheckBoxButton>
                  <CheckBoxInput
                    type="checkbox"
                    name="option4"
                    checked={values.option4}
                    onChange={(e) => setFieldValue('option4', e.target.checked)}
                  />
                  <CheckBoxLabel option={values.option4}>
                    <SvgStyles>
                      <use href={`${svg}#icon-tv`}></use>
                    </SvgStyles>
                    <Equipment>TV</Equipment>
                  </CheckBoxLabel>
                </CheckBoxButton>

                <CheckBoxButton>
                  <CheckBoxInput
                    type="checkbox"
                    name="option5"
                    checked={values.option5}
                    onChange={(e) => setFieldValue('option5', e.target.checked)}
                  />
                  <CheckBoxLabel option={values.option5}>
                    <SvgStyles>
                      <use href={`${svg}#icon-shower`}></use>
                    </SvgStyles>
                    <Equipment>Shower/WC</Equipment>
                  </CheckBoxLabel>
                </CheckBoxButton>
              </EquipmentBox>

              {/* Vehicle type */}
              <SecondTitle>Vehicle type</SecondTitle>
              <VehicleBox>
                <CheckBoxButtonVan>
                  <CheckBoxInput
                    type="checkbox"
                    name="Van"
                    checked={values.Van}
                    onChange={(e) => setFieldValue('Van', e.target.checked)}
                  />
                  <CheckBoxLabel option={values.Van}>
                    <SvgStylesVan>
                      <use href={`${svg}#icon-van1`}></use>
                    </SvgStylesVan>
                    <Equipment>Van</Equipment>
                  </CheckBoxLabel>
                </CheckBoxButtonVan>

                <CheckBoxButtonVan>
                  <CheckBoxInput
                    type="checkbox"
                    name="Fully"
                    checked={values.Fully}
                    onChange={(e) => setFieldValue('Fully', e.target.checked)}
                  />
                  <CheckBoxLabel option={values.Fully}>
                    <SvgStylesVan>
                      <use href={`${svg}#icon-van2`}></use>
                    </SvgStylesVan>
                    <Equipment>Fully Integrated</Equipment>
                  </CheckBoxLabel>
                </CheckBoxButtonVan>

                <CheckBoxButtonVan>
                  <CheckBoxInput
                    type="checkbox"
                    name="Alcove"
                    checked={values.Alcove}
                    onChange={(e) => setFieldValue('Alcove', e.target.checked)}
                  />
                  <CheckBoxLabel option={values.Alcove}>
                    <SvgStylesVan>
                      <use href={`${svg}#icon-van3`}></use>
                    </SvgStylesVan>
                    <Equipment>Alcove</Equipment>
                  </CheckBoxLabel>
                </CheckBoxButtonVan>
              </VehicleBox>
            </Form>
          )}
        </Formik>
      </ContainerForEquipment>
    </div>
  );
};
