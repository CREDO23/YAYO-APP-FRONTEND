import { toast } from 'react-toastify';

const toastMsg = {
    success: (message) => toast.success(message),

    warning: (message) => toast.warning(message),

    info: (message) => toast.info(message),

    error: (message) => toast.error(message),
};

export default toastMsg;
