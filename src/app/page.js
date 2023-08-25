import React from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.png";
import logo2 from "/public/images/logo2.png";
const page = () => {
  return (
    <>
      <div className="flex  flex-col justify-center items-center h-screen">
        <Image src={logo} alt="EDUCONNECT" width={300} height={300} />
        <Image src={logo2} alt="logo" width={350} height={350} />
        <Link href="/sign_in">
          <button className=" border-0 mt-8 border-radius-8 shadow-md cursor-pointer font-semibold rounded text-stone-800  h-10 px-4 mx-2 transition duration-400  w-52 bg-grey-500 text-white  hover:bg-emerald-300 hover:text-stone-700 hover:font-bold shadow-stone-950">
            {" "}
            Get Started
          </button>
        </Link>
      </div>
    </>
  );
};

export default page;
