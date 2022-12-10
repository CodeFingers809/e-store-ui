import React from "react";
import Image from "next/image";
import Link from "next/link";
import {IoCartOutline} from "react-icons/io5"

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white/75 backdrop-blur-sm drop-shadow-lg z-10">
      <header className="text-gray-500 body-font">
        <div className="container mx-auto flex flex-wrap py-2 px-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center mb-4 md:mb-0 mr-4">
              <Image
                src={"/logo-and-name-side.png"}
                alt=""
                width={128}
                height={42}
              />
            </a>
          </Link>
          <input className="bg-gray-200 appearance-none border-2 flex-1 border-gray-200 rounded py-2 px-4 mr-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" type="text" placeholder="Search products"/>
          <Link href={"/cart"}>
          <button className="inline-flex items-center border-0 py-2 px-4 focus:outline-none transition-all ease-in-out  bg-gray-100  hover:bg-indigo-500 hover:drop-shadow-[0_8px_12px_rgba(99,102,241,0.45)]  hover:text-white duration-300 rounded text-base mt-4 md:mt-0">
            <IoCartOutline/>&nbsp;&nbsp;Cart
          </button></Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
