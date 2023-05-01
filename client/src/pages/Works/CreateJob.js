import Navigation from '../Navbar/Navbar';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../context/authContext';
import { HELP_POST } from '../../utils/mutations';


export default function CreateJob() {
    
    const [formState, setFormState] = useState({ title: '', languages: '', timeline: '', description:'', contact: '' });
    const [helpPost] = useMutation(HELP_POST);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await helpPost({
        variables: {
          title: formState.title,
          languages: formState.languages,
          timeline: formState.dates,
          description: formState.description,
          contact: formState.contact,
        },
      });
      const token = mutationResponse.data.helpPost.token;
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
                    <div className="flex  justify-center p-12 bg-slate-100">
                                <div className="mx-auto w-full shadow-lg max-w-[650px] bg-[#D5E1EA] px-10 rounded-sm py-4">
                    <div className='border-b-4 border-[#9196ac]  my-4'>
                        <p className='text-center text-2xl font-semibold pb-3'>Create a job!</p>
                    </div>
                    <form className="py-2" onSubmit={handleFormSubmit}>
                        <div className="mb-5">
                            <label
                                for="title"
                                className="mb-3 block text-lg font-medium text-[#07074D]"
                            >
                                Job Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Full Stack Developer Needed!"
                                value={formState.title}
                                className="w-full rounded-md border shadow-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2093e5] focus:shadow-md"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="languages"
                                class="mb-3 block text-lg font-medium text-[#07074D]"
                            >
                                Language Requirements
                            </label>
                            <input
                                type="text"
                                name="languages"
                                id="languages"
                                placeholder="AlpineJS, React, GraphQL"
                                value={formState.languages}
                                className="w-full rounded-md border shadow-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2093e5] focus:shadow-md"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="dates"
                                className="mb-3 block text-lg font-medium text-[#07074D]"
                            >
                                Project Dates
                            </label>
                            <input
                                type="text"
                                name="dates"
                                id="dates"
                                placeholder="Enter project dates"
                                value={formState.dates}
                                className="w-full rounded-md border shadow-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2093e5] focus:shadow-md"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="description"
                                className="mb-3 block text-lg font-medium text-[#07074D]"
                            >
                                Job Description
                            </label>
                            <textarea
                                rows="4"
                                name="description"
                                id="description"
                                placeholder="Enter in project details."
                                value={formState.description}
                                className="w-full resize-none shadow-md rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2093e5] focus:shadow-md"
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="mb-5">
                            <label
                                for="contact"
                                className="mb-3 block text-lg font-medium text-[#07074D]"
                            >
                                Contact Info
                            </label>
                            <input
                                type="text"
                                name="contact"
                                id="contact"
                                placeholder="Who should applicants contact?"
                                value={formState.contact}
                                className="w-full rounded-md border shadow-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2093e5] focus:shadow-md"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="hover:shadow-form rounded-md shadow-md bg-[#0E82D0] hover:bg-[#1274B5] py-3 px-8 text-base font-semibold text-white mt-9  " type="submit"
                            >
                                Create!
                            </button>
                        </div>
                        <div className='border-b-4 border-[#9196ac] mt-10'>
                           {/* THIS HOLDS THE BORDER LINE -K */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}