import userTypes from '../types/user';
import initialState from '../initialState';

const userReducer = (state = initialState.currentUser, action) => {
    let newState = { ...state };

    switch (action.type) {
        //Login

        case userTypes.login.request:
            newState.isLoadingLogin = action.payload;

            return newState;

        case userTypes.login.faillure:
            newState.isLoadingLogin = action.payload;

            return newState;

        case userTypes.login.success:
            newState.isLoadingLogin = false;
            newState.user = action.payload.data.user;
            newState.accessToken = action.payload.data.accessToken;

            return newState;

        //Forgot_Password

        case userTypes.forgotPassword.request:
            newState.isLoadingLogin = action.payload;

            return newState;

        case userTypes.forgotPassword.faillure:
            newState.isLoadingLogin = action.payload;

            return newState;

        case userTypes.forgotPassword.success:
            newState.isLoadingLogin = action.payload;

            return newState;

        //Reset_Password

        case userTypes.resetPassword.request:
            newState.isLoadingLogin = action.payload;

            return newState;

        case userTypes.resetPassword.faillure:
            newState.isLoadingLogin = action.payload;

            return newState;

        case userTypes.resetPassword.success:
            newState.isLoadingLogin = action.payload;

            return newState;
        default:
            return newState;
    }
};

export default userReducer;
