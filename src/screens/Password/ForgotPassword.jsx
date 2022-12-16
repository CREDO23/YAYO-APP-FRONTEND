import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import toastMsg from '../../utils/toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isFill } from '../../utils/validation';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../store/actions/user';
import { useSelector } from 'react-redux';
import ForgotImg from '../../assets/forgotImg.svg';

const ForgotPassword = () => {
    const { isLoadingLogin } = useSelector((state) => state.currentUser);

    const dispatch = useDispatch();

    const [forgotEmailForm, setforgotEmailForm] = useState({
        userName: '',
    });

    const heandleLoginForm = (e, field) => {
        setforgotEmailForm({ ...forgotEmailForm, [field]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await isFill(forgotEmailForm);

            dispatch(forgotPassword(forgotEmailForm));
        } catch (error) {
            toastMsg.error(error);
        }
    };

    return (
        <>
            <div className="w-1/2 flex items-center flex-col h-full justify-center ">
                <div className="w-3/4 h-2/5 flex flex-col justify-evenly">
                    <h3 className="my-4 text-3xl  text-textbleu font-bold">
                        Reset password
                    </h3>
                    <form className=" text-textbleu " noValidate>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-textbleu"
                            >
                                Please , entrer your user name ! You will
                                recieve a recovery link in your email inbox
                            </label>
                            <input
                                type="email"
                                name="userName"
                                placeholder="joe123@gmail.com"
                                onChange={(e) =>
                                    heandleLoginForm(e, 'userName')
                                }
                                required
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-200"
                            />
                        </div>
                        <div className="flex items-center mx-2 my-3 justify-end cursor-pointer">
                            <span className=" text-bleu-4">
                                <FontAwesomeIcon icon={faArrowLeft} /> Go to
                                Sign in
                            </span>
                        </div>
                        <div className="mb-6 flex justify-start">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-3/6 px-2 py-4 text-white bg-bleu rounded-md  focus:bg-indigo-600 focus:outline-none"
                            >
                                {isLoadingLogin ? (
                                    <FontAwesomeIcon
                                        className=" animate-spin"
                                        icon={faSpinner}
                                    />
                                ) : (
                                    'Send'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <img src={ForgotImg}></img>
            </div>
        </>
    );
};

export default ForgotPassword;
