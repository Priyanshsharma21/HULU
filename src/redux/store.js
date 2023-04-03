import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/userSlice';
import {tmdbApi} from './services/tmdb'

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    user: userReducer,
  },
  middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(tmdbApi.middleware),
});
