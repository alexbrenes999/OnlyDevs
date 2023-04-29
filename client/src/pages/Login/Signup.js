import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../context/authContext';
import { REGISTER_USER } from '../../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [registerUser] = useMutation(REGISTER_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await registerUser({
        variables: {
          username: formState.username,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = mutationResponse.data.registerUser.token;
      Auth.login(token);
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
            <div className="flex items-center justify-center h-screen shadow-xl">
                {/* dont mess with breakpoints!!! -K */}
                <div className=" sm:w-8/12 md:w-6/12 lg:w-4/12 w-10/12 flex-col border bg-white px-6 py-10 shadow-xl rounded-[4px]">

                    <div className="mb-8 flex justify-center">
                        <img className="w-24" src="./assets/OnlyDevs-logo" alt="onlyDevs Logo, white background blue text" />
                    </div>

                    <form onSubmit={handleFormSubmit} className="flex flex-col text-sm rounded-md">

                        <div className='w-auto pb-4'>
                            <input className=" w-full border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#6c97ed]" name="firstName" type="text" placeholder="First Name" onChange={handleChange}/>
                        </div>

                        <div className='w-auto pb-4'>
                            <input className="w-full border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#6c97ed]" name="lastName" type="text" placeholder="Last Name" onChange={handleChange}/>
                        </div>

                        <div className='w-auto pb-4'>
                            <input className="w-full rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-[#6c97ed]" name="username" type="text" placeholder="Username" onChange={handleChange}/>
                        </div>

                        <div className="w-auto ">
                            <input className="w-full border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-[#6c97ed]" name="password" type="password" placeholder="Password" onChange={handleChange}/>
                        </div>

                        <div className="mt-1 flex justify-end text-xs text-[#083BA2] hover:text-[#6c97ed]">
                            <a href="/">Already have an account? Login!</a>
                        </div>
                        <div className='flex justify-center pt-4'>
                            <button className="mt-5  w-6/12 border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit"><a href="/EditProfile">Signup!</a></button>
                        </div>
                        
                    </form>
                    <div className="mt-9 flex w-full justify-center text-center text-xs text-gray-400">
                        <p>
                            This site was crafted by a team of geniuses! <br/> -the OnlyDevs Team
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;