// import React from "react";

import { Context } from "../../context/context";
import dinein from "../../dates/imgs/dinein.png";
import walkin from "../../dates/imgs/walkin.png";
import logo from "../../dates/imgs/logo.png";
import { useContext } from "react";

const Navbar = () => {
  let { state, dispatch } = useContext(Context);

  let toggle = () => {
    // console.log("toggle");
    dispatch({ type: "SET_TOGGLE_NAVBAR", payload: !state.toggleNavbar });
  };

  return (
    <div className="z-50 fixed left-0 right-0 top-0 h-[76px] px-6 py-4 bg-white border-b border-neutral-200 justify-between items-center gap-5 inline-flex">
      <div className="flex gap-6 items-center">
        <div className="border-r pr-6 border-[#e4e4e4]">
          <img src={logo} alt="" className="" />
        </div>
        <div
          onClick={() => toggle()}
          className="text-xl text-[#19191c] font-semibold leading-8 cursor-pointer"
        >
          Dashboard (Admin)
        </div>
      </div>
      <div className="flex justify-start items-center gap-8">
        <div className="hidden md:flex rounded-[50px] border border-neutral-200 justify-start items-start">
          <div className="flex items-center px-8 py-2.5 gap-2 hover:bg-neutral-200 rounded-l-full border-1 border-neutral-200 duration-300">
            <div className="w-6 h-6 relative">
              <div className="h-5 left-[6px] top-0.5 absolute">
                <img src={walkin} alt="" className="" />
              </div>
            </div>
            <div className="text-zinc-900 text-base">Walk-In</div>
          </div>
          <div className="flex items-center px-8 py-2.5 gap-2 hover:bg-neutral-200 rounded-r-full border-1 border-neutral-200 duration-300">
            <div className="w-6 h-6 relative">
              <div className="h-5 left-[6px] top-0.5 absolute">
                <img src={dinein} alt="" className="" />
              </div>
            </div>
            <div className="text-zinc-900 text-base">Walk-In</div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <img
            src="https:via.placeholder.com/44x44"
            alt=""
            className="w-11 h-11 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
