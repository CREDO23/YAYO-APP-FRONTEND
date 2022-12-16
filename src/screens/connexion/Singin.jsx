import { useState } from 'react';
import toastMsg from '../../utils/toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isFill } from '../../utils/validation';
import { singin } from '../../store/slices/currentuser';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import LoginImg from '../../assets/loginImg.svg';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();

    const { isLoadingLogin } = useSelector((state) => state.currentUser);

    const [loginForm, setloginForm] = useState({
        userName: '',
        password: '',
    });

    const heandleLoginForm = (e, field) => {
        setloginForm({ ...loginForm, [field]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await isFill(loginForm);

            dispatch(singin(loginForm));
        } catch (error) {
            toastMsg.error(error);
        }
    };

    return (
        <>
            <div className="w-1/2 flex items-center flex-col h-full justify-center ">
                <div className="w-3/4 h-3/6 flex flex-col justify-evenly">
                    <div className="my-8">
                        <h3 className=" text-jaune text-5xl font-bold">
                            Welcome back !
                        </h3>
                        <p className=" text-textbleu text-xl font-semibold">
                            Sign in your account
                        </p>
                    </div>
                    <form className=" text-textbleu " noValidate>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-textbleu mb-2"
                            >
                                User Name
                            </label>
                            <input
                                type="text"
                                name="userName"
                                placeholder="John Doe"
                                onChange={(e) =>
                                    heandleLoginForm(e, 'userName')
                                }
                                required
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-200"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                text-textbleu
                                className="block mb-2  text-textbleu"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="************"
                                onChange={(e) =>
                                    heandleLoginForm(e, 'password')
                                }
                                required
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-200"
                            />
                        </div>
                        <div className="flex item-center justify-end mx-2 cursor-pointer my-3">
                            <Link to="/password/forgot">
                                <span className=" text-bleu-4">
                                    Forgot password ?
                                </span>
                            </Link>
                        </div>

                        <div className="mb-6 flex justify-start">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-3/6 px-2 py-4 text-white bg-bleu rounded-md  focus:bg-indigo-600 focus:outline-none"
                                disabled={isLoadingLogin}
                            >
                                {isLoadingLogin ? (
                                    <FontAwesomeIcon
                                        className=" animate-spin"
                                        icon={faSpinner}
                                    />
                                ) : (
                                    'Sign in'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <img src={LoginImg}></img>
            </div>
        </>
    );
};

export default LoginForm;
