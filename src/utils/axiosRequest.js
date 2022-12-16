import axios from 'axios';

export const post = async (token, body, path) => {
    return await axios({
        method: 'POST',
        baseURL : import.meta.env.VITE_BACKEND_API_URL,
        url: path,
        data: body,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};

export const get = async (token, path) => {
    return await axios({
        method: 'GET',
        baseURL : import.meta.env.VITE_BACKEND_API_URL,
        url: path,
        headers: {
            Authorization: token ? `Bearer ${token}` : null,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};

export const put = async (token, body, path) => {
    return await axios({
        method: 'PUT',
        baseURL : import.meta.env.VITE_BACKEND_API_URL,
        url: path,
        data: body,
        headers: {
            Authorization: token ? `Bearer ${token}` : null,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};

export const patch = async (token, body, path) => {
    return await axios({
        method: 'PATCH',
        baseURL : import.meta.env.VITE_BACKEND_API_URL,
        url: path,
        data: body,
        headers: {
            Authorization: token ? `Bearer ${token}` : null,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};
