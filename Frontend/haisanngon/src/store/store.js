import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/ProductSlice';
export const store = configureStore({
    reducer: {
        products: productReducer,
    },
});
