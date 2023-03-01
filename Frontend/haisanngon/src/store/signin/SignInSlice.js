import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import '~/utils/axiosConfig';

const USERS_URL = 'login/signin';

const initialState = {};

export const signin = createAsyncThunk('login/signin', async ({ username, password }) => {
    const response = await axios.post(USERS_URL, { username, password });
    console.log(response.data);
    localStorage.setItem('token', JSON.stringify(response.data.token));

    return response.data;
});

const SignInSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(signin.fulfilled, (state, action) => {
            // console.log(action.payload);
            // console.log(action.payload.token);
            // // return action.payload;
        });
    },
});

export default SignInSlice.reducer;
export const SignInState = (state) => state.signin;
