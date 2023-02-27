import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_URL = 'http://localhost:8082/haisanngon/login/signin';

const initialState = {data: [], isLogged: false}

export const fetchUsers = createAsyncThunk('login/signin', async () => {
    const response = await axios.post(USERS_URL);
    return response.data;
});

const SignInSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default ProductSlice.reducer;
export const productState = (state) => state.products;
