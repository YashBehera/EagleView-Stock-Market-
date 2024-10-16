import { configureStore } from '@reduxjs/toolkit';
import stockReducer from '../features/stockApp/stockSlice';

export const store = configureStore({
  reducer: {
    stockApp:stockReducer,
  },
})