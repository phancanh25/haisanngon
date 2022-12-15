import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_URL = 'http://localhost:8082/haisanngon/sanPham/getAllSanPham';

const initialState = [];

export const fetchUsers = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(USERS_URL);
    return response.data;
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default productSlice.reducer;
export const productState = (state) => state.products; //sau dấu chấm là tên biến của store
