import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAdvertsThunk,
  searchByLocationThunk,
  sortedAdvertsThunk,
} from './thunks';
import { handleFulfilled, handlePending, handleReject } from './hendlers';

const initialState = {
  adverts: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const extraActions = [getAdvertsThunk];
const getActions = (type) => extraActions.map((action) => action[type]);

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (item) => item._id !== payload._id
      );
    },
    saveFilteredLocations: (state, { payload }) => {
      state.filteredLocation = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
        payload.forEach((newAdvert) => {
          const existingIndex = state.adverts.findIndex(
            (advert) => advert._id === newAdvert._id
          );
          if (existingIndex === -1) {
            state.adverts.push(newAdvert);
          }
        });
      })
      .addCase(searchByLocationThunk.fulfilled, (state, { payload }) => {
        state.adverts = payload;
      })
      .addCase(sortedAdvertsThunk.fulfilled, (state, { payload }) => {
        state.adverts = payload;
      })

      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleReject);
  },
});

export const { addToFavorite, removeFromFavorite, saveFilteredLocations } =
  advertsSlice.actions;

export const advertReducer = advertsSlice.reducer;
