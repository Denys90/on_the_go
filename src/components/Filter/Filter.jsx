import { Formik, Form } from 'formik';
import {
  ButtonReset,
  ButtonSubmit,
  CheckBoxButton,
  CheckBoxButtonVan,
  CheckBoxInput,
  CheckBoxLabel,
  ContainerButton,
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
  const { adverts, addDataToFilter, filterValues } = useAdvert();

  useEffect(() => {
    const locations = adverts.map((advert) => advert.location);
    setSelectedLocation(locations);
  }, [adverts]);

  useEffect(() => {
    console.log('Updated filterValues:', filterValues);
  }, [filterValues]);

  const initialValues = {
    location: '',
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Shower: false,
    Van: false,
    Fully: false,
    Alcove: false,
  };

  return (
    <ContainerForEquipment>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log('Form values:', values);
          addDataToFilter(values);
        }}
      >
        {({ values, setFieldValue, resetForm }) => (
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
                  name="AC"
                  checked={values.AC}
                  onChange={(e) => setFieldValue('AC', e.target.checked)}
                />
                <CheckBoxLabel option={values.AC ? 'true' : 'false'}>
                  <SvgStyles>
                    <use href={`${svg}#icon-wind`}></use>
                  </SvgStyles>
                  <Equipment>AC</Equipment>
                </CheckBoxLabel>
              </CheckBoxButton>

              <CheckBoxButton>
                <CheckBoxInput
                  type="checkbox"
                  name="Automatic"
                  checked={values.Automatic}
                  onChange={(e) => setFieldValue('Automatic', e.target.checked)}
                />
                <CheckBoxLabel option={values.Automatic ? 'true' : 'false'}>
                  <SvgStyles>
                    .<use href={`${svg}#icon-conect`}></use>
                  </SvgStyles>
                  <Equipment>Automatic</Equipment>
                </CheckBoxLabel>
              </CheckBoxButton>

              <CheckBoxButton>
                <CheckBoxInput
                  type="checkbox"
                  name="Kitchen"
                  checked={values.Kitchen}
                  onChange={(e) => setFieldValue('Kitchen', e.target.checked)}
                />
                <CheckBoxLabel option={values.Kitchen ? 'true' : 'false'}>
                  <SvgStyles>
                    <use href={`${svg}#icon-fork`}></use>
                  </SvgStyles>
                  <Equipment>Kitchen</Equipment>
                </CheckBoxLabel>
              </CheckBoxButton>

              <CheckBoxButton>
                <CheckBoxInput
                  type="checkbox"
                  name="TV"
                  checked={values.TV}
                  onChange={(e) => setFieldValue('TV', e.target.checked)}
                />
                <CheckBoxLabel option={values.TV ? 'true' : 'false'}>
                  <SvgStyles>
                    <use href={`${svg}#icon-tv`}></use>
                  </SvgStyles>
                  <Equipment>TV</Equipment>
                </CheckBoxLabel>
              </CheckBoxButton>

              <CheckBoxButton>
                <CheckBoxInput
                  type="checkbox"
                  name="Shower"
                  checked={values.Shower}
                  onChange={(e) => setFieldValue('Shower', e.target.checked)}
                />
                <CheckBoxLabel option={values.Shower ? 'true' : 'false'}>
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
                <CheckBoxLabel option={values.Van ? 'true' : 'false'}>
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
                <CheckBoxLabel option={values.Fully ? 'true' : 'false'}>
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
                <CheckBoxLabel option={values.Alcove ? 'true' : 'false'}>
                  <SvgStylesVan>
                    <use href={`${svg}#icon-van3`}></use>
                  </SvgStylesVan>
                  <Equipment>Alcove</Equipment>
                </CheckBoxLabel>
              </CheckBoxButtonVan>
            </VehicleBox>
            <ContainerButton>
              {' '}
              <ButtonSubmit type="submit">Search</ButtonSubmit>
              <ButtonReset type="button" onClick={() => resetForm()}>
                Reset
              </ButtonReset>
            </ContainerButton>
          </Form>
        )}
      </Formik>
    </ContainerForEquipment>
  );
};
