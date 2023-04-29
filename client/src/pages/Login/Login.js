import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../context/authContext';
import { LOGIN_USER } from '../../utils/mutations';
import { useNavigate } from "react-router-dom";

function Login(props) {

    const [formState, setFormState] = useState({ username: '', password: '' });
    const [loginUser, { error }] = useMutation(LOGIN_USER);
    const navigate = useNavigate();

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
            navigate("/MyProfile/:id", true)
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
        <div className='bg-slate-200'>
            <form onSubmit={handleFormSubmit} className="flex flex-col text-sm rounded-md">
                <div className="flex items-center justify-center h-screen shadow-xl">
                    <div className="sm:w-8/12 md:w-6/12 lg:w-4/12 w-10/12 flex-col border bg-white px-6 py-10 shadow-xl rounded-[4px]">
                        <div className="mb-8 flex justify-center">
                            <img className="w-24" src="./assets/OnlyDevs-logo" alt="onlyDevs Logo, white background blue text" />
                        </div>

                        <div className="flex flex-col text-sm rounded-md w-auto ">
                            <input className="mb-4 w-full border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#6c97ed]"
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={handleChange} />
                            <input className="w-full border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#6c97ed]"
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
                        <div className="mt-1 flex justify-end text-xs text-[#083BA2] hover:text-[#6c97ed]">
                            <a href="/Signup">Don't have an account? Sign Up!</a>
                        </div>

                        <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
                            type="submit" >Sign in</button>

                        

                        <div className="mt-9 flex w-full justify-center text-center text-xs text-gray-400">
                            <p>
                                This site was crafted by a team of geniuses! <br/> -the OnlyDevs Team
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;