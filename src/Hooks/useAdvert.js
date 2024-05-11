import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectorAdverts,
  selectorFavorite,
  selectorFilter,
} from '../store/selectors';
import { getAdvertsThunk } from '../store/thunks';
import { useCallback } from 'react';
import {
  addToFavorite,
  newFilterValues,
  removeFromFavorite,
} from '../store/advertsSlice';

export const useAdvert = () => {
  const dispatch = useDispatch();

  const adverts = useSelector(selectorAdverts);
  const favorite = useSelector(selectorFavorite);
  const filterValues = useSelector(selectorFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const getAdvert = useCallback(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);

  const addFavorite = useCallback(
    (advert) => {
      const isFavorite = favorite.some((item) => item._id === advert._id);
      if (!isFavorite) {
        dispatch(addToFavorite(advert));
      }
    },
    [dispatch, favorite]
  );
  const addDataToFilter = useCallback(
    (data) => {
      dispatch(newFilterValues(data));
    },
    [dispatch]
  );

  const removeFavorite = useCallback(
    (advert) => {
      dispatch(removeFromFavorite(advert));
    },
    [dispatch]
  );

  return {
    adverts,
    favorite,
    filterValues,
    isLoading,
    error,
    getAdvert,
    addFavorite,
    removeFavorite,
    addDataToFilter,
  };
};
