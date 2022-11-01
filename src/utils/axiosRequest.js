import axios from 'axios';

export const post = async (token, body, endpoint) => {
    return await axios({
        method: 'POST',
        url: `https://yayo-app-backend.onrender.com/${endpoint}`,
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
        url: `${import.meta.env.VITE_BACKEND_API_URL}/${endpoint}`,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};

export const put = async (token, body, endpoint) => {
    return await axios({
        method: 'PUT',
        url: `${import.meta.env.VITE_BACKEND_API_URL}/${endpoint}`,
        data: body,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};
