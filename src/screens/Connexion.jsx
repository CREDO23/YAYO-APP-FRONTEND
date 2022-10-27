import { useState } from 'react';
import LoginForm from '../components/signinForm';
import ForgotPassword from '../components/forgotPasswordForm';

const Connexion = () => {
    const [form, setForm] = useState('login');

    return (
        <div className="w-full h-full">
            <div className='w-1/2 flex items-center flex-col h-full justify-center '>   
                {form === 'login' ? (
                    <div className="w-3/4 h-3/6 flex flex-col justify-evenly">
                        <div className='my-4'>
                            <h3 className=" text-jaune text-5xl font-bold">Welcome back !</h3>
                            <p className=' text-textbleu text-xl font-semibold'>Sign in your account</p>
                        </div>
                        <LoginForm setForm={setForm} />
                    </div>
                ) : form === 'forgot' ? (
                    <div className="w-3/4 h-2/5 flex flex-col justify-evenly">
                        <h3 className="my-4 text-3xl  text-textbleu font-bold">Reset password</h3>
                        <ForgotPassword setForm={setForm} />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Connexion;
