import { useEffect, useState } from 'react';
import { CatalogList } from './CatalogList';
import { AlfaContainer, LoadMore, MainContainer } from './Catalog.styled';
import { useAdvert } from '../../Hooks/useAdvert';
import { Filter } from 'components/Filter/Filter';

const Catalog = () => {
  const [displayedCount, setDisplayedCount] = useState(5);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const { getAdvert, adverts, isLoading, filterValues } = useAdvert();

  console.log('filteredAdvertsState=====>', filteredAdverts);
  console.log('filterValues======>', filterValues);

  useEffect(() => {
    getAdvert();
  }, []);

  useEffect(() => {
    const filterAdverts = () => {
      const trueKeys = Object.keys(filterValues).filter(
        (key) => filterValues[key]
      );

      return adverts.filter((advert) =>
        trueKeys.every((key) => {
          if (key === 'location') {
            return advert.location.includes(filterValues[key]);
          } else {
            return (
              Object.prototype.hasOwnProperty.call(advert, key) &&
              advert[key] === true
            );
          }
        })
      );
    };

    setFilteredAdverts(filterAdverts());
  }, [filterValues, adverts]);

  const handleLoadMore = () => {
    setDisplayedCount(displayedCount + 5);
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <AlfaContainer>
      <Filter />
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
