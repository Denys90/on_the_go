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

export const FilterLocation = ({ onLocationChange }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const { adverts } = useAdvert();

  const [uniqueLocations, setUniqueLocations] = useState([]);

  useEffect(() => {
    const locations = [...new Set(adverts.map((advert) => advert.location))];
    setUniqueLocations(locations);
  }, [adverts]);

  const handleLocationChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedLocation(selectedValue);
    onLocationChange(selectedValue);
  };

  return (
    <div>
      <Formik
        initialValues={{ location: '' }}
        onSubmit={() => {
          console.log(selectedLocation);
        }}
      >
        {({ values }) => (
          <Form>
            <LocationContainer>
              <LocationTitle>Location</LocationTitle>
              <InputContainer>
                <label htmlFor="name"></label>
                <InputLocation
                  as="select"
                  name="location"
                  placeholder="Select a city"
                  value={values.location}
                  onChange={handleLocationChange}
                >
                  <option value="">Select a city</option>
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
