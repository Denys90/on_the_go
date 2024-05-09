import { useEffect, useState } from 'react';
import { CatalogList } from './CatalogList';
import { AlfaContainer, LoadMore, MainContainer } from './Catalog.styled';
import { useAdvert } from '../../Hooks/useAdvert';
import { Filter } from 'components/Filter/Filter';

const Catalog = () => {
  const [displayedCount, setDisplayedCount] = useState(5);
  const { getAdvert, adverts, isLoading } = useAdvert();

  const newAdverts = adverts ? adverts.slice(0, displayedCount) : [];

  useEffect(() => {
    getAdvert();
  }, []);

  const handleLoadMore = () => {
    setDisplayedCount(displayedCount + 5);
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <AlfaContainer>
      <Filter />
      <MainContainer>
        <ul>
          {newAdverts.map((advert) => (
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
