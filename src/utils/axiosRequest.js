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
        url: `https://yayo-app-backend.onrender.com/${endpoint}`,
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
        url: `https://yayo-app-backend.onrender.com/${endpoint}`,
        data: body,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};

export const patch = async (token, body, endpoint) => {
    return await axios({
        method: 'PATCH',
        url: `https://yayo-app-backend.onrender.com/${endpoint}`,
        data: body,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};
