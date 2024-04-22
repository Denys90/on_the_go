import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { advertReducer } from './advertsSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'adverts',
  storage,
  // whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, advertReducer);

const reducer = {
  adverts: persistedReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
