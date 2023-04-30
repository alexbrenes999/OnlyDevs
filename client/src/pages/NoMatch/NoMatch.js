import React from "react";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => {
  return (
    <div className='bg-slate-200 h-screen'>
      <Jumbotron>
        <h1 className="font-extrabold text-3xl underline underline-offset-4 pb-5">404 Page Not Found</h1>
        <h3 className="p-5">Uh-oh! Looks like we can end up in some pretty weird spots if we try. No worries, let's get you back on the right path!</h3>
        <h6>Happy adventuring! -OnlyDevs</h6>
        <h1>
          <div className="pt-5">
            <button className="w-2/12 px-3 py-2 justify-center mt-5 shadow-xl border bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
            type="submit" href="/">Back to home base!</button>
          </div>
        
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
