import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Navbar() {
    const [nav,setNav] = useState(false)
    const setNavHandler = () =>{
        setNav(!nav)
    }
  return (
    <div className="bg-white flex justify-around fixed left-0 top-0 w-screen items-center text-black z-99">
      <div className="flex justify-around items-center pt-2">
        <Link href="/">
          <h1 className="text-black text-3xl">Captur</h1>
        </Link>
        <ul className=" hidden sm:flex justify-around px-5 text-black text-xl ml-16 items-center">
          <li className="ml-8 hover:text-gray-500">
            <Link href="/#home">Home</Link>
          </li>
          <li className="ml-8 hover:text-gray-500">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="ml-8 hover:text-gray-500">
            <Link href="/#work">Work</Link>
          </li>
          <li className="ml-8 hover:text-gray-500">
            <Link href="Contactpg">Contact</Link>
          </li>
        </ul>
        {/* {mobilebutton} */}
        <div className="absolute right-3 sm:hidden z-10 ">
          <button onClick={setNavHandler} className="text-black">
              {nav?<AiOutlineClose className="text-white" size={30} />:<AiOutlineMenu size={30} />}
            </button>
        </div>
        <ul className={nav?'sm:hidden absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black text-white ease-in duration-300':'sm:hidden absolute top-0 left-[-100%] w-full h-screen flex flex-col justify-center items-center bg-black text-white ease-in duration-300'}>
        <li className="ml-8 hover:text-gray-500">
            <Link href="#home">Home</Link>
          </li>
          <li className="ml-8 hover:text-gray-500">
            <Link href="#gallery">Gallery</Link>
          </li>
          <li className="ml-8 hover:text-gray-500">
            <Link href="#work">Work</Link>
          </li>
          <li className="ml-8 hover:text-gray-500">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
