import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
function Slider({ Slides }) {
  const [current, setCurrent] = useState(0);
  const length = Slides.length;
  const previousVal = (e) => {
      e.preventDefault()
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const NextVal = (e) => {
    e.preventDefault()
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
      <div id="gallery">
          <h1 className="text-center text-2xl">Gallery</h1>
     
    <div className="relative flex justify-center p-4">
        
      <button
        className="absolute border-2 border-solid border-white rounded-full p-3 top-[45%] left-[25%] z-10 text-white"
        onClick={previousVal}
      >
        <AiOutlineArrowLeft />
      </button>
      {Slides.map(function (slide, index) {
        return (
          <div
            key={index}
            className={index === current ? "opacity-1 ease-in duration-1000" : "opacity-0"}
          >
            {index === current && (
              <Image
                src={slide.image}
                height="240"
                width="600"
                objectFit="cover"
              />
            )}
          </div>
        );
      })}
      <button
        className="absolute border-2 border-solid border-white rounded-full p-3 top-[45%] right-[25%] z-10 text-white"
        onClick={NextVal}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
    </div>
  );
}

export default Slider;
