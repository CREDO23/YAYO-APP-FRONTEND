import axios from 'axios';

export const post = async (token, body, endpoint) => {
    return await axios({
        method: 'POST',
        // eslint-disable-next-line no-undef
        url: `${import.meta.env.VITE_BACKEND_API_URL}/${endpoint}`,
        data: body,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};

export const get = async (token, endpoint) => {
    return await axios({
        method: 'GET',
        // eslint-disable-next-line no-undef
        url: `${import.meta.env.VITE_BACKEND_API_URL}/${endpoint}`,
        headers: {
            Authorization: token ? `Bearer ${token}` : null,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};

export const put = async (token, body, endpoint) => {
    return await axios({
        method: 'PUT',
        // eslint-disable-next-line no-undef
        url: `${import.meta.env.VITE_BACKEND_API_URL}/${endpoint}`,
        data: body,
        headers: {
            Authorization: token ? `Bearer ${token}` : null,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};

export const patch = async (token, body, endpoint) => {
    return await axios({
        method: 'PATCH',
        // eslint-disable-next-line no-undef
        url: `${import.meta.env.VITE_BACKEND_API_URL}/${endpoint}`,
        data: body,
        headers: {
            Authorization: token ? `Bearer ${token}` : null,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};
