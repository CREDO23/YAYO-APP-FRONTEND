import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { isFill, isMatch } from '../../utils/validation';
import { resetPassword } from '../../store/actions/user';
import { useDispatch } from 'react-redux';
import toastMsg from '../../utils/toastify';
import { useParams } from 'react-router-dom';
import ForgotImg from '../../assets/forgotImg.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ResetPasswordScreen = () => {
    const dispatch = useDispatch();

    const { token } = useParams();

    const { isLoadingLogin } = useSelector((state) => state.currentUser);

    const [resetPasswordForm, setResePasswordtForm] = useState({
        password: '',
        confirmPassword: '',
    });

    const handleResetForm = (e, input) => {
        setResePasswordtForm({
            ...resetPasswordForm,
            [input]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await isFill(resetPasswordForm);

            const isInputMatched = await isMatch(
                resetPasswordForm.password,
                resetPasswordForm.confirmPassword,
            );

            if (isInputMatched) {
                dispatch(resetPassword(token, resetPasswordForm));
            }
        } catch (error) {
            toastMsg.error(error);
        }
    };

    return (
        <>
            <div className="w-1/2 flex items-center flex-col h-full justify-center ">
                <div className="w-3/4 h-2/5 flex flex-col justify-evenly">
                    <h3 className="my-4 text-3xl  text-textbleu font-bold">
                        Reset your password
                    </h3>
                    <form className=" text-textbleu " noValidate>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-textbleu"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="***************"
                                onChange={(e) => handleResetForm(e, 'password')}
                                required
                                className="w-full mb-8 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-200"
                            />
                            <label
                                htmlFor="confirmPassword"
                                className="block mb-2 text-textbleu"
                            >
                                Confirm password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="***************"
                                onChange={(e) =>
                                    handleResetForm(e, 'confirmPassword')
                                }
                                required
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-200"
                            />
                        </div>
                        <div className="flex items-center mx-2 my-3 justify-end cursor-pointer">
                            {!isLoadingLogin ? (
                                <Link to="/">
                                    <span className=" text-bleu-4">
                                        <FontAwesomeIcon icon={faArrowLeft} />{' '}
                                        Go to Sign in
                                    </span>
                                </Link>
                            ) : (
                                <span className=" text-bleu-4">
                                    <FontAwesomeIcon icon={faArrowLeft} /> Go to
                                    Sign in
                                </span>
                            )}
                        </div>
                        <div className="mb-6 flex justify-start">
                            <button
                                type="submit"
                                disabled={isLoadingLogin}
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

export default ResetPasswordScreen;
