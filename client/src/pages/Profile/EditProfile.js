import Navigation from '../Navbar/Navbar';

export default function CreateJob() {
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
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="mb-5">
                            <label
                                for="title"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Florida, USA"
                                className="w-full rounded-md border shadow-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="languages"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Job Title
                            </label>
                            <input
                                type="languages"
                                name="languages"
                                id="languages"
                                placeholder="UX/UI Designer"
                                className="w-full rounded-md border shadow-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="description"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Skills
                            </label>
                            <textarea
                                rows="4"
                                name="description"
                                id="description"
                                placeholder="Responsive Design, Mobile Application Development, Backend Guru"
                                className="w-full resize-none rounded-md border shadow-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="hover:shadow-form rounded-md shadow-md bg-[#0E82D0] hover:bg-[#1274B5] py-3 px-8 text-base font-semibold text-white mt-9 "
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