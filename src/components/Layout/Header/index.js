import React from "react";
import avatar from "../../../assets/avatar.jpg";
import { ArrowDown2, HambergerMenu, Moon, Notification, SearchNormal1 } from "iconsax-react";

function Header({ className }) {
  return (
    <header
      className={`grid grid-cols-12 px-5 pt-9 pb-10  grid-rows-2 lg:grid-rows-1 lg:grid-rows-0 bg-purple-100 lg:bg-transparent items-center gap-y-4  ${className}`}
    >
      <HambergerMenu size="24" color="#ffffff" variant="Outline" className="row-start-1 col-start-1 col-end-2 justify-self-center"/>
      <h1 className="col-span-full lg:col-start-1 lg:col-end-auto justify-self-center lg:justify-self-stretch row-start-1  font-bold text-white text-xl leading-none  lg:text-400 lg:text-purple-100">
        Dashboard
      </h1>
      <form
        className="relative col-span-full albig:col-start-5 albig:col-end-9  lg:col-start-5 lg:col-end-11 row-start-2 row-end-3 lg:row-auto"
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
          <SearchNormal1 size="16" color="#6A35FF" variant="Outline" />
        </button>
      </form>
      <div className="hidden albig:flex items-center gap-x-2.5 col-start-10 col-end-12 justify-self-center row-start-1">
        <button className="p-2 rounded-lg bg-purple-10 text-purple-100">
          <Notification size="24" color="#6A35FF" variant="Outline" />
        </button>
        <button className="p-2 rounded-lg bg-purple-10 text-purple-100">
          <Moon size="24" color="#6A35FF" variant="Outline" />
        </button>
      </div>
      <div className="h-[38px] lg:h-auto w-[38px] lg:w-auto border-2 lg:border-none  border-white rounded-full p-1 lg:flex items-center gap-x-2.5 text-purple-100  col-end-12 row-start-1 lg:col-start-11 lg:col-end-13 lg:justify-self-end">
        <img
          className=" lg:w-[50px] lg:h-[50px] rounded-full lg:border-2 border-purple-100 lg:p-0.5 object-cover"
          src={avatar}
          alt="avatar"
        />
        <div className="hidden lg:block py-1.5 px-0.5">
          <ArrowDown2 size="16" color="#6A35FF" variant="Outline"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
