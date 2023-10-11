import React from "react";
import Image from "next/image";
import Link from "next/link";
import college_logo from "/public/images/college_logo.png";

const Sign_up = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* logo */}
        <div
          className=" flex  flex-col justify-center items-center "
          id="side1"
        >
          <Image src={college_logo} alt="MSIT" width={91} height={91}></Image>
          <h2 className="text-white  mt-5 text-2xl/8">
            Maharaja Surajmal Institute of Technology
          </h2>
          <h2 className="text-white  mt-3 text-xl/8">New Delhi, Delhi</h2>
        </div>

        {/* form */}
        <div className="flex  flex-col justify-center items-center" id="side2">
          <h2 className="text-2xl  font-bold text-stone-700">sign_in</h2>
          <form action="" className="flex flex-col">
            <div className="flex mt-5 ">
              <h3>Login-as</h3>
              <select
                name="login_as"
                id="login_as"
                className=" w-15 h-43 p-2 ml-5 text-center cursor-pointer bg-slate-200 border-black"
              >
                <option value="student">student</option>
                <option value="admin">admin</option>
                <option value="teacher">teacher</option>
              </select>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className=" p-2 rounded-8 h-10 mt-3 bg-slate-200  "
            />
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter Password"
              className=" p-2 rounded-8 h-10 mt-3 bg-slate-200  "
            />
            <button
              type="submit"
              className="h-10  text-xl bg-gradient-to-r from-cyan-500 to-blue-500  mt-5 hover:from-indigo-500 hover:to-emerald-500 "
            >
              log In
            </button>
          </form>
          <Link href="/sign_up">
            <h2 className="mt-8  cursor-pointer font-semibold text-stone-700 h-10 px-4 mx-2 mt-8 hover:scale-105 hover:text-blue-700">
              Not a member Yet? ......sign_up
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sign_up;
