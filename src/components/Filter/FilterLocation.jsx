import { Formik, Form } from 'formik';
import {
  InputContainer,
  InputLocation,
  InputSvg,
  LocationContainer,
  LocationTitle,
} from './Filter.styled';
import svg from 'assets/icons/symbol-defs.svg';
import { useAdvert } from '../../Hooks/useAdvert';
import { useEffect, useState } from 'react';

export const FilterLocation = () => {
  const [uniqueLocations, setUniqueLocations] = useState([]);

  const { advertsSearch, adverts } = useAdvert();

  useEffect(() => {
    const locations = [...new Set(adverts.map((advert) => advert.location))];
    setUniqueLocations(locations);
  }, []);

  const handleLocationChange = (e, setFieldValue) => {
    const selectedValue = e.target.value;
    setFieldValue('location', selectedValue);
    advertsSearch(selectedValue);
  };

  return (
    <div>
      <Formik initialValues={{ location: '' }} onSubmit={() => {}}>
        {({ values, setFieldValue }) => (
          <Form>
            <LocationContainer>
              <LocationTitle>Location</LocationTitle>
              <InputContainer>
                <label htmlFor="name"></label>
                <InputLocation
                  as="select"
                  name="location"
                  placeholder="All city"
                  value={values.location}
                  onChange={(e) => handleLocationChange(e, setFieldValue)}
                >
                  <option value="">All city</option>
                  {uniqueLocations.map((location, index) => (
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
          </Form>
        )}
      </Formik>
    </div>
  );
};
