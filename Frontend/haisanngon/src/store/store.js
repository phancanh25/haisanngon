import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/ProductSlice';
import SignInSlice from './signin/SignInSlice';
export const store = configureStore({
    reducer: {
        products: productReducer,
        signin: SignInSlice,
    },
});
