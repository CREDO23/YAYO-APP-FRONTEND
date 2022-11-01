import userTypes from '../types/user';
import toastMsg from '../../utils/toastify';
import { post } from '../../utils/axiosRequest';

export const login = (user) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: userTypes.login.REQUEST,
                payload: true,
            });

            const { data } = await post('', user, 'login');

            if (!data.success) {
                dispatch({
                    type: userTypes.login.FAILURE,
                    payload: false,
                });
            } else if (data.success) {
                dispatch({
                    type: userTypes.login.SUCCESS,
                    payload: data,
                });

                toastMsg.success(data.message);
            }
        } catch (error) {
            dispatch({
                type: userTypes.login.FAILURE,
                payload: false,
            });

            toastMsg.error(error.response.data.message);
        }
    };
};
