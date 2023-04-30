import Navigation from '../Navbar/Navbar';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../context/authContext';
import { EDIT_PROFILE } from '../../utils/mutations';

export default function EditProfile() {
    //I DONT KNOW IF THIS IS THE RIGHT THING FOR FORMSTATE// SETFORMSTATE 
    //COPIED THIS DIRECTLY FROM THE SIGNUP FORM
    //ALEX DO YOUR THING HONEY -K
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [EditProfile] = useMutation(EDIT_PROFILE);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await EditProfile({
        variables: {
          location: formState.location,
          jobTitle: formState.jobTitle,
          skills: formState.skills,
          contact: formState.contact,
        },
      });
      const token = mutationResponse.data.EditProfile.token;
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
            <Navigation />
            {/* <!-- component --> */}
            <div className="flex  justify-center p-12  bg-slate-100">
                {/* <!-- Author: FormBold Team -->
            <!-- Learn More: https://formbold.com --> */} 
                <div className="mx-auto w-full max-w-[650px] shadow-md bg-[#D5E1EA] px-10 rounded-sm py-4">
                    <div className='border-b-4 border-[#9196ac]  my-4'>
                        <p className='text-center text-2xl font-semibold pb-3'>Edit your profile!</p>
                    </div>
                    <form form onSubmit={handleFormSubmit}>
                        <div className="mb-5">
                            <label
                                for="location"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                placeholder="Florida, USA"
                                className="w-full rounded-md border shadow-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="jobTitle"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Job Title
                            </label>
                            <input
                                type="text"
                                name="jobTitle"
                                id="jobTitle"
                                placeholder="UX/UI Designer"
                                className="w-full rounded-md border shadow-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="skills"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Skills
                            </label>
                            <textarea
                                rows="4"
                                type="text"
                                name="skills"
                                id="skills"
                                placeholder="Responsive Design, Mobile Application Development, Backend Guru"
                                className="w-full resize-none rounded-md border shadow-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="mb-5">
                            <label
                                for="contact"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Contact Info
                            </label>
                            <input
                                type="text"
                                name="contact"
                                id="contact"
                                placeholder="Hello@OnlyDevs.com"
                                className="w-full rounded-md border shadow-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="hover:shadow-form rounded-md shadow-md bg-[#0E82D0] hover:bg-[#1274B5] py-3 px-8 text-base font-semibold text-white mt-9 " type="submit"
                            >
                                Update!
                            </button>
                        </div>
                        <div className='border-b-4 border-[#9196ac] mt-8'>
                            {/* THIS HOLDS THE BORDER LINE -K */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}