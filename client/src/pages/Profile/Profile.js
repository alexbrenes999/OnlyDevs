import Navigation from '../Navbar/Navbar';
import {AiFillGithub,
        AiOutlineTwitter,
        AiFillLinkedin,
        AiOutlineInstagram,
        AiFillYoutube} from 'react-icons/ai';


export default function Profile () {
    return (
        <div>
            <Navigation/>
            {/* <!-- component -->
            <!-- This is an example component --> */}
            <div className='flex items-center justify-center min-h-screen p-4 bg-slate-200'>
            <div className="relative w-full group max-w-md min-w-0 mx-auto mt-16 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-xl rounded-xl">
                <div className="pb-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="flex justify-center ">
                            <div className="relative">
                                <img alt='placeholder' src="https://source.unsplash.com/jmURdhtm7Ng/120x120" className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 mt-20 text-center">
                        <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">Ariel Cerda</h3>
                        <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                            </svg>
                            {/* <!-- /typography/_h3.antlers.html --> */}
                            <div className="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-300 font-mono text-xl">Florida, US / Front-end</div>
                            {/* <!-- End: /typography/_h3.antlers.html --> */}
                        </div>
                        <div className="w-full text-center">
                            <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                                <div className="flex space-x-2">
                                    <a
                                        className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                                        href="https://www.twitter.com/smilesharks"
                                        rel="noopener"
                                        aria-label="Ariel Cerda on Twitter"
                                        target="_blank"
                                    ><AiOutlineTwitter/></a>

                                    
                                    <a className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary" href="https://www.github.com/Smilesharks" rel="noopener" aria-label="Ariel Cerda on Github" target="_blank"><AiFillGithub/></a>
                                    

                                    <a
                                        className="p-1 -m-1 text-gray-600 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                                        href="https://www.linkedin.com/in/arielcerdahernandez/"
                                        rel="noopener"
                                        aria-label="Ariel Cerda on Linkedin"
                                        target="_blank"
                                    ><AiFillLinkedin/></a>

                                    <a
                                        className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                                        href="https://www.instagram.com/smilesharks"
                                        rel="noopener"
                                        aria-label="Ariel Cerda on Instagram"
                                        target="_blank"
                                    ><AiOutlineInstagram/></a>

                                    <a
                                        className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                                        href="https://www.youtube.com/channel/UCWip2TrjNMXb0kg6LWbsNzw?sub_confirmation=1"
                                        rel="noopener"
                                        aria-label="Ariel Cerda on Youtube"
                                        target="_blank"
                                    ><AiFillYoutube/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-6">
                                <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">Qualifications</h3>
                                <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin turpis orci, maximus sed purus a, cursus scelerisque purus. Morbi molestie, odio at sagittis rhoncus, felis massa iaculis mi, quis molestie erat ipsum vel risus.
                                </p>
                            </div>
                            <div className="w-full px-6">
                                <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">Publications</h3>
                                <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                </p>
                            </div>
                            <div className="w-full px-6">
                                <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">Activity Status</h3>
                                <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                                    HIGH!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                    <div className="w-full px-6">
                                <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">Contact</h3>
                                <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                                    Here is where we will do a contact form?
                                </p>
                            </div>
                    </div>
                    <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
                        <div className="absolute flex -space-x-12 rounded-b-2xl">
                            <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-amber-400/90 group-hover:bg-amber-600/90 z-10"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-amber-300/90 group-hover:bg-amber-500/90 z-20"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-amber-200/90 group-hover:bg-amber-400/90 z-30"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-amber-100/90 group-hover:bg-amber-300/90 z-40"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-amber-50/90 group-hover:bg-amber-200/90 z-50"></div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
} 