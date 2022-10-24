import {  PlayCircle } from "iconsax-react";
import React from "react";

function Tracker({ className }) {
  return (
    <div
      className={`flex items-center justify-between gap-x-2 md:gap-x-0 bg-white rounded-md ${className}`}
    >
      <div className="flex items-center justify-between py-4 px-3 kshorty:px-7 bigger:px-[38px] flex-1 bg-white rounded-[10px]">
        <h3 className="kshorty:text-300 text-xs  font-medium text-gray-20">Time tracking</h3>
        <div className="pt-1 pr-3 pb-1.5 kshorty:pl-4 px-2 kshorty:px-3.5 bg-purple-150 rounded text-purple-70  kshorty:text-300 text-xs ">
          00:03:22
        </div>
        <div className="relative w-5 h-5 kshorty:w-8 kshorty:h-8 rounded-full ">
          <PlayCircle
            size="32"
            color="#6A35FF"
            className="absolute inset-0 hidden kshorty:block"
            variant="Bold"
          />
          <PlayCircle
            size="20"
            color="#6A35FF"
            className="absolute inset-0 block kshorty:hidden"
            variant="Bold"
          />
        </div>
      </div>
      <div className="flex justify-end pr-3.5 gap-x-2  miniLgap-x-4  items-center text-200 vmini:text-300 md:hidden font-medium">
        <p className="text-inherit text-gray-20">Sort by:</p>
        <div className=" text-gray-60 border border-gray-50 rounded py-2 pr-8 pl-2.5 ">
          Events
        </div>
      </div>
    </div>
  );
}

export default Tracker;
