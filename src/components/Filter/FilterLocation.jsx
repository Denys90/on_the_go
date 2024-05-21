// // import { Formik, Form } from 'formik';
// // import {
// //   ContainerForEquipment,
// //   InputContainer,
// //   InputLocation,
// //   InputSvg,
// //   LocationContainer,
// //   LocationTitle,
// // } from './Filter.styled';
// // import svg from 'assets/icons/symbol-defs.svg';
// // import { useAdvert } from '../../Hooks/useAdvert';
// // import { useEffect, useState } from 'react';

// // export const FilterLocation = () => {
// //   const [selectedLocation, setSelectedLocation] = useState('');
// //   const [uniqueLocation, setUniqueLocation] = useState([]);
// //   const { adverts } = useAdvert();

// //   console.log('uniqueLocation', uniqueLocation);

// //   useEffect(() => {
// //     const locations = [...new Set(adverts.map((advert) => advert.location))];
// //     setSelectedLocation(locations);
// //   }, [adverts]);

// //   return (
// //     <ContainerForEquipment>
// //       <Formik
// //         initialValues={{ location: '' }}
// //         onSubmit={(values) => {
// //           const uniqueLocation = adverts.filter(
// //             (item) => item.location === values.location
// //           );
// //           setUniqueLocation(uniqueLocation);
// //           console.log(uniqueLocation);
// //         }}
// //       >
// //         {({ values, setFieldValue }) => (
// //           <Form>
// //             <LocationContainer>
// //               <LocationTitle>Location</LocationTitle>
// //               <InputContainer>
// //                 {' '}
// //                 <label htmlFor="name"></label>
// //                 <InputLocation
// //                   as="select"
// //                   name="location"
// //                   placeholder="Select a city"
// //                   value={values.location}
// //                   onChange={(e) => setFieldValue('location', e.target.value)}
// //                 >
// //                   <option value="">Select a city</option>

// //                   {Array.isArray(selectedLocation) &&
// //                     selectedLocation.map((location, index) => (
// //                       <option key={index} value={location}>
// //                         {location}
// //                       </option>
// //                     ))}
// //                 </InputLocation>
// //                 <InputSvg>
// //                   <use href={`${svg}#icon-map`}></use>
// //                 </InputSvg>
// //               </InputContainer>
// //             </LocationContainer>
// //           </Form>
// //         )}
// //       </Formik>
// //     </ContainerForEquipment>
// //   );
// // };
// import { Formik, Form } from 'formik';
// import {
//   ContainerForEquipment,
//   InputContainer,
//   InputLocation,
//   InputSvg,
//   LocationContainer,
//   LocationTitle,
// } from './Filter.styled';
// import svg from 'assets/icons/symbol-defs.svg';
// import { useAdvert } from '../../Hooks/useAdvert';
// import { useEffect, useState } from 'react';

// export const FilterLocation = () => {
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [uniqueLocation, setUniqueLocation] = useState([]);
//   const { adverts } = useAdvert();

//   console.log('uniqueLocation', uniqueLocation);

//   useEffect(() => {
//     const locations = [...new Set(adverts.map((advert) => advert.location))];
//     setSelectedLocation(locations);
//   }, [adverts]);

//   const handleLocationChange = (e) => {
//     const selectedValue = e.target.value;

//     const uniqueLocations = adverts.filter(
//       (item) => item.location === selectedValue
//     );
//     setUniqueLocation(uniqueLocations);
//   };

//   return (
//     <ContainerForEquipment>
//       <Formik
//         initialValues={{ location: '' }}
//         onSubmit={() => {
//           console.log(uniqueLocation);
//         }}
//       >
//         {({ values }) => (
//           <Form>
//             <LocationContainer>
//               <LocationTitle>Location</LocationTitle>
//               <InputContainer>
//                 {' '}
//                 <label htmlFor="name"></label>
//                 <InputLocation
//                   as="select"
//                   name="location"
//                   placeholder="Select a city"
//                   value={values.location}
//                   onChange={handleLocationChange}
//                 >
//                   <option value="">Select a city</option>

//                   {Array.isArray(selectedLocation) &&
//                     selectedLocation.map((location, index) => (
//                       <option key={index} value={location}>
//                         {location}
//                       </option>
//                     ))}
//                 </InputLocation>
//                 <InputSvg>
//                   <use href={`${svg}#icon-map`}></use>
//                 </InputSvg>
//               </InputContainer>
//             </LocationContainer>
//           </Form>
//         )}
//       </Formik>
//     </ContainerForEquipment>
//   );
// };
import { Formik, Form } from 'formik';
import {
  ContainerForEquipment,
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
    <ContainerForEquipment>
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
    </ContainerForEquipment>
  );
};
