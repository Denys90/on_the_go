import { Formik, Form } from 'formik';
import {
  ButtonSubmit,
  CheckBoxButton,
  CheckBoxButtonVan,
  CheckBoxInput,
  CheckBoxLabel,
  ContainerForEquipment,
  Equipment,
  EquipmentBox,
  FirstTitle,
  InputContainer,
  InputLocation,
  InputSvg,
  LocationContainer,
  LocationTitle,
  SecondTitle,
  SvgStyles,
  SvgStylesVan,
  VehicleBox,
} from './Filter.styled';
import svg from 'assets/icons/symbol-defs.svg';
import { useAdvert } from '../../Hooks/useAdvert';
import { useEffect, useState } from 'react';

export const Filter = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const { adverts } = useAdvert();

  useEffect(() => {
    const locations = adverts.map((advert) => advert.location);
    setSelectedLocation(locations);
  }, [adverts]);

  const initialValues = {
    location: '',
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
    <ContainerForEquipment>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ values, setFieldValue }) => (
          <Form>
            <LocationContainer>
              <LocationTitle>Location</LocationTitle>
              <InputContainer>
                {' '}
                <label htmlFor="name"></label>
                <InputLocation
                  as="select"
                  name="location"
                  placeholder="Select a city"
                  value={values.location}
                  onChange={(e) => setFieldValue('location', e.target.value)}
                >
                  <option value="">Select a city</option>

                  {Array.isArray(selectedLocation) &&
                    selectedLocation.map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                </InputLocation>
                <InputSvg>
                  <use href={`${svg}#icon-map`}></use>
                </InputSvg>
              </InputContainer>
            </LocationContainer>
            <FirstTitle>Filters</FirstTitle>
            <SecondTitle>Vehicle equipment</SecondTitle>
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
                    .<use href={`${svg}#icon-conect`}></use>
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
            <ButtonSubmit type="submit">Search</ButtonSubmit>
          </Form>
        )}
      </Formik>
    </ContainerForEquipment>
  );
};
