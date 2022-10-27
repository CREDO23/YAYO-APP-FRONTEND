import { useState } from 'react';

const LoginForm = ({setForm}) => {
    const [loginForm, setloginForm] = useState({
        userName: '',
        password: '',
    });

    const heandleLoginForm = (e, field) => {
        setloginForm({ ...loginForm, [field]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginForm);
    };

    return (
        <form action="" method="POST">
            <div className="mb-6">
                <label htmlFor="name" className="block text-textbleu mb-2">
                    User Name
                </label>
                <input
                    type="text"
                    name="userName"
                    placeholder="John Doe"
                    onChange={(e) => heandleLoginForm(e, 'userName')}
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-200"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="email"  text-textbleu className="block mb-2  text-textbleu">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="************"
                    onChange={(e) => heandleLoginForm(e, 'password')}
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-200"
                />
            </div>
            <div className='flex item-center justify-end mx-8 cursor-pointer my-3'>
                <span onClick={ () => setForm('forgot')} className=' text-bleu-4'>Forgot password ?</span>
            </div>
 
            <div className="mb-6 flex justify-start">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-3/6 px-2 py-4 text-white bg-bleu rounded-md  focus:bg-indigo-600 focus:outline-none"
                >
                    Sing In
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
