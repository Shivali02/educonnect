import React from "react";
import Image from "next/image";
import college_logo from "/public/images/college_logo.png";

const Sign_up = () => {
  return (
    <>
      <div className="flex h-screen">
        <div
          className="flex  flex-col justify-center items-center"
          id="side2sign_up"
        >
          <div className="flex ">
            <button className="bg-slate-200	cursor-pointer m-5 btn p-5 pb-0">
              {" "}
              Student
            </button>
            <button className="bg-slate-200	cursor-pointer m-5 btn p-5 pb-0">
              {" "}
              Admin
            </button>
            <button className="bg-slate-200	cursor-pointer m-5 btn p-5 pb-0">
              {" "}
              Teacher
            </button>
          </div>
          <div>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
                className="p-2 rounded-8 h-10 mt-3 bg-slate-200 m-3"
              />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Middle Name"
                className="p-2 rounded-8 h-10 mt-3 bg-slate-200 m-3 "
              />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Last Name"
                className="p-2 rounded-8 h-10 mt-3 bg-slate-200 m-3"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="p-2 rounded-8 h-10 mt-3 bg-slate-200 m-3 w-5/6"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="p-2 rounded-8 h-10 mt-3 bg-slate-200 m-3 w-5/6"
            />
            <input
              type="number"
              name="phn_num"
              id="phn_num"
              placeholder="Phone Number"
              className="p-2 rounded-8 h-10 mt-3 bg-slate-200 m-3 w-5/6"
            />
          </div>
        </div>
        {/* logo */}
        <div
          className=" flex  flex-col justify-center items-center "
          id="side1sign_up"
        >
          <Image src={college_logo} alt="MSIT" width={91} height={91}></Image>
          <h2 className="text-white  mt-5 text-xl/8">
            Maharaja Surajmal Institute of Technology
          </h2>
          <h2 className="text-white  mt-3 text-xl/8">New Delhi, Delhi</h2>
        </div>
      </div>
    </>
  );
};

export default Sign_up;
