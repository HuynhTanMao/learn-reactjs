import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-keys";


export const register = createAsyncThunk('user/register', async (pageload) => {
    // call API to register
    const data = await userApi.register(pageload);
    // save to localstorage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    // return user data 
    return data.user;
});

export const login = createAsyncThunk('user/login', async (pageload) => {
    // call API to login
    const data = await userApi.login(pageload);
    // save to localstorage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    // return user data 
    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {}
    },
    reducers: {

    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.pageload;
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.pageload;
        },
    },
});

const { reducer } = userSlice;
export default reducer;