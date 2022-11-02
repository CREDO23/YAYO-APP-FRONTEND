import userTypes from '../types/user';
import toastMsg from '../../utils/toastify';
import { post, patch } from '../../utils/axiosRequest';
import handleError from '../../utils/handleError';

export const login = (user) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: userTypes.login.request,
                payload: true,
            });

            const { data } = await post('', user, 'login');

            if (!data.success) {
                dispatch({
                    type: userTypes.login.faillure,
                    payload: false,
                });
            } else if (data.success) {
                dispatch({
                    type: userTypes.login.success,
                    payload: data,
                });

                localStorage.setItem('accessToken', data.data.accessToken);

                toastMsg.success(data.message);
            }
        } catch (error) {
            dispatch({
                type: userTypes.login.faillure,
                payload: false,
            });

            handleError(error);
        }
    };
};

export const forgotPassword = (email) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: userTypes.resetPassword.request,
                payload: true,
            });

            const { data } = await post('', email, 'password/forgot');

            if (!data.success) {
                dispatch({
                    type: userTypes.resetPassword.faillure,
                    payload: false,
                });
            } else if (data.success) {
                dispatch({
                    type: userTypes.resetPassword.success,
                    payload: false,
                });

                toastMsg.success(data.message);
            }
        } catch (error) {
            dispatch({
                type: userTypes.resetPassword.faillure,
                payload: false,
            });

            handleError(error);
        }
    };
};

export const resetPassword = (token, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: userTypes.resetPassword.request,
                payload: true,
            });

            const { data } = await patch(token, password, `password/reset`);

            if (!data.success) {
                dispatch({
                    type: userTypes.resetPassword.faillure,
                    payload: false,
                });
            } else if (data.success) {
                dispatch({
                    type: userTypes.resetPassword.success,
                    payload: false,
                });

                toastMsg.success(data.message);
            }
        } catch (error) {
            dispatch({
                type: userTypes.resetPassword.faillure,
                payload: false,
            });

            handleError(error);
        }
    };
};
