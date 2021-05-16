import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authSlice from '../features/auth/authSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice
  },
  middleware:getDefaultMiddleware({
    serializableCheck: false
  }),
});
