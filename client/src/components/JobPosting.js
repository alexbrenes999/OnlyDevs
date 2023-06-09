import React from "react"



export default function JobPosting (props) {
    console.log(props)
    let array = props.posting
    console.log(array)
    return (
        
        <div className ="bg-slate-200">
            {array ? (array.map((JobPosting) => (
            <div className="flex flex-col items-center justify-center p-12 bg-slate-200">
                <div className="max-w-xl py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div className="flex justify-center md:justify-end -mt-16">
                        <img className="shadow-lg  w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    </div>
                    <div>
                        <h2 className="text-gray-800 text-3xl font-semibold underline">{JobPosting.title}</h2>
                        <h4 className="text-gray-800 p-1 text-xl font-semibold">{JobPosting.languages}</h4>
                        <h4 className="text-gray-800 p-1 text-lg font-semibold">{JobPosting.dates}</h4>
                        <p className="mt-2 text-gray-600">{JobPosting.description}</p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <a href="/profile" class="shadow-lg rounded-md px-2 py-1 bg-[#0E82D0] text-md font-small text-[#F8FAFD] hover:text-[#E0E5E8] hover:shadow-xl hover:bg-[#1274B5]">Apply for this job!</a>
                    </div>
                </div>                
            </div>
            ))) :<div><p>No Jobs!</p></div>}
        </div>
       
    )
}