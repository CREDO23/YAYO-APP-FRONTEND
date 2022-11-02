import { Type } from './index';

const userTypes = {
    login: new Type('LOGIN'),

    updateProfile: new Type('UPDATE_PROFILE'),

    forgotPassword: new Type('FORGOT_PASSWORD'),

    resetPassword: new Type('RESET_PASSWORD'),
};

export default userTypes;
