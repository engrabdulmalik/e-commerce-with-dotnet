import { legacy_createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { counterSlice } from '../../features/contact/counterReducer.jsx';
import { catalogApi } from '../../features/catalog/catalogApi.js';
import { uiSlice } from '../layout/uiSlice.js';

export function configureTheStore() {
  return legacy_createStore(counterReducer);
  }

export const store = configureStore({
    reducer: {
      [catalogApi.reducerPath]: catalogApi.reducer,
        counter: counterSlice.reducer,
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catalogApi.middleware),

})

