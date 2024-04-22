import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAdvertsThunk } from './thunks';
import { handleFulfilled, handlePending, handleReject } from './hendlers';

const initialState = {
  adverts: [],
  displayedCount: 5,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
        state.adverts = payload;
      })

      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleReject);
  },
});

export const { addToFavorite, removeFromFavorite } = advertsSlice.actions;

export const advertReducer = advertsSlice.reducer;
