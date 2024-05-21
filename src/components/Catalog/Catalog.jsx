// import { useEffect, useState } from 'react';
// import { CatalogList } from './CatalogList';
// import { AlfaContainer, LoadMore, MainContainer } from './Catalog.styled';
// import { useAdvert } from '../../Hooks/useAdvert';
// import { Filter } from 'components/Filter/Filter';

// const Catalog = () => {
//   const [displayedCount, setDisplayedCount] = useState(5);

//   const { getAdvert, adverts, isLoading, filterByCity } = useAdvert();

//   useEffect(() => {
//     getAdvert();
//   }, []);

//   useEffect(() => {
//     filterByCity;
//   }, [filterByCity]);

//   const handleLoadMore = () => {
//     setDisplayedCount(displayedCount + 5);
//   };

//   if (isLoading) return <p>Loading...</p>;
//   return (
//     <AlfaContainer>
//       <Filter />
//       <MainContainer>
//         <ul>
//           {filterByCity && filterByCity.length > 0
//             ? filterByCity.map((advert) => (
//                 <li key={advert._id}>
//                   <CatalogList advert={advert} />
//                 </li>
//               ))
//             : adverts.slice(0, displayedCount).map((advert) => (
//                 <li key={advert._id}>
//                   <CatalogList advert={advert} />
//                 </li>
//               ))}
//         </ul>
//         <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
//       </MainContainer>
//     </AlfaContainer>
//   );
// };

// export default Catalog;
import { useEffect, useState } from 'react';
import { CatalogList } from './CatalogList';
import { AlfaContainer, LoadMore, MainContainer } from './Catalog.styled';
import { useAdvert } from '../../Hooks/useAdvert';
import { Filter } from 'components/Filter/Filter';

const Catalog = () => {
  const [displayedCount, setDisplayedCount] = useState(5);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredAdverts, setFilteredAdverts] = useState([]);

  const { getAdvert, adverts, isLoading } = useAdvert();

  useEffect(() => {
    getAdvert();
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      setFilteredAdverts(
        adverts.filter((advert) => advert.location === selectedLocation)
      );
    } else {
      setFilteredAdverts(adverts);
    }
  }, [selectedLocation, adverts]);

  const handleLoadMore = () => {
    setDisplayedCount(displayedCount + 5);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <AlfaContainer>
      <Filter onLocationChange={handleLocationChange} />
      <MainContainer>
        <ul>
          {filteredAdverts.slice(0, displayedCount).map((advert) => (
            <li key={advert._id}>
              <CatalogList advert={advert} />
            </li>
          ))}
        </ul>
        <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
      </MainContainer>
    </AlfaContainer>
  );
};

export default Catalog;
