import { useEffect, useState } from 'react';
import { CatalogList } from './CatalogList';
import { AlfaContainer, LoadMore, MainContainer } from './Catalog.styled';
import { useAdvert } from '../../Hooks/useAdvert';
import { Filter } from 'components/Filter/Filter';

import { useDispatch } from 'react-redux';
import { getAdvertsThunk } from '../../store/thunks';

const Catalog = () => {
  const [page, setPage] = useState(1);

  const { getAdvert, adverts, isLoading } = useAdvert();

  console.log('Adverts at Catalog', adverts);

  const dispatch = useDispatch();

  useEffect(() => {
    getAdvert({ page: 1, limit: 5 });
  }, []);

  const handleLoadMore = () => {
    const newPage = page + 1;

    setPage(newPage);
    dispatch(getAdvertsThunk({ page: newPage, limit: 5 }));
  };

  const handleLocationChange = () => {};

  if (isLoading) return <p>Loading...</p>;

  return (
    <AlfaContainer>
      <Filter onLocationChange={handleLocationChange} />
      <MainContainer>
        <ul>
          {adverts.map((advert) => (
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
