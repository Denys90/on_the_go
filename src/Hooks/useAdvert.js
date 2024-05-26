import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectorAdverts,
  selectorFavorite,
  selectorLocation,
} from '../store/selectors';
import { getAdvertsThunk } from '../store/thunks';
import { useCallback } from 'react';
import {
  addToFavorite,
  removeFromFavorite,
  saveFilteredLocations,
} from '../store/advertsSlice';

export const useAdvert = () => {
  const dispatch = useDispatch();

  const adverts = useSelector(selectorAdverts);
  const favorite = useSelector(selectorFavorite);
  const filterByCity = useSelector(selectorLocation);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const getAdvert = useCallback(
    (credentials) => {
      dispatch(getAdvertsThunk(credentials));
    },
    [dispatch]
  );

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
    (credentials) => {
      dispatch(removeFromFavorite(credentials));
    },
    [dispatch]
  );
  const filteredLocations = useCallback(
    (credentials) => {
      dispatch(saveFilteredLocations(credentials));
    },
    [dispatch]
  );

  return {
    adverts,
    favorite,
    filterByCity,
    isLoading,
    error,
    getAdvert,
    addFavorite,
    removeFavorite,
    filteredLocations,
  };
};
