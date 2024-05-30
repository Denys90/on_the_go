import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectError,
  selectIsLoading,
  selectorAdverts,
  selectorFavorite,
} from '../store/selectors';
import { getAdvertsThunk, searchByLocationThunk } from '../store/thunks';
import {
  addToFavorite,
  filteringCampsByEquipment,
  removeFromFavorite,
} from '../store/advertsSlice';

export const useAdvert = () => {
  const dispatch = useDispatch();

  const adverts = useSelector(selectorAdverts);
  const favorite = useSelector(selectorFavorite);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const getAdvert = useCallback(
    (credentials) => {
      dispatch(getAdvertsThunk(credentials));
    },
    [dispatch]
  );

  const advertsSearch = useCallback(
    (credentials) => {
      dispatch(searchByLocationThunk(credentials));
    },
    [dispatch]
  );

  // ====================================================================
  const addFavorite = useCallback(
    (advert) => {
      const isFavorite = favorite.some((item) => item._id === advert._id);
      if (!isFavorite) {
        dispatch(addToFavorite(advert));
      }
    },
    [dispatch, favorite]
  );

  const removeFavorite = useCallback(
    (data) => {
      dispatch(removeFromFavorite(data));
    },
    [dispatch]
  );

  const filteredAdverts = useCallback(
    (filtered) => {
      dispatch(filteringCampsByEquipment(filtered));
    },
    [dispatch]
  );

  return {
    error,
    adverts,
    favorite,
    isLoading,
    getAdvert,
    addFavorite,
    advertsSearch,
    removeFavorite,
    filteredAdverts,
  };
};
