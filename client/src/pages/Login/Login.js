import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../context/authContext';
import { LOGIN_USER } from '../../utils/mutations';

function Login(props) {

    const [formState, setFormState] = useState({ username: '', password: '' });
    const [loginUser, { error }] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await loginUser({
                variables: {
                    username: formState.username,
                    password: formState.password,
                },
            });
            const token = mutationResponse.data.loginUser.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="flex items-center justify-center h-screen">
                    <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
                        <div className="mb-8 flex justify-center">
                            <img className="w-24" src="../assets/whitelogo.jpg" alt="" />
                        </div>

                        <div className="flex flex-col text-sm rounded-md">
                            <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={handleChange} />
                            <input className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange} />
                        </div>

                        {error ? (
                            <div>
                                <p className="error-text">The provided credentials are incorrect</p>
                            </div>
                        ) : null}

                        <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
                            type="submit">Sign in</button>

                        <div className="mt-5 flex justify-between text-sm text-gray-600">
                            <a href="/Signup">Sign up</a>
                        </div>

                        <div className="mt-5 flex text-center text-sm text-gray-400">
                            <p>
                                This site is protected by reCAPTCHA and the Google <br />
                                <a className="underline" href="/">Privacy Policy</a>  and <a className="underline" href="">Terms of Service</a>  apply.
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;