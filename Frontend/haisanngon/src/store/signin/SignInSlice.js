import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_URL = 'http://localhost:8082/haisanngon/login/signin';

const initialState = {};

export const signin = createAsyncThunk('login/signin', async ({ username, password }) => {
    const response = await axios.post(USERS_URL, { username, password });
    return response.data;
});

const SignInSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(signin.fulfilled, (state, action) => {
            console.log(action.payload);
            // return action.payload;
        });
    },
});

export default SignInSlice.reducer;
export const SignInState = (state) => state.signin;
