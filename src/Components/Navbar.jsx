import React from "react";
import Avatar from "react-avatar";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import profile from "../../public/profile.jpg"
import logo from "../../public/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between px-6 py-2">
      <div className="flex space-x-4 items-center">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>
      <div className="flex w-[35%] items-center">
        <div className="w-[100%] px-3 py-2 border rounded-l-full">
          <input type="text" placeholder="search" className="outline-none" />
        </div>
        <button className="px-4 py-2 border bg-gray-100 rounded-r-full">
          <CiSearch
            size={"24px"}
          />
        </button>
        <IoMdMic size={"42px"} className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200" />
      </div>
      <div className="flex space-x-5 items-center">
        <RiVideoAddFill className="text-2xl "/>
        <AiOutlineBell/>
        <Avatar src={profile} size="32" round={true}/>
      </div>
    </div>
  );
}

export default Navbar;
