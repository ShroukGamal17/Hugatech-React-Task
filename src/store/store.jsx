import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice.jsx';
// import other reducers as needed

const store = configureStore({
  reducer: {
    products: productsReducer,
    // add other reducers as needed
  },
});

export default store;