import toastMsg from './toastify';
import axios from 'axios';

const handleError = (error) => {
    console.log(error);
    if (axios.isAxiosError(error)) {
        const response = error?.response;
        const request = error?.request;

        if (response) {
            switch (error.code) {
                case 'ERR_NETWORK':
                    toastMsg.error('Connection problem ... ');
                    break;
                case 'ERR_CANCELED':
                    toastMsg.error('Connection canceled ...');
                    break;
                default:
                    toastMsg.error(error.response.data.message);
                    break;
            }
        } else if (request) {
            toastMsg.info('Something went wrong');
        }
    } else {
        toastMsg.info('Something went wrong');
    }
};

export default handleError;
