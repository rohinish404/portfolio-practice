import React from "react";

function Hero({ title, message }) {
  return (
    <div id="home" className="flex justify-center items-center flex-col mb-12 border bg-center bg-cover custom-img h-screen">
        
      <div className="mt-15 p-8">
        <h1 className="text-white text-4xl mt-8">{title}</h1>
        <p className="text-white text-l text-normal mt-4">{message}</p>
        <button className="text-white border-2 border-solid border-white py-1.8 px-3 mt-4 hover:bg-gray-500 hover:text-black">
          Book
        </button>
      </div>
    </div>
  );
}

export default Hero;
