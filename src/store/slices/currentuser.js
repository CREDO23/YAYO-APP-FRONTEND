import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { post } from '../../utils/axiosRequest';
import toastMsg from '../../utils/toastify';

const initialState = {
    user: localStorage.getItem('user'),
    accesstoken: localStorage.getItem('accesstoken'),
    isLoadingLogin: false,
};

export const singin = createAsyncThunk(
    'user/singin',
    async (body, { rejectWithValue }) => {
        try {
            const result = await post(null, body, 'login');

            return result;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    },
);

export const forgotPassword = createAsyncThunk(
    'user/forgot-password',
    // eslint-disable-next-line no-empty-pattern
    async (body, { rejectWithValue }) => {
        try {
            const result = await post(null, body, 'password/forgot');

            return result;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    },
);

export const resetPassword = createAsyncThunk(
    'user/reset-password',
    async (body, { rejectWithValue }) => {
        try {
            const result = await post(null, body, 'password/reset');

            return result;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    },
);

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(singin.pending, (state) => {
            state.isLoadingLogin = true;
        });

        builder.addCase(singin.fulfilled, (state, action) => {
            state.isLoadingLogin = false;
            state.user = action.payload.data.user;
            state.accesstoken = action.payload.data.accessToken;
            localStorage.setItem(
                'user',
                JSON.stringify(action.payload.data.user),
            );
            localStorage.setItem(
                'accessToken',
                JSON.stringify(action.payload.data.accessToken),
            );
        });

        builder.addCase(singin.rejected, (state, action) => {
            state.isLoadingLogin = false;
            toastMsg.error(action.payload);
        });

        builder.addCase(resetPassword.pending, (state) => {
            state.isLoadingLogin = true;
        });

        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.isLoadingLogin = false;
            toastMsg.error(action.payload);
        });

        builder.addCase(resetPassword.rejected, (state, action) => {
            state.isLoadingLogin = false;
            toastMsg.error(action.payload);
        });

        builder.addCase(forgotPassword.pending, (state) => {
            state.isLoadingLogin = true;
        });

        builder.addCase(forgotPassword.fulfilled, (state, action) => {
            state.isLoadingLogin = false;
            toastMsg.error(action.payload);
        });

        builder.addCase(forgotPassword.rejected, (state, action) => {
            state.isLoadingLogin = false;
            toastMsg.error(action.payload);
        });
    },
});

export default currentUserSlice.reducer;
