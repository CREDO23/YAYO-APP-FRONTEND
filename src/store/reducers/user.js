import userTypes from '../types/user';
import initialState from '../initialState';

const userReducer = (state = initialState.currentUser, action) => {
    let newState = { ...state };

    switch (action.type) {
        case userTypes.login.REQUEST:
            newState.isLoadingLogin = action.payload;

            return newState;

        case userTypes.login.FAILURE:
            newState.isLoadingLogin = action.payload;

            return newState;

        case userTypes.login.SUCCESS:
            newState.isLoadingLogin = false;
            newState.user = action.payload.data.user;
            newState.accessToken = action.payload.data.accessToken;

            return newState;
        default:
            return newState;
    }
};

export default userReducer;
