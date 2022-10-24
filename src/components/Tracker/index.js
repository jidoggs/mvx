import { Play, PlayCircle } from "iconsax-react";
import React from "react";
import { HiPlay } from "react-icons/hi";

function Tracker({className}) {
  return (
    <div className={`flex items-center justify-between bg-white rounded-md ${className}`}>
      <div className="flex items-center justify-between py-4 px-7 bigger:px-[38px] flex-1 bg-white rounded-[10px]">
        <h3 className="text-300  font-medium text-gray-20">
          Time tracking
        </h3>
        <div className="pt-1 pr-3 pb-1.5 pl-4 px-2.5 bg-purple-150 rounded text-purple-70  text-300">
          00:03:22
        </div>
        <div className="relative w-8 h-8 rounded-full ">
          <PlayCircle
            size="16"
            color="#6A35FF"
            className="absolute inset-0"
            variant="Bold"
          />
        </div>
      </div>
      <div className="flex items-center text-200 md:hidden font-medium">
        <p>Sort by:</p>
        <div className=" text-gray-60 border border-gray-50 rounded ">
          Events
        </div>
      </div>
    </div>
  );
}

export default Tracker;
