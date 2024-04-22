import { useEffect, useState } from 'react';
import { CatalogList } from './CatalogList';
import { LoadMore, MainContainer } from './Catalog.styled';
import { useAdvert } from '../../Hooks/useAdvert';

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
  );
};

export default Catalog;
