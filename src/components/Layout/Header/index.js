import React from "react";
import { RiSearchLine } from "react-icons/ri";
import {
  IoChevronDown,
  IoMoonOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import avatar from "../../../assets/avatar.jpg";

function Header({className}) {
  return (
    <header className={`grid grid-cols-12 px-5 pt-9 pb-10  grid-rows-2 md:grid-rows-1 md:grid-rows-0 bg-purple-100 md:bg-transparent items-center gap-y-4  ${className}`}>
      <h1 className="col-span-full md:col-start-1 md:col-end-auto justify-self-center md:justify-self-stretch row-start-1  font-bold text-white text-xl leading-none  md:text-400 md:text-purple-100">
        Dashboard
      </h1>
      <form
        className="relative col-span-full md:col-start-5 md:col-end-9  lg:col-start-4 lg:col-end-8 row-start-2 row-end-3 md:row-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="hidden" htmlFor="search"></label>
        <input
          className="py-3 pr-11 pl-6 bg-purple-10 w-full placeholder:text-purple-80 placeholder:text-base placeholder:leading-5 placeholder:font-medium rounded-[10px]"
          placeholder="Search"
          type="search"
          name="search"
          id="search"
        />
        <button className="absolute top-1/2 -translate-y-1/2 right-6 text-purple-80 ">
          <RiSearchLine />
        </button>
      </form>
      <div className="hidden lg:flex items-center gap-x-2.5 col-start-10 col-end-12 justify-self-center row-start-1">
        <button className="p-2 rounded-lg bg-purple-10 text-purple-100">
          <IoNotificationsOutline size={24} />
        </button>
        <button className="p-2 rounded-lg bg-purple-10 text-purple-100">
          <IoMoonOutline size={24} />
        </button>
      </div>
      <div className="h-[38px] md:h-auto w-[38px] md:w-auto border-2 md:border-none  border-white rounded-full p-1 md:flex items-center gap-x-2.5 text-purple-100  col-end-12 row-start-1 md:col-start-11 md:col-end-13 md:justify-self-end">
        <img
          className=" md:w-[50px] md:h-[50px] rounded-full md:border-2 border-purple-100 md:p-0.5 object-cover"
          src={avatar}
          alt="avatar"
        />
        <div className="hidden md:block py-1.5 px-0.5">
          <IoChevronDown />
        </div>
      </div>
    </header>
  );
}

export default Header;
