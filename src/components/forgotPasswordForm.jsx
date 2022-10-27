import { useState } from 'react';

const ForgotPassword = ({setForm}) => {
    const [forgotForm, setForgotForm] = useState({
        email: '',
    });

    const heandleLoginForm = (e, field) => {
        setForgotForm({ ...forgotForm, [field]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(forgotForm);
    };

    return (
        <form action="" method="POST">
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-textbleu">
                    Please , entrer your user name ! You will recieve a recovery
                    link in your email inbox
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="joe123@gmail.com"
                    onChange={(e) => heandleLoginForm(e, 'email')}
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-200"
                />
            </div>
            <div className="flex items-center mx-8 my-3 justify-end cursor-pointer">
                <span onClick={() => setForm('login')} className=" text-bleu-4">Go to Sign in</span>
            </div>
            <div className="mb-6 flex justify-start">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-3/6 px-2 py-4 text-white bg-bleu rounded-md  focus:bg-indigo-600 focus:outline-none"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default ForgotPassword;
